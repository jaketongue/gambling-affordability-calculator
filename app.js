var express = require('express');
var app = express();

app.use(express.static('css'));
app.use(express.static('images'));
app.use(express.static('scripts'));

app.get('/', function(req, res) {
  res.sendFile('/Users/jto01/Desktop/codebases/gambling-affordability-calculator/views/' + 'landingPage.html');
});

app.get('/calculatorPage.html', function(req,res) {
  res.sendFile('/Users/jto01/Desktop/codebases/gambling-affordability-calculator/views/' + 'calculatorPage.html');
});

app.get('/summaryPage.html', function(req,res) {
  res.sendFile('/Users/jto01/Desktop/codebases/gambling-affordability-calculator/views/' + 'summaryPage.html');
});

app.listen(process.env.PORT || 8000, function () {
});