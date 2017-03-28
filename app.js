const express = require('express'),
      // bodyParser = require('body-parser'),
      app = express()

// app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.status(200)
  res.setHeader('Content-Type', 'text/plain')
  res.send('Welcome to Sandbox!')
})

app.get('/search', function(req, res) {
  res.status(200)
  res.setHeader('Content-Type', 'text/plain')
  res.send('You searched for:' + req.query.q)
})

app.get('/search', function(req,res) {
  res.status(400)
  res.setHeader('Content-Type', 'text/plain')
  res.send('You did not provide a search query term :(')
})

// Test in Postman
app.post('/things', function(req, res) {
  res.status(201)
  res.setHeader('Content-Type', 'text/plain')
  // res.send('New thing created:' +  req.body)
})

app.get('/somefile', function(req, res) {
  res.status(200)
  res.set({
    'Content-Type': 'text/plain',
    'Accept': 'text/plain'
  })
  res.send('This is a plain text file')
})

app.get('/somefile', function(req, res) {
  res.status(200)
  res.set({
    'Content-Type': 'text/html',
    'Accept': 'text/html'
  })
  res.send('<!DOCTYPE html><html><body>This is an HTML file</body></html>')
})

app.get('/myjsondata', function(req, res) {
  res.status(200)
  res.set({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
  res.json({"title": "some JSON data"})
})

app.get('/old-page', function(req, res) {
  res.status(301)
  res.setHeader('Location', 'http://localhost:3000/newpage')
  res.send()
})

// Test in Postman
app.post('/admin-only', function(req, res) {
  res.status(403)
  res.send()
})

app.get('/not-a-page', function(req, res) {
  res.status(404)
  res.send()
})

app.get('/server-error', function(req, res) {
  res.status(500)
  res.send()
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
