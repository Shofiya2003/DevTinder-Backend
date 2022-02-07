const express = require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/findyoursimrandatabase');
const app=express();


app.use(bodyParser.json());
// Importing the api route
const api=require('./Routes/api');

app.use('/api',api);

const port=process.env.port || 5000;
app.listen(port,()=>{
    console.log("Server is running on port 5000");
})