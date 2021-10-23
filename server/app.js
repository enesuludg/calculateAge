const express = require('express')
const app = express()
const cors = require('cors')
const moment = require('moment')

app.use(cors())

app.get('/calculateAge/:year', function (req, res) {
  try {
    var year = req.params.year
    var now = moment().year();
    var ageDifMs = now - year;
    res.json({ age: ageDifMs })
  } catch (error) {
    res.json({ success: false })
  }

})
 
app.listen(3000)