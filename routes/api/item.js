const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Item = require("../../models/Items");
const auth = require('../../middleware/auth')
const upload = require("../../middleware/image-uploader");

const url = "mongodb://localhost/resturant";
const connect = mongoose.createConnection(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let gfs;

connect.once("open", () => {
  // initialize stream
  gfs = new mongoose.mongo.GridFSBucket(connect.db, {
    bucketName: "uploads",
  });
});

router
  .route("/")
  .post(upload.single("file"), (req, res, next) => {

    const { name, category, slug, price, takeOut, homeDelivery } = req.body;
    // check for existing images
    Item.findOne({ name })
      .then((item) => {
        if (item) {
          return res.status(400).json({ message: "Item already in the inventory" })
        }
        let newItem = new Item({
          name,
          category,
          slug,
          homeDelivery,
          price,
          takeOut,
          filename: req.file.filename,
          fileId: req.file.id,
        });

        newItem
          .save()
          .then((item) => {
            res.status(200).json(item);
          })
          .catch((err) => res.status(500).json({ message: "error in server" }));
      })
      .catch((err) => res.status(500).json({ message: "error in server" }));
  })
  .get((req, res, next) => {
    Item.find({})
      .then((items) => {
        res.status(200).json(
          items
        );
      })
      .catch((err) => res.status(500).json({ message: "error in server" }));
  });

router.route("/:id").delete((req, res, next) => {
  Item.findById(req.params.id)
    .then((item) => {
      if (item) {
        Item.findByIdAndDelete(req.params.id)
          .then(() => {
            return res.status(200).json({
              success: true,
              message: `File with ID: ${req.params.id} deleted`,
            });
          })
          .catch((err) => {
            return res.status(500).json({ message: "error in server" });
          });
      } else {
        res.status(200).json({
          success: false,
          message: `File with ID: ${req.params.id} not found`,
        });
      }
    })
    .catch((err) => res.status(500).json({ message: "error in server" }));
});

router.route("/image/:filename").get((req, res, next) => {
  gfs.find({ filename: req.params.filename }).toArray((err, files) => {
    if (!files[0] || files.length === 0) {
      return res.status(200).json({
        success: false,
        message: "No files available",
      });
    }

    if (
      files[0].contentType === "image/jpeg" ||
      files[0].contentType === "image/png" ||
      files[0].contentType === "image/svg+xml"
    ) {
      // render image to browser
      gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    } else {
      res.status(404).json({
        message: "Not an image",
      });
    }
  });
});

module.exports = router;
