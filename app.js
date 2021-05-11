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

app.post('/fi', db.insertfi)
app.post('/opportunity', db.insertopportunity)
app.post('/deal', db.insertdeal)
app.post('/deal_participant', db.insertdeal_participant)
app.post('/transfer', db.inserttransfer)
app.post('/disbursement', db.insertdisbursement)
app.post('/message', db.insertmessage)


app.listen(8000, () => {
  console.log(`Server is running.`);
});
