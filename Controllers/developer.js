const mongoose=require('mongoose')
const Developer=require('../models/userInfo')
const get=async (req,res)=>{
    const {id}=req.body;
    if(!mongoose.isValidObjectId(id)){
        res.json({status:'error',error:"Incorrect user id"});
    }
    const developer=await Developer.findOne({userId:id});
    if(!developer){
        res.json({status:'error',error:"Developer not found"});
    }
    else
        res.json({status:'ok',data:developer});
}


const post=async (req,res)=>{
    const {userId,name,institution,batch,skills,bio,socialLinks,avatar}=req.body;
    console.log(name);
    if(!mongoose.isValidObjectId(userId)){
        res.json({status:'error',error:'invalid user id'});
        return;
    }

    if(name==='' || bio==='' || skills===''){
        res.json({status:'error',error:'enter all the required information'});
    }
    try{
        const newDeveloper=Developer.create({
            userId,
            name,
            institution,
            batch,
            skills,
            bio,
            socialLinks,
            avatar
        })

        res.json({status:'ok',data:'Developer created successfully'});
    }

    catch(err){
        res.json({status:'error',data:err})
    }
    

    
}

module.exports={get,post};