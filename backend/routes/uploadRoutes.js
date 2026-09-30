import path from 'path';
import express from 'express';
import multer from 'multer';
import { protect, admin } from '../middleware/authMiddleware.js';
const router = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb ) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }

});

function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
  
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb('Images only!');
    }
    
  }

  const upload = multer({
    storage,
    fileFilter(req, file, cb) {
      checkFileType(file, cb);
    },
  });

  const uploadSingleImage = upload.single('image');

  router.post('/', protect, admin, (req, res) => {
    uploadSingleImage(req, res, (err) => {
      if (err) {
        return res.status(400).send({ message: err.message || err });
      }
      if (!req.file) {
        return res.status(400).send({ message: 'No image file provided' });
      }
      res.send({
        message: 'Image Uploaded',
        image: `/${req.file.path}`,
      });
    });
  });
  

export default router;