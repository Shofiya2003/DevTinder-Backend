const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/user');
const JWT_SECRET="jfhfksndhgkdlj"
const router=express.Router();

router.post('/',async (req,res)=>{
    const {username,password}=req.body;
    console.log(password);
    const user=await User.findOne({username});
    if(!user){
        res.json({status:'error',error:'Invalid username or password'});
    }
    console.log(user);
    if(await bcrypt.compare(password,user.password)){
        // Password,username combination is successful
        const token=jwt.sign({username:username,id:user._id},JWT_SECRET);
        res.json({status:'ok',data:token});
    }
    else 
        res.json({status:'error',error:'Invalid username or password'});
})

module.exports=router;
