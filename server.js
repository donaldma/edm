const ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 3001
const express = require('express')
const path = require('path')
const app = express()
const http = require('http')
const server = http.createServer(app)
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios')
const knexConfig = require('./knexfile')
const knex = require('knex')(knexConfig[ENV])
const dbHelper = require('./db/dbHelper')(knex)
const knexLogger = require('knex-logger')
const apiRoutes = require('./routes/api')
const cron = require('node-cron')
const Helpers = require('./utils/Helpers')

/**
 * START CRON JOBS
 *
 */
cron.schedule('*/15 * * * *', () => {
  console.log('Ping App')
  axios.get('')
})
/**
 * END CRON JOBS
 */

app.use(cors())
app.use(knexLogger(knex))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', apiRoutes(dbHelper))

app.use(function (err, req, res, next) {
  console.error(err)
  Helpers.handleServerError(res, err)
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

server.listen(PORT, () => {
  console.log('Server running on', PORT)
})