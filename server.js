
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");

// Require all models
var db = require("./models");

// express middleware: static files
app.use(express.static(path.join(__dirname, 'public')));
// express middleware: capable to handle complex json
app.use(bodyParser.urlencoded({extended: true }))
// express middleware: capable to handle simple json
app.use(bodyParser.json())

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nasanewsmern";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Api and Html routes
require('./routes')(app,db)

//server variable
const app = express()

// Start listening - use 3000 if available or next available port
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
console.log(`Listening at http://localhost:${PORT}`)
})