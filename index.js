var express = require('express');
var cors = require('cors');
var posts = require('./routes/Posts.js');
var app = express();

app.set('port', (process.env.PORT || 80));
app.use(cors()); 
app.use('/', posts);

app.get('/', function(req, res) {
	res.send("Hello world");
});

app.listen(app.get('port'), function() {

console.log('Node app is running on port', app.get('port'));

});