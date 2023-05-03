const {AddProfiles} = require('../Model/user');

// AddProfiles

const getAllAddProfiles = async (req, res) => {
  const [ alladdprofiles ] = await AddProfiles.fetchAll();
  res.status(200).json(alladdprofiles);
};

const createAllAddProfiles = async (req, res) => {
  const { Title,Descript, } = req.body;
  if (!req.file) {
    return res.status(req.file).send('No file uploaded');
  }
  const Images = req.file.filename;
  await AddProfiles.create(Title,Descript,Images);
  res.status(201).send('Profile created successfully');
};

module.exports = {getAllAddProfiles, createAllAddProfiles};
