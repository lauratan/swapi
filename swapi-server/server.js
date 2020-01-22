const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path');
const app = express();

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.listen(8080, () => {
  console.log(`Star Wars App Server listening on port 8080!`);
});