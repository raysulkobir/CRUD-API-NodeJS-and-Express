//* models/Brand.js
const mongoose = require('mongoose');

//TODO Define the Brand schema
const BrandSchema = new mongoose.Schema({
    name: {
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

//TODO Create the model
const Brand = mongoose.model('brand', BrandSchema);

module.exports = Brand;
