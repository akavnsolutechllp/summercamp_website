// controllers/userController.js
const User = require('../models/User');

module.exports.completeRegistration = async (req, res, next) => {
    try {
      
      const { studentFirstName, studentLastName, grade, age, tshirtSize, gender, camp, timings, location ,camperName,dob, phone, email, parentName, medicalConditions, medications, emergencyContactName, emergencyContactPhone, mediaRelease, signedDate,} = req.body;
      
      // Example logic: Store data in the database (e.g., using Mongoose)
      const user = new User({
        studentFirstName,
        studentLastName,
        grade,
        age,
        tshirtSize,
        gender,
        camp,
        timings,
        location,
        camperName,
        dob,
        email,
        phone,
        parentName,
        medicalConditions,
        medications,
        emergencyContactName,
        emergencyContactPhone,
        mediaRelease,
        signedDate,
        invoice: {
          invoiceid:"",
          sent: false
        }
      });
      
      await user.save();
      
      res.status(200).json({ message: 'Registration complete' ,  userId: user._id });
    } catch (error) {
      console.error('Error in registration:', error);
      res.status(500).json({ message: 'Something went wrong during registration' });
    }
};

module.exports.getProfile = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ profile: user });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Error retrieving user profile' });
  }
};


