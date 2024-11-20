var mongoose=require('mongoose')
var getInTouchSchema= new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
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
module.exports=mongoose.model('GetInTouch',getInTouchSchema);