
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
  UpdateComment,
  SignUp,
  Signin,
  GetUser,
  getAllImages,
  createAllAddImages,
  getAllVideos,
  createAllAddVideos,
  getCustomer,
  createCustomer,
  getCustomerId,
  getAllNewVideos,
  updateCustomer,
  createAllNewAddVideos,
  deleteCustomer
} = require('../Controller/user');



const multer = require('multer');
const path = require('path');

// Create a multer storage instance
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the destination folder where the file should be saved
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Generate a unique file name for the uploaded file
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileName = file.fieldname + '-' + uniqueSuffix + '.mp4';
    cb(null, fileName);
  }
});

// Create a multer upload instance
const upload = multer({ storage });

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
router.get("/getComment",getAllComment)
router.post("/CreateComment",CreateComment)
router.put("/UpdateComment",UpdateComment)

//Add Images
router.get("/getImages",getAllImages)
router.post("/createAllAddImages",createAllAddImages)


//Add Customer
router.get("/getCustomerAll",getCustomer)
router.get("/getCustomer/:idCustomer",getCustomerId)
router.post("/createCustomer",createCustomer)
router.put("/updateCustomer",updateCustomer)
router.delete("/deleteCustomer/:idcustomer",deleteCustomer)


//Add Videos
router.get("/getAllVideos",getAllVideos)
router.post("/createAllAddVideos",createAllAddVideos)

//New videos
router.get("/getAllNewVideos",getAllNewVideos)
router.post("/createAllNewAddVideos",upload.single('video'),createAllNewAddVideos)

//Authentication
router.post('/register-user',SignUp);
router.post('/signin',Signin);
router.get('/user-profile/:id',GetUser);





module.exports = router;

