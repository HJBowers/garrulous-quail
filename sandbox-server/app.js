const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      jsonParser = bodyParser.json(),
      urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.text({ type: 'text/plain' }))

app.get('/', function(req, res) {
  res.status(200)
  res.setHeader('Content-Type', 'text/plain')
  res.send('Welcome to Sandbox!')
})

app.get('/search', function(req, res) {
  if(req.query.q) {
    res.status(200)
    res.setHeader('Content-Type', 'text/plain')
    res.send('You searched for: ' + req.query.q)
  }else{
    res.status(400)
    res.setHeader('Content-Type', 'text/plain')
    res.send('You did not provide a search query term :(')
  }
})

app.post('/things', function(req, res) {
  console.log(req.body);
    res.status(201)
    res.setHeader('Content-Type', 'text/plain')
    res.send('New thing created: ' + req.body)
})

app.get('/somefile', function(req, res) {
  if(req.accepts('text/plain')) {
    res.status(200)
    res.send('This is a plain text file')
  }else if(req.accepts('text/html')) {
    res.status(200)
    res.setHeader('Content-Type', 'text/html')
    res.send('<!DOCTYPE html><html><body>This is an HTML file</body></html>')
  }
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
