// server/index.js
const path = require('path');
const express = require("express");
const cors = require('cors');
const dbPhones = require("../db.json") 

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

// Allows CORS for all resources on your server.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/phones", (req, res) => {
    res.json(dbPhones);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});