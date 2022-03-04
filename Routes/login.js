const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/user');
const { post } = require('../Controllers/login');
const JWT_SECRET="jfhfksndhgkdlj"
const passport=require('passport');
var GoogleStrategy = require('passport-google-oidc');
const router=express.Router();

router.post('/',post);










module.exports=router;
