const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Registration Form Data
  invoice: {
    type: {
      invoiceid: { type: String },
      sent: { type: Boolean, default: false }
    },
    default: {}
  },
  studentFirstName: { type: String, required: true },
  studentLastName: { type: String, required: true },
  grade: { type: String, required: true },
  age: { type: Number, required: true }, 
  tshirtSize: { type: String, required: true },
  gender: { type: String, required: true },
  camp: { type: String, required: true },
  campSession: { type: String, required: true },
  activity: { type: String, required: true },

  // Liability Form Data
  camperName: { type: String },
  dob: { type: String },
  parentName: { type: String },
  phone: {type: String},
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
