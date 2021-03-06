// Require external modules
var express = require('express');
var app = express();

// Serve static files
app.use(express.static('css'));
app.use(express.static('images'));
app.use(express.static('scripts'));
app.use(express.static('views'));

// Route definitions
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/landingPage.html');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/calculatorPage.html');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/summaryPage.html');
});

// Listen for request on port 8000
app.listen(8000, function () {
  console.log("The prototype is running, go to http://localhost:8000/ in your browser.")

});