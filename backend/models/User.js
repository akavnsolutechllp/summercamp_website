const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Registration Form Data
  studentFirstName: { type: String, required: true },
  studentLastName: { type: String, required: true },
  grade: { type: String, required: true },
  age: { type: Number, required: true }, 
  tshirtSize: { type: String, required: true },
  gender: { type: String, required: true },
  camp: { type: String, required: true },
  location: { type: String, required: true },
  timings: { type: String }, // Only used if camp === 'half'

  // Liability Form Data
  camperName: { type: String },
  dob: { type: String },
  parentName: { type: String },
  phone: {type: Number},
  email: {type: String},
  medicalConditions: { type: String },
  medications: { type: String },
  emergencyContactName: { type: String },
  emergencyContactPhone: { type: String },
  mediaRelease: { type: String },
  signedDate: { type: String },

  // Signature (optional)
  signature: { type: String }

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
