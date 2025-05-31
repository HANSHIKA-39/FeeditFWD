const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: { 
    type: String, 
    enum: ['Donor', 'Volunteer', 'Admin', 'Moderator'], 
    required: true 
  },
  password: {
    type: String,
    required: true,
    unique: true,
    validate: {
        validator: function (value) {
        // At least 1 letter, 1 number, 1 special character, and min 6 characters
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value);
        },
        message:
        'Password must contain at least one letter, one number, one special character, and be at least 6 characters long.',
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
