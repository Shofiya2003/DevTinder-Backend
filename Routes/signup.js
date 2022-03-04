const express=require('express');

const router=express.Router();
const {get,post}=require('../Controllers/signup')

const User=require('../models/user');

router.get('/',get);

router.post('/',post);

module.exports=router;