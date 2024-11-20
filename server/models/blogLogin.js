var mongoose = require('mongoose');
var LoginSchema = new mongoose.Schema({
    password:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('Login', LoginSchema);