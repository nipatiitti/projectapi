import database from './database/connection'

import { logErrors, errorHandler } from './error'
import handleGet from './get'
import handlePost from './post'

import express from 'express'
import path from 'path'
import morgan from 'morgan'
import bodyParser from 'body-parser'


const app = express()
const PORT = process.env.PORT || 5000

//Make sure database is up and running
database.on('error', console.error.bind(console, 'connection error:'))
database.once('open', () => {
  console.log('We are live in action!')
});

// setup the logger
app.use(morgan('tiny'))

// Priority serve static files.
app.use(express.static(path.join(__dirname, '../front-end/build')))

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Handling errors
app.use(logErrors)
app.use(errorHandler)

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// Handle API requests
app.route('/api')
  // GET, Return data asked if possible
  .get((req, res) => handleGet(req, res))

  // POST, Add data (if valid) to database
  .post((req, res) => handlePost(req, res))


// For everything else return React so react can do extra routing
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../front-end/build', 'index.html'))
})

app.listen(PORT, () => {
  console.log("-----------starting-----------")
  console.log(`Listening on port ${PORT}`)
});
