
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')
const setupApp = require('./setup')

// Start listening - use 3000 if available or next available port
const PORT = process.env.PORT || 3001

// server variable
const app = express();

// express middleware: capable to handle complex json
app.use(bodyParser.urlencoded({ extended: true }))
// express middleware: capable to handle simple json
app.use(bodyParser.json())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// PASSPORT: passport, cookie-parser, express-session
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
// STEP 2:  passport
app.use(cookieParser());
app.use(session({ secret: 'library' }))
// STEP 3:  passport
require('./controllers/config/passport')(app)

// Routes
app.use(routes);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/vetclinic'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

//for heroku to host the react app from express server
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Start listening
app.listen(PORT, function () {
  console.log(`Listening at http://localhost:${PORT}`)
});

// Initialize database
setupApp.Initialize()
