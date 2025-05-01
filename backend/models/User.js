const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Registration Form Data
  studentFirstName: { type: String, required: true },
  studentLastName: { type: String, required: true },
  grade: { type: String, required: true },
  allergies: { type: String },
  tshirtSize: { type: String, required: true },
  parentFirstName: { type: String, required: true },
  parentLastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  camp: { type: String, required: true },
  location: { type: String, required: true },
  camperName: { type: String },
  dob: { type: String },
  parentName: { type: String },
  medicalConditions: { type: String },
  medications: { type: String },
  emergencyContactName: { type: String },
  emergencyContactPhone: { type: String },
  mediaRelease: { type: String },
  signedDate: { type: String },

  // Signature (optional as base64 string)
  signature: { type: String } // You can store base64 data from SignaturePad if needed

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
