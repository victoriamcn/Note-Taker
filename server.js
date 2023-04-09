//EXPRESS
const express = require('express');
const path = require('path');
const middleware = require('./middleware/custommiddleware.js');
const api = require('./routes/routes.js'); // not sure if I'll use this
const db = require('./db/db.json');

const PORT = process.env.port || 3001;

const app = express();

// Import custom middleware
app.use(middleware);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
//middleware
app.use(express.static('public'));

// routes to route files
// require('./routes/apiRoutes')(app);
// require('./routes/htmlRoutes')(app);

// Create Express.js routes for default '/', '/send' and '/routes' endpoints
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);

app.get('/routes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/routes.html'))
);

app.post('/db', (req, res) => res.json(db));

// GET route that returns any specific term
app.get('/db/:db', (req, res) => {
  // Coerce the specific search term to lowercase
  const requestedDB = req.params.db;

  // Iterate through the terms name to check if it matches `req.params.term`
  for (let i = 0; i < requestedDB.length; i++) {
    if (requestedTerm === requestedDB[i].db) {
      return res.json(requestedDB[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No match found');
});

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
    console.log(`Server available at localhost${PORT}`);
});
