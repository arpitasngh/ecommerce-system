// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Connect to MongoDB using only the connection string
        await mongoose.connect('mongodb://localhost:27017/ecommerce');
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
