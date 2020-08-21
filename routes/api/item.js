const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Item = require("../../models/Items");
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
    console.log(req.body);
    const { name, category, slug, price, takeOut } = req.body;
    // check for existing images
    Item.findOne({ name })
      .then((item) => {
        console.log(item);
        if (item) {
          return res.status(200).json({
            success: false,
            message: "Item already exists",
          });
        }

        let newItem = new Item({
          name,
          category,
          slug,
          price,
          takeOut,
          filename: req.file.filename,
          fileId: req.file.id,
        });

        newItem
          .save()
          .then((item) => {
            res.status(200).json({
              success: true,
              item,
            });
          })
          .catch((err) => res.status(500).json(err));
      })
      .catch((err) => res.status(500).json(err));
  })
  .get(async (req, res, next) => {
    let query = Item.find();
    const total = await Item.countDocuments();
    const pagination = {};
    //Pagination
    if (req.query.page) {
      const page = parseInt(req.query.page, 10) || 1;
      const limit = parseInt(req.query.limit, 10) || 1;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      query = query.skip(startIndex).limit(limit);
      //Pagination result

      if (endIndex < total) {
        pagination.next = {
          page: page + 1,
          limit,
        };
      }

      if (startIndex > 0) {
        pagination.prev = {
          page: page - 1,
          limit,
        };
      }
    }
    try {
      const results = await query;

      return res.status(200).json({
        success: true,
        count: results.length,
        pagination: pagination,
        data: results,
        total,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
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
            return res.status(500).json(err);
          });
      } else {
        res.status(200).json({
          success: false,
          message: `File with ID: ${req.params.id} not found`,
        });
      }
    })
    .catch((err) => res.status(500).json(err));
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
        err: "Not an image",
      });
    }
  });
});

module.exports = router;
