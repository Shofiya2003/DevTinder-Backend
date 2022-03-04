const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const JWT_SECRET="jfksnkg sakgknsdhkjfk9400i4994utkjg"
const User=require('../models/user');
const bycrypt=require('bcryptjs');
router.post('/',async (req,res)=>{
    const {token,password:plaintextpassword}=req.body;
    
    try{
        const user=jwt.verify(token,JWT_SECRET);
        //..
        const _id=user.id;
        const hashedPassword=await bycrypt.hash(plaintextpassword,10);
        await User.updateOne({_id},{
            $set:{
                password:hashedPassword
            }
        })
    }catch(err){
        res.json({status:'error',error:err});
    }
    
   
    res.json({status:'ok',message:'password changed successfully'});

})
module.exports=router;