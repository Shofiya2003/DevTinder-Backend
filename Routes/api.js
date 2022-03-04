const { application } = require('express');
const express=require('express');
const router=express.Router();

// importing the login route
const signup=require('./signup');
const login=require('./login');
const changePassword=require('./changePassword');
router.use('/signup',signup);
router.use('/login',login)
router.use('/changePassword',changePassword)

//importing developer route
const developer=require('./developer');
router.use('/developer',developer);


router.get('/',(req,res)=>{
    res.send("This is the api for find your simran");
});

module.exports=router;