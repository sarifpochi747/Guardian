const Profiles = require('../Model/user');

const getAllProfiles = async (req, res) => {
  const [ allprofiles ] = await Profiles.fetchAll();
  res.status(200).json(allprofiles);
};

module.exports = getAllProfiles;
