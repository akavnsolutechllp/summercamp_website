const express = require('express');
const router = express.Router();

const { completeRegistration } = require('../controllers/userController.js');

router.post('/complete-registration', completeRegistration);



module.exports = router;
