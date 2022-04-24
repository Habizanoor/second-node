const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
app.get('/' ,(req,res)=>{
    res.send('Hello World from my own second node!!');
})

const users = [
    {id:1, name:'Shabana', email:'shabana@gmail.com', phone: '0178888888'},
    {id:2, name:'shobnoor', email:'shobnoor@gmail.com', phone: '0178888888'},
    {id:3, name:'suchorita', email:'suchorita@gmail.com', phone: '0178888888'},
    {id:4, name:'shuchonda', email:'shuchonda@gmail.com', phone: '0178888888'},
    {id:5, name:'srabonti', email:'srabonti@gmail.com', phone: '0178888888'},
    {id:6, name:'Sabila', email:'sabila@gmail.com', phone: '0178888888'},
    {id:7, name:'Sohana', email:'sohana@gmail.com', phone: '0178888888'}
]
//cors
app.use(cors());
//midleware to load given data to backend
app.use(express.json());

app.get('/users',(req,res)=>{
    console.log("query",req.query);
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }   
    else{
        res.send(users);  
    }
    // res.send(users);
})

app.post('/user',(req,res)=>{
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);

    res.send(user)
})

app.get('/fruits',(req,res)=>{
    res.send(['mango','apple','oranges']);
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find( u => u.id == id);
    res.send(user)
})

app.listen(port, ()=>{
    console.log('listening to port',port);
})