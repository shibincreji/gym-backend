const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: String, required: true }
    
});

const Admin = mongoose.model("admin", AdminSchema);
module.exports = Admin