//EXPRESS
const express = require('express');
const path = require('path');
//const middleware = require('./middleware/custommiddleware.js'); // not sure if I'll use this
const api = require('./routes/notes.js');
const db = require('./db/db.json');

const PORT = process.env.port || 3001;

const app = express();

// Import custom middleware
//app.use(middleware);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
//middleware
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//ERRORS
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


// starts the server
app.listen(PORT, () => {
    console.log(`App listening at http://localhost${PORT}`);
});
