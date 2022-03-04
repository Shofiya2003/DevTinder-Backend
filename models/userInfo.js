const mongoose=require('mongoose');

const userInfoSchema=new mongoose.Schema({
    userId:{type:mongoose.Types.ObjectId,required:true,unique:true},
    name:{type:String,required:true},
    institution:{type:String},
    batch:{type:Number},
    skills:{type:[String],required:true},
    bio:{type:String,required:true},
    socialLinks:{type:Map,of:String},
    avatar:{type:String}
});

const developer=mongoose.model('developer',userInfoSchema);

module.exports=developer;