
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
  UpdateAllAddStandard,
  CreateComment,
  getAllComment,
  SignUp,
  Signin,
  GetUser
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

//Add Profiles
router.get('/addProfiles', getAllAddProfiles);
router.post('/CreateAddProfiles', upload.fields(uploadFields) ,createAllAddProfiles);
router.put('/UpdateAddProfiles', upload.fields(uploadFields),UpdateAllAddProfiles);

//Add Goals
router.get('/addGoals', getAllAddGoals);
router.post('/CreateAddGoals',upload.single('img') ,createAllAddGoals);
router.put('/UpdateAddGoals',upload.single('img'),UpdateAllAddGoals);

//Add Standard
router.get('/addStandard', getAllAddStandard);
router.post('/CreateAddStandard',upload.fields(uploadFields) ,createAllAddStandard);
router.put('/UpdateAddStandard',upload.fields(uploadFields),UpdateAllAddStandard);


//Add Comment User
router.get("/addComment",getAllComment)
router.post("/CreateComment",CreateComment)
module.exports = router;

//Authentication
router.post('/register-user',SignUp);
router.post('/signin',Signin);
router.get('/user-profile/:id',GetUser);

