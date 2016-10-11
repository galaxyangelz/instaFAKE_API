var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var express = require('express');
var router = express.Router();
var multer = require('multer');
var request = require('request');

var PostDatabase = require('../src/PostDatabase');

// Config cloudinary storage for multer-storage-cloudinary
var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'instaFAKE', // give cloudinary folder where you want to store images
  allowedFormats: ['jpg', 'png'],
});
var parser = multer({ storage: storage });

function getPostCloudinary(req, res) {
	var allPost = PostDatabase.all();
	var url = "https://456517264879296:5PO8mpX_F5_KGfrHhVR_uTDfkMI@api.cloudinary.com/v1_1/galaxyangelzz/resources/image";
	request(url, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
			var imageResponse = JSON.parse(body);
			for (var i = 0; i < imageResponse.resources.length; i++) {
				allPost[i] = {image : imageResponse.resources[i].url};
			}
		    res.sendStatus(200);
     	}
	})

	/*https.get(url, function(res) {
		var body = '';
		res.on('data', function(chunk) {
			body += chunk;
		});
		res.on('end', function() {
			var imageResponse = JSON.parse(body);
			for (var i = 0; i < imageResponse.resources.length; i++) {
				PostDatabase.add({image : imageResponse.resources[i].url});
			}
		});
	}).end();*/
}

function getAllPosts(req, res){
	res.json(PostDatabase.all());
}
router.post('/add', function (req,res) {
	PostDatabase.add(res.body);
	res.sendStatus(201);
});
router.route('/download').get(getPostCloudinary);
router.post('/upload', parser.single('image'), function (req, res) {       
    res.sendStatus(201);
});
router.route('/posts').get(getAllPosts);

module.exports = router;
//
