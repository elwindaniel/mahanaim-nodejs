const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dir;
    dir = `uploads/${file.fieldname}`;
    fs.exists(dir, (exist) => {
      if (!exist) {
        fs.mkdirSync(dir, { recursive: true });
        // return fs.mkdir(dir, (error) => cb(error, dir));
      }
      return cb(null, dir);
    });
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

var upload = multer({ storage: storage });

exports.multipleUpload = upload.fields([
  { name: "profileImage", maxCount: 1 },
  { name: "eventImage", maxCount: 1 },
  { name: "eventGuestImage" },
  { name: "eventGuest",maxCount:1 },
  { name: "sermonImage", maxCount: 1 },
]);
