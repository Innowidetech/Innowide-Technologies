var mongoose = require('mongoose')
var reachOutSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    }
}, { timestamps: true });
module.exports = mongoose.model('Email', reachOutSchema);