const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

app.use([logger,authorize]);

app.get('/',(req,res) =>{
    res.send('HOME')
})


app.get('/about',(req,res) =>{
    res.send('About')
})

app.get('/api/products',(req,res) =>{
    res.send('PRODUCTS')
})

app.get('/api/items',(req,res) =>{
    console.log(req.user);
    res.send('ITEMS')
})


app.listen(4000,() =>{
    console.log('serve is listening on port 4000......');
})