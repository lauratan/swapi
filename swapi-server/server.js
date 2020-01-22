const axios = require('axios');
const express = require('express');
const app = express();

const PORT = 8080;

app.get('/ping', function(req, res) {
  return res.send('pong');
});

// Call the https://swapi.co/api/films API to get all films
app.get('/films', (req, res) => {
  axios
    .get('https://swapi.co/api/films')
    .then(({ data: { results } }) => {
      res.json(results);
    })
    .catch(err => {
      res
        .status(500)
        .json({ status: 500, message: 'Error calling Star Wars API' });
    });
});

// Call the https://swapi.co/api/films/:id API to get film details
app.get('/film/:id', (req, res) => {
  axios
    .get(`https://swapi.co/api/films/${req.params.id}`)
    .then(({ data }) => {
      res.json(data);
    })
    .catch(({ response: { status, statusText } }) => {
      res.status(status).json({
        status,
        message: statusText
      });
    });
});

app.listen(PORT, () => {
  console.log(`Star Wars App Server listening on port ${PORT}!`);
});
