const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const path = require("path");
const crypto = require("crypto");
const config = require('config');
const db = config.get('mongoURI');
/* 
    GridFs Configuration
*/

// create storage engine
const storage = new GridFsStorage({
  url: db,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      // const match = ["image/png", "image/jpeg"];
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }

        // if (match.indexOf(file.mimetype) === -1) {
        //   const filename = `${Date.now()}-restaurant-${file.originalname}`;
        //   return filename;
        // }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });
module.exports = upload;
