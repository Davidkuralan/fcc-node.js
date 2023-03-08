// setInterval(() =>{
//     console.log('Hello Thiru!!!');
// },1000);

// const data = require('./items');
// console.log(data);

const http = require('http');

const server = http.createServer((req,res) =>{
if(req.url === '/'){
    res.end('Welcome to the UTOPIA thiru!!!');
}
if(req.url === '/about'){
    res.end('what you want to know about me???');
}
res.end(`
<h1>Oops!!!</h1>
<p>page that you looking for is not found???</p>
<a href = "/">back to the future!!!</a>
`)
});

server.listen(4000);