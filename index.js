var express 	= require('express');
var app 		= express();
var cors 		= require('cors');
var bodyParser  = require('body-parser');

var posts 		= require('./routes/Posts.js');
var users		= require('./routes/Users.js')

app.set('port', (process.env.PORT || 80));
app.use(cors()); 
app.use('/', posts);
app.use('/', users);


app.get('/', function(req, res) {
	res.send("Hello world");
});

app.listen(app.get('port'), function() {

console.log('Node app is running on port', app.get('port'));

});