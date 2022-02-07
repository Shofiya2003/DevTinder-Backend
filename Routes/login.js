const express=require('express');
const router=express.Router();


router.get('/',(req,res)=>{
    res.send('This is the api for login of find your simran');
})

module.exports=router;