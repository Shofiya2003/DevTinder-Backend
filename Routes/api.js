const { application } = require('express');
const express=require('express');
const router=express.Router();

// importing the login route
const signup=require('./signup');
const login=require('./login');
router.use('/signup',signup);
router.use('/login',login)


router.get('/',(req,res)=>{
    res.send("This is the api for find your simran");
});

module.exports=router;