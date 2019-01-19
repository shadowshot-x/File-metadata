// server.js
// where your node app starts

// init project
var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/fileinfo', upload.single('avatar'), function (req, res) {
  var outPutJson = { filesize: req.file.size };
  res.json(outPutJson);
});


// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
