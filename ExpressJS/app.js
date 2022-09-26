const express = require('express');
const app = express();

const members=[
    {
        id:1,
        name: 'Sahana',
        email: 'sahana@gmail.com',
        status: 'active'
    },
    {
        id:2,
        name: 'Shrinidhi',
        email: 'Shrinidhi@gmail.com',
        status: 'active'
    },

    {
        id:3,
        name: 'Rohini',
        email: 'Rohini@gmail.com',
        status: 'active'
    },
    
];

app.get('/api/members', (req,res)=>{
res.json(members);
});

const PORT = process.env.PORT || 3012;
app.listen(PORT, ()=> console.log('server started...'));