const express=require('express');
const bodyParser=require('body-parser');

const app = express();
//app.use(bodyParser.json());

const cat={};

app.get('/jobcategories',(req,res)=>{
    
    res.send(req.body);

});

app.post('/jobcategories',(req,res)=> {
    // res.status(201).send("my hello")
    const id=123;
    const {category}= req.body;
    cat[id]={
        id,
        category
    };
    res.status(201).send(cat[id]);
});

app.listen(4000,() => {
    console.log("Listening to port 4000")
});


