const express = require('express');
const app = express();
const { products } = require('./data');


app.get('/',(req,res) =>{
    res.send('<h1>HOME PAGE</h1><a href = "/api/products">PRODUCTS</a>');
})


app.get('/api/products',(req,res) =>{
    const newProducts = products.map((product) =>{
        const { id, name, image } = product;
        return { id, name, image }
    }) 
    res.json(newProducts);
})


app.get('/api/products/:productID',(req,res) =>{
    const { productID } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID));

    if(!singleProduct){
        return res.status(404).send('PRODUCT DOES NOT EXIST');
   }

    res.json(singleProduct);
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res) =>{
res.send('Best product to buy');
})


app.get('/api/v1/query',(req,res) =>{
    // console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((product) =>{
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts < 1){
        // res.status(200).send('NO PRODUCTS MATCHED YOUR SEARCH');
        return res.status(200).json({success : true,data :['NO PRODUCTS MATCHED YOUR SEARCH']})
    }
    res.status(200).json(sortedProducts);
    })



app.listen(4000,() =>{
    console.log('serve is listening on port 4000');
})