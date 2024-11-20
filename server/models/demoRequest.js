var mongoose = require("mongoose");
var demoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    modeOfCommunication: {
        type: String,
        required: true,
        enum: ['Call', 'Email', 'GoogleMeet', 'Whatsapp', 'Zoom']
    },
    category: {
        type: String,
        enum: ['Digital Marketing', 'IT Services'],
        required:true
    }
}, { timestamps: true });
module.exports = mongoose.model('Demo', demoSchema);