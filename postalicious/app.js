const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.status(200)
  res.setHeader('Content-Type', 'text/plain')
  res.render('index')
})

app.post('/dorequest', function(req, res) {
  console.log('WTF???', req.body)
  const requestDetails = req.body
  request({
    method: requestDetails.method,
    uri: requestDetails.host,
  }, function(error, response){
    console.log('????', error)
    if (error){
      res.json({
        requestFailed: true,
        error: error,
      })
    }else{
      res.json(response)
    }
  })
})

app.listen(3001, function() {
  console.log('Example app listening on port 3001!')
})
