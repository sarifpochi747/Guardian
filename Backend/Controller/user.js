const {AddProfiles, AddGoals, AddStandard} = require('../Model/user');

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
  UpdateAllAddStandard
};
