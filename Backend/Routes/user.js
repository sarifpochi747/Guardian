
const express = require('express');
const {getAllAddProfiles, createAllAddProfiles,UpdateAllAddProfiles} = require('../Controller/user');

const multer = require('multer');
const path = require('path');

const storage = multer.memoryStorage();
const upload = multer({ dest: 'uploads/',storage: storage});

const router = express.Router();
router.get('/addProfiles', getAllAddProfiles);
router.post('/CreateAddProfiles',upload.single('Images') ,createAllAddProfiles);
router.put('/UpdateAddProfiles',upload.single('Images'),UpdateAllAddProfiles);



module.exports = router;

