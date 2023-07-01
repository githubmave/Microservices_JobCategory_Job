const express = require('express');
const {randomBytes}=require('crypto');

const app= express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());

jobByCategoryId={};

app.get('/jobcategories/:id/job',(req,res)=>{
    res.send(req.body)
});

app.post('/jobcategories/:id/job',(req,res) =>{

    const jobId=randomBytes(4).toString('hex');
    
    const jobList=jobByCategoryId[req.params.id];
    const {jobContent}=req.body;
    
   // console.log(req.param.id);
//

    
   

    res.status(201).send("hello Bernie");
});

app.listen(4001,()=>{
    console.log("Listening to port 4001.")
});