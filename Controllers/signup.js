const bcrypt=require('bcryptjs');
const User=require('../models/user');
const get=(req,res)=>{
    res.send('This is the api for login of find your simran');
}

const post=async (req,res)=>{
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
    const newUser=User.create({
        username,
        password
    }).then(()=>{
        res.json({status:'ok'});
    }).catch(error=>{
        console.log(error);
    })
    

    console.log("hey");
}

module.exports={get,post};