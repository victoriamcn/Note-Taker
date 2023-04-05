const express = require('express');
const path = require('path');
const middleware = require('./middleware/custommiddleware.js');
// const api = require('./routes/index.js'); // not sure if I'll use this

const PORT = process.env.port || 3001;

const app = express();

// Import custom middleware
app.use(middleware);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));