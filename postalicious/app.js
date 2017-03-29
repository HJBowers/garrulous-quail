const express = require('express'),
      app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.status(200)
  res.setHeader('Content-Type', 'text/plain')
  res.render('index')
})

app.listen(3001, function() {
  console.log('Example app listening on port 3001!')
})
