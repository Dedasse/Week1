'use strict';
const express = require('express');
const app = express();
const port = 8080;
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/catinfo', (req, res) => {
  const cat = {
    'name': 'Frank',
    'age': 6,
    'weight': 5,
  };
  res.json(cat);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));