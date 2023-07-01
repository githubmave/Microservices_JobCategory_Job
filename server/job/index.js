const express = require('express');
const app= express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());

jobcategories={};

app.get('/jobcategories/:id/job',(req,res)=>{
    res.send(req.body)
});

app.post('/jobcategories/:id/job',(req,res) =>{

    const id=234;

    const content = req.body.content;
    
    jobcategories[id] ={
        id:234,
        content   
    };

    res.status(201).send(jobcategories[id]);
});

app.listen(4001,()=>{
    console.log("Listening to port 4001.")
});