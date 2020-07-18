const https = require('https')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const fs = require('fs')
const app = express()

const PORT = 4100
const MONGODB_URI = 'mongodb://localhost:27017/'

// Setting https
const httpsOptions = {
  key: fs.readFileSync('./security/cert.key'),
  cert: fs.readFileSync('./security/cert.crt')
}

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

const apiRoutes = require('./api/api')

app.use('/api', apiRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to Cao Thang Backend API')
})

const server = https.createServer(httpsOptions, app)

server.listen(PORT, function () {
  console.log('Backend API running on port: ' + PORT)
})
