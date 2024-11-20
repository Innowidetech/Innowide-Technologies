var mongoose=require('mongoose')
var contactUsSchema=new mongoose.Schema({
    fullName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phoneNumber:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
    },
},{timestamps:true});
module.exports=mongoose.model('ContactUs',contactUsSchema);