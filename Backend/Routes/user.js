
const express = require('express');
const {getAllAddProfiles, createAllAddProfiles} = require('../Controller/user');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './uploads',
  filename:(req,file,cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage: storage});

const router = express.Router();
router.get('/addProfiles', getAllAddProfiles);
router.post('/CreateAddProfiles',upload.single('Images') ,createAllAddProfiles);



module.exports = router;

