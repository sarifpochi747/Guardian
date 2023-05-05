const {AddProfiles, AddGoals, AddStandard} = require('../Model/user');

// AddProfiles
const getAllAddProfiles = async (req, res) => {
  const [ alladdprofiles ] = await AddProfiles.fetchAll();
  res.status(200).json(alladdprofiles);
};

const createAllAddProfiles = async (req, res) => {
  const { id,Title,Descript, } = req.body;
  if (!req.file) {
    await AddProfiles.create(id,Title,Descript,null);
    res.status(201).send('Profile created successfully');
  }
  else{
    const Images = req.file.buffer.toString('base64');
    await AddProfiles.create(id,Title,Descript,Images);
    res.status(201).send('Profile created successfully');
  }
};

const UpdateAllAddProfiles = async (req, res) => {
  const { id,Title,Descript, } = req.body;
  if (!req.file) {
    await AddProfiles.update(id,Title,Descript,null);
    res.status(201).send('Profile updated successfully');
  }
  else{
    const Images = req.file.buffer.toString('base64');
    await AddProfiles.update(id,Title,Descript,Images);
    res.status(201).send('Profile updated successfully');
  }
}

//AddGoals
const getAllAddGoals = async (req, res) => {
  const [ alladdgoals ] = await AddGoals.fetchAll();
  res.status(200).json(alladdgoals);
};

const createAllAddGoals = async (req, res) => {
  const { id,Title,Descript, } = req.body;
  if (!req.file) {
    await AddGoals.create(id,Title,Descript,null);
    res.status(201).send('Profile created successfully');
  }
  else{
    const Images = req.file.buffer.toString('base64');
    await AddGoals.create(id,Title,Descript,Images);
    res.status(201).send('Profile created successfully');
  }
};

const UpdateAllAddGoals = async (req, res) => {
  const { id,Title,Descript, } = req.body;
  if (!req.file) {
    await AddGoals.update(id,Title,Descript,null);
    res.status(201).send('Profile updated successfully');
  }
  else{
    const Images = req.file.buffer.toString('base64');
    await AddGoals.update(id,Title,Descript,Images);
    res.status(201).send('Profile updated successfully');
  }
}

//AddStandard
const getAllAddStandard = async (req, res) => {
  const [ alladdStandard ] = await AddStandard.fetchAll();
  res.status(200).json(alladdStandard);
};

const createAllAddStandard = async (req, res) => {
  const { id,Title,Descript, } = req.body;
  if (!req.file) {
    await AddStandard.create(id,Title,Descript,null);
    res.status(201).send('Profile created successfully');
  }
  else{
    const Images = req.file.buffer.toString('base64');
    await AddStandard.create(id,Title,Descript,Images);
    res.status(201).send('Profile created successfully');
  }
};

const UpdateAllAddStandard = async (req, res) => {
  const { id,Title,Descript, } = req.body;
  if (!req.file) {
    await AddStandard.update(id,Title,Descript,null);
    res.status(201).send('Profile updated successfully');
  }
  else{
    const Images = req.file.buffer.toString('base64');
    await AddStandard.update(id,Title,Descript,Images);
    res.status(201).send('Profile updated successfully');
  }
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
