const express=require('express');
// const randomBytes = require('crypto');
// const body-Parsor =require('body-parsor');
const app = express();
// app.use('body-parsor');


app.get('/jobcategories',(req,res)=>{
    res.send(req.body)

});

app.post('/jobcategories',(req,res)=> {
    res.status(201).send("my hello")
});

app.listen(4000,() => {
    console.log("Listening to port 4000")
});


