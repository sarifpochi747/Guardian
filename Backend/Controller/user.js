const { async } = require('rxjs');
const {AddProfiles, AddGoals, AddStandard, AddComment,Users,AddImage,AddVideo,AddCustomer,AddNewVideo} = require('../Model/user');
const db = require('../databases');

// AddProfiles
const getAllAddProfiles = async (req, res) => {
  const [ alladdprofiles ] = await AddProfiles.fetchAll();
  res.status(200).json(alladdprofiles);
};

const createAllAddProfiles = async (req, res) => {
  const { id,title,descript,img1,img2,img3,img4,img5,img6,img7 } = req.body;

  const images = [];
  for (let i = 1; i <= 7; i++) {
    const fieldname = `img${i}`;
    const files = req.files[fieldname];
    if (files && files.length > 0) {
      const image = files[0].buffer.toString('base64');
      images.push("data:image/jpg;base64,"+image);
    } else {
      images.push(null);
    }
  }
    await AddProfiles.create(id,title,descript,...images);
    res.status(201).send('Profile created successfully');

};

const UpdateAllAddProfiles = async (req, res) => {
  const { id,title,descript,img1,img2,img3,img4,img5,img6,img7 } = req.body;
  await AddProfiles.update(id,title,descript,img1,img2,img3,img4,img5,img6,img7);
  res.status(201).send('Profile update successfully');
}

//AddGoals
const getAllAddGoals = async (req, res) => {
  const [ alladdgoals ] = await AddGoals.fetchAll();
  res.status(200).json(alladdgoals);
};

const createAllAddGoals = async (req, res) => {
  const { id,title,img,descript,sub_title1,sub_descript1,sub_title2,sub_descript2,sub_title3,sub_descript3,sub_title4,sub_descript4,sub_title5,sub_descript5,sub_title6,sub_descript6 } = req.body;

  if (!req.file) {
    await AddGoals.create(id,title,null,descript,sub_title1,sub_descript1,sub_title2,sub_descript2,sub_title3,sub_descript3,sub_title4,sub_descript4,sub_title5,sub_descript5,sub_title6,sub_descript6);
    res.status(201).send('Profile created successfully');
  }
  else{

    const images = req.file.buffer.toString('base64');
    const imgs = "data:image/jpg;base64," + images;
    await AddGoals.create(id,title,imgs,descript,sub_title1,sub_descript1,sub_title2,sub_descript2,sub_title3,sub_descript3,sub_title4,sub_descript4,sub_title5,sub_descript5,sub_title6,sub_descript6);
    res.status(201).send('Profile created successfully');
  }
};

const UpdateAllAddGoals = async (req, res) => {
  const { id,title,img,descript,sub_title1,sub_descript1,sub_title2,sub_descript2,sub_title3,sub_descript3,sub_title4,sub_descript4,sub_title5,sub_descript5,sub_title6,sub_descript6 } = req.body;
    await AddGoals.update(id,title,img,descript,sub_title1,sub_descript1,sub_title2,sub_descript2,sub_title3,sub_descript3,sub_title4,sub_descript4,sub_title5,sub_descript5,sub_title6,sub_descript6);
    res.status(201).send('Profile updated successfully');
}

//AddStandard
const getAllAddStandard = async (req, res) => {
  const [ alladdStandard ] = await AddStandard.fetchAll();
  res.status(200).json(alladdStandard);
};

const createAllAddStandard = async (req, res) => {
  const { id,title,descript,sub_title1,sub_descript1,img1,sub_title2,sub_descript2,img2,sub_title3,sub_descript3,img3,sub_title4,sub_descript4,img4 } = req.body;
  const images = [];
  for (let i = 1; i <= 4; i++) {
    const fieldname = `img${i}`;
    const files = req.files[fieldname];
    if (files && files.length > 0) {
      const image = files[0].buffer.toString('base64');
      images.push("data:image/jpg;base64,"+image);
    } else {
      images.push(null);
    }
  }
    await AddStandard.create(id,title,descript,sub_title1,sub_descript1,images[0],sub_title2,sub_descript2,images[1],sub_title3,sub_descript3,images[2],sub_title4,sub_descript4,images[3]);
    res.status(201).send('Profile created successfully');
};

const UpdateAllAddStandard = async (req, res) => {
  const { id,title,descript,sub_title1,sub_descript1,img1,sub_title2,sub_descript2,img2,sub_title3,sub_descript3,img3,sub_title4,sub_descript4,img4 } = req.body;
    await AddStandard.update(id,title,descript,sub_title1,sub_descript1,img1,sub_title2,sub_descript2,img2,sub_title3,sub_descript3,img3,sub_title4,sub_descript4,img4);
    res.status(201).send('Profile updated successfully');
}

//AddComment
const getAllComment = async (req, res) => {
  const [ getComment] = await AddComment.fetchAll();
  res.json(getComment);
};

// create Comment
const CreateComment = async (req,res)=>{
  const {comment , name , brandManager,userIcon,status} = req.body;
  await AddComment.create(name,brandManager,comment,userIcon,status);
  res.json({msg: "success"})
}


//update status comment
const UpdateComment = async (req,res)=>{
  //[{},{},{}]
  const data = req.body
  for(let i=0;i<data.length;i++)
  {
    await AddComment.update(data[i].idcomment,data[i].status)
  }
}


//get customer
const getCustomer = async(req,res)=>{
  const [getCustomer] = await AddCustomer.fetchAll();
  res.status(200).json(getCustomer)
}

//create customer
const createCustomer = async(req,res)=>{
  const {title,description,customerIcon} = req.body
  await AddCustomer.create(title,description,customerIcon)
  res.status(200).json({msg:"success"})
}


//get customer by id
const getCustomerId = async(req,res)=>{
  const _idCustomer = req.params.idCustomer
  const customer  = await AddCustomer.getCustomerId(_idCustomer)
  res.json(customer)
}

// update customer
const updateCustomer = async(req,res)=>{
  const data = req.body
  for(let i=0;i<data.length;i++)
  {
   await AddCustomer.update(data[i].idcustomer,data[i].title,data[i].description,data[i].customerIcon)
  }
}



//Images
const getAllImages = async (req, res) => {
  const [ alladdimages ] = await AddImage.fetchAll();
  res.json(alladdimages);
};

const createAllAddImages = async (req, res) => {
  const { img } = req.body;
  await AddImage.create(img);
  res.status(201).send('Images uploaedd successfully');
};

//Video
const getAllVideos = async (req, res) => {
  const [ alladdVideos ] = await AddVideo.fetchAll();
  res.json(alladdVideos);
};

const createAllAddVideos = async (req, res) => {
  const { video } = req.body;
  await AddVideo.create(video);
  res.status(201).send('Videos uploaedd successfully');
};

//edit videos
const getAllNewVideos = async (req, res) => {
  const [ alladdnewVideos ] = await AddNewVideo.fetchAll();
  res.json(alladdnewVideos);
};

const createAllNewAddVideos = async (req, res) => {
  try {
    const fileName = req.file.filename;
    console.log(fileName);
    await AddNewVideo.create(fileName);
    res.status(200).json({ message: 'File uploaded successfully', fileName });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};


//Authentication
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SignUp = async(req,res) => {
    const { username, password } = req.body;
    const pwd = await bcrypt.hash(password, 10);
    await Users.signup(username, pwd);
    res.status(201).send('Profile created successfully');
}

const Signin = async(req, res) => {
    const { username,password } = req.body;
    const [Row, Field] = await Users.Signin(username,password);
    const user = Row[0];
    if (!user) {
        return res.send(false);
    }
    const response = await bcrypt.compare(req.body.password, user.password);
    if (!response) {
      return res.send(false);
    }

    let jwtToken = jwt.sign(
        {
          username: user.username,
          userId: user.id,
        },
        'longer-secret-is-better',
        {
          expiresIn: '1h',
        }
    );
    res.status(200).json({
        token: jwtToken,
        expiresIn: 3600,
        _id: user.id,
    });
}

const GetUser = async(req, res) => {
  const _id = req.params.id;
  let [y] = await Users.GetUser(_id);
  res.status(201).json(y);
}








//Export module
module.exports = {
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
  getAllNewVideos,
  createAllNewAddVideos,
  getCustomerId,
  updateCustomer
};
