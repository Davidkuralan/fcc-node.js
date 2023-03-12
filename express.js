const express = require('express');
const app = express();
const path = require('path');

//setup static and middleware
app.use(express.static('./public'));

// app.get
// app.get('/',(req,res) =>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
// })
// app.post
// app.put
// app.delete
// app.all
app.all('*',(req,res) =>{
    res.status(404).send('<h1> PAGE NOT FOUND </h1>')
})
// app.use
//app.listen
app.listen(4000,() =>{
    console.log('serve is listening on port 4000');
})