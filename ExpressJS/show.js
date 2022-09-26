const express = require('express');
const app = express();
const path = require('path');

// static server
app.use(express.static(path.join(__dirname, 'public')));

/*
//creating a server
app.get("/", (req,res)=>{
   // res.send("<h1>Welcome to Express.js</h1>")
   //res.sendFile(path.join(__dirname, 'public', "index.html")); 
});*/

const port = process.env.port || 4200;
app.listen(port, () => console.log('server started on port ${port}'));