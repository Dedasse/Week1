'use strict'

const express=require('express');
const app=express

app.get('/', (req, res) => {
  console.log('get request to /', req);
  res.send('Hello there!  ');
});

app.listen(8080);
