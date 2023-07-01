const express=require('express');
const bodyParser=require('body-parser');
const {randomBytes} =require('crypto');
const app = express();
app.use(bodyParser.json());

const categories={};

app.get('/jobcategories',(req,res)=>{

    
    
    res.send(categories);

});

app.post('/jobcategories',(req,res)=> {
    const categoryId = randomBytes(4).toString('hex');
    
    
    const {type}= req.body;
    categories[categoryId]={
        categoryId,
        type
    };
    res.status(201).send(categories[categoryId]);
});

app.listen(4000,() => {
    console.log("Listening to port 4000")
});

