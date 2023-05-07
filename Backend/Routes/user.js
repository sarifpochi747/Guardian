
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

const uploadFields2 = [];
for (let i = 1; i <= 4; i++) {
  uploadFields.push({ name: `img${i}`, maxCount: 1 });
}

//AddProfiles
router.get('/addProfiles', getAllAddProfiles);
router.post('/CreateAddProfiles', upload.fields(uploadFields) ,createAllAddProfiles);
router.put('/UpdateAddProfiles', upload.fields(uploadFields),UpdateAllAddProfiles);

//AddGoals
router.get('/addGoals', getAllAddGoals);
router.post('/CreateAddGoals',upload.single('img') ,createAllAddGoals);
router.put('/UpdateAddGoals',upload.single('img'),UpdateAllAddGoals);

//AddStandard
router.get('/addStandard', getAllAddStandard);
router.post('/CreateAddStandard',upload.fields(uploadFields) ,createAllAddStandard);
router.put('/UpdateAddStandard',upload.fields(uploadFields),UpdateAllAddStandard);


module.exports = router;

