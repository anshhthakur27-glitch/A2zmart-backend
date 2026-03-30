const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('A2ZMart backend running 🚀');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

module.exports = app;
