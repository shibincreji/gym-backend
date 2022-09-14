const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    contact: { type: Number, required: true },
    lastname: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    cusername: { type: String, required: true },
    password: { type: String, required: true }
    
});

const Customer = mongoose.model("customer", CustomerSchema);
module.exports = Customer