// models/payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['paid', 'pending'],
        default: 'pending',
    },
});

module.exports = mongoose.model('Payment', paymentSchema);
