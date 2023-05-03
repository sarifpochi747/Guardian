
const express = require('express');
const getAllProfiles = require('../Controller/user');

const router = express.Router();
router.get('/', getAllProfiles);

module.exports = router;

