var fs = require('fs');
var path = require('path');
var express = require('express');
var multer = require('multer');
var format = require('util').format;
var bodyParser = require('body-parser');

var app = express();
var upload = multer({ dest: '/tmp' })

var COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/upload', upload.single('image'), function(req, res) {
  res.send(req.file)
})

app.get('/image/:filename', function(req, res) {
  res.sendFile('/tmp/' + req.params.filename, {
    headers: {
      'content-type': 'image'
    }
  })
})

// app.post('/upload', function(req, res) {
//   console.log(req.body)
//   res.send(req.body)
// })

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
