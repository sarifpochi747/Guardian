
const express = require('express');
const {
  getAllAddProfiles,
  createAllAddProfiles,
  UpdateAllAddProfiles,
  getAllAddGoals,
  createAllAddGoals,
  UpdateAllAddGoals,
  getAllAddStandard,
  createAllAddStandard,
  UpdateAllAddStandard
} = require('../Controller/user');

const multer = require('multer');
const path = require('path');

const storage = multer.memoryStorage();
const upload = multer({ dest: 'uploads/',storage: storage});

const router = express.Router();

const uploadFields = [];
for (let i = 1; i <= 7; i++) {
  uploadFields.push({ name: `img${i}`, maxCount: 1 });
}

//AddProfiles
router.get('/addProfiles', getAllAddProfiles);
router.post('/CreateAddProfiles', upload.fields(uploadFields) ,createAllAddProfiles);
router.put('/UpdateAddProfiles', upload.fields(uploadFields),UpdateAllAddProfiles);

//AddGoals
router.get('/addGoals', getAllAddGoals);
router.post('/CreateAddGoals',upload.single('Images') ,createAllAddGoals);
router.put('/UpdateAddGoals',upload.single('Images'),UpdateAllAddGoals);

//AddStandard
router.get('/addStandard', getAllAddStandard);
router.post('/CreateAddStandard',upload.single('Images') ,createAllAddStandard);
router.put('/UpdateAddStandard',upload.single('Images'),UpdateAllAddStandard);


module.exports = router;

