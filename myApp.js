let express = require('express');
let app = express();
require('dotenv').config();

app.use('/public', express.static(__dirname + '/public'));

let absolutePath = __dirname + '/views/index.html';

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get('/', function(req, res) {
  res.sendFile(absolutePath);
})

app.get('/json', function(req, res) {
  res.json({"message": " json"});
})

module.exports = app;