// backend/models/FoodRequest.js
const mongoose = require('mongoose');

const foodRequestSchema = new mongoose.Schema({
  donor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
},
  foodDescription: { 
    type: String, 
    required: true 
},
  quantity: { 
    type: String, 
    required: true 
},
  pickupAddress: { 
    type: String, 
    required: true 
},
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Picked Up', 'Delivered'],
    default: 'Pending'
  },
  assignedVolunteer: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
},
  createdAt: { 
    type: Date, 
    default: Date.now 
}
});

module.exports = mongoose.model('FoodRequest', foodRequestSchema);
