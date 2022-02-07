const express = require('express');
const app=express();

// Importing the api route
const api=require('./Routes/api');

app.use('/api',api);

const port=process.env.port || 5000;
app.listen(port,()=>{
    console.log("Server is running on port 5000");
})