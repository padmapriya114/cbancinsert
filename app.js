const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 8000

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.post('/countries', db.insertfi)
app.post('/countries', db.insertopportunity)
app.post('/countries', db.insertdeal)
app.post('/countries', db.insertdeal_participant)
app.post('/countries', db.inserttransfer)
app.post('/countries', db.insertdisbursement)
app.post('/countries', db.insertmessage)


app.listen(8000, () => {
  console.log(`Server is running.`);
});
