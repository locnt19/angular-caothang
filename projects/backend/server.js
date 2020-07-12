const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const MONGODB_URI = 'mongodb://localhost:27017/'

// Connect with MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})

mongoose.connection.on('error', (err) => {
  console.log('Mongoose conection error:' + err)
})

mongoose.connection.once('open', () => {
  console.log('MongoDB connected!')
})

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.listen(4100, function () {
  console.log('Backend API running!')
})

const apiRoutes = require('./api/api')
app.use('/api', apiRoutes)
