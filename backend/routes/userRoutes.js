const express = require('express');
const router = express.Router();

const { userValidationRules, validateUser } = require('../middlewares/validateUser');

const { completeRegistration, getProfile } = require('../controllers/userController.js');

router.post('/complete-registration', completeRegistration);

router.get('/getprofile/:id', getProfile);

module.exports = router;
