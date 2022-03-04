const express=require('express');
const mongoose = require('mongoose');
const router=express.Router();
const Developer=require('../models/userInfo');

const {get,post}=require('../Controllers/developer');

router.get('/',get);

router.post('/',post);


module.exports=router;