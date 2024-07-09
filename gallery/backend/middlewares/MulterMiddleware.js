import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
    // console.log("file",file);

  },
  filename: function (req, file, cb) {
    cb(null, `${uuidv4()}_${path.extname(file.originalname)}`);
    console.log("file",file);

  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = [
    "image/png",
    "image/peng",
    "image/jpg",
    "image/jpeg",
  ];

  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadMiddleware = multer({storage, fileFilter});

export default uploadMiddleware;