// controllers/userController.js
const User = require('../models/User');

module.exports.completeRegistration = async (req, res, next) => {
    try {
      const { studentFirstName, studentLastName, grade, allergies, tshirtSize, parentFirstName, parentLastName, email, phone, camp, location,camperName,dob,parentName,medicalConditions, medications,emergencyContactName,emergencyContactPhone,mediaRelease,signedDate, signature} = req.body;
      
      // Example logic: Store data in the database (e.g., using Mongoose)
      const user = new User({
        studentFirstName,
        studentLastName,
        grade,
        allergies,
        tshirtSize,
        parentFirstName,
        parentLastName,
        email,
        phone,
        camp,
        location,
        camperName,
        dob,
        parentName,
        medicalConditions,
        medications,
        emergencyContactName,
        emergencyContactPhone,
        mediaRelease,
        signedDate,
        signature
      });
      
      await user.save();
      
      res.status(200).json({ message: 'Registration complete' });
    } catch (error) {
      console.error('Error in registration:', error);
      res.status(500).json({ message: 'Something went wrong during registration' });
    }
};


