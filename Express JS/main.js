// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World how are you');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express')
const app = express()
const port = 3000

app.get('/about',(req,res)=>{
    res.send('Hello world!')
})

app.get('/blog/:slug',(req,res)=>{
    // console.log(req)
    res.send(`hello ${req.params.slug}`)
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})