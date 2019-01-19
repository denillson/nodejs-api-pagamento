const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  preference_id: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  status: {
    type: String,
    required: true,
    default: 'pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Payment', PaymentSchema);
