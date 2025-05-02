const { body, validationResult } = require('express-validator');

const userValidationRules = [
  body('studentFirstName').notEmpty().withMessage('First name is required'),
  body('studentLastName').notEmpty().withMessage('Last name is required'),
  body('grade').isInt({ min: 1, max: 12 }).withMessage('Grade must be between 1 and 12'),
  body('age').isInt({ min: 4, max: 18 }).withMessage('Age must be between 4 and 18'),
  body('tshirtSize').notEmpty().withMessage('T-shirt size is required'),
  body('gender').isIn(['male', 'female', 'other']).withMessage('Invalid gender'),
  body('camp').isIn(['full', 'half']).withMessage('Camp must be full or half'),
  body('location').notEmpty().withMessage('Location is required'),
  body('dob').isISO8601().toDate().withMessage('Invalid date of birth'),
  body('phone').isMobilePhone().withMessage('Invalid phone number'),
  body('email').isEmail().withMessage('Invalid email'),
  body('parentName').notEmpty().withMessage('Parent name is required'),
  body('emergencyContactName').notEmpty().withMessage('Emergency contact name is required'),
  body('emergencyContactPhone').isMobilePhone().withMessage('Invalid emergency contact number'),
  body('mediaRelease').isBoolean().withMessage('Media release must be true or false'),
  body('signedDate').isISO8601().toDate().withMessage('Signed date must be a valid date'),
];

// Middleware to check validation result
const validateUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  userValidationRules,
  validateUser
};
