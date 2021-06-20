"use strict";
const http = require('http');
 const express = require('express'); 
const hostname = '127.0.0.1';
const port = 3000;

const app = express();
app.get('/error', (req, res) => {
    res.status(500);
    res.send(`test`);
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
