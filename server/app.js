const express = require('express')
const app = express()
const cors = require('cors')
const moment = require('moment')

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/calculateAge/:year', function (req, res) {
  var year = req.params.year
  var now = moment().year();
  var ageDifMs = now - year;
  res.json({ age: ageDifMs })
})
 
app.listen(3000)