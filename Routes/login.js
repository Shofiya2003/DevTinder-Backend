const express=require('express');
const bcrypt=require('bcryptjs');
const router=express.Router();


const User=require('../models/user');

router.get('/',(req,res)=>{
    res.send('This is the api for login of find your simran');
});

router.post('/',async (req,res)=>{
    const {username,password:plaintextpassword}=req.body;
    if(!username || typeof username!=="string"){
        res.json({status:'err',error:'Invalid Username'});
    }

    if(!plaintextpassword || typeof plaintextpassword!=='string'){
        res.json({status:'err',error:'Invalid password'});
    }

    if(plaintextpassword.length<5){
        res.json({status:'err',error:'Password too short.It should have atleast 8 characters'});
    }
    const password=await bcrypt.hash(plaintextpassword,10);
    try{
        const newUser=await User.create({
            username,
            password
        });
        console.log(`user created successfully ${newUser}`);
    }catch(error){
        if(error.code===11000){
            //duplicate key
            res.json({status:"err",error:"Username already in use"});
        }
       else res.json({error:error});
    }

    res.json({status:"ok"});
});

module.exports=router;