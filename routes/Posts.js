var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var express = require('express');
var router = express.Router();
var multer = require('multer');

var PostDatabase = require('../src/PostDatabase');

// Config cloudinary storage for multer-storage-cloudinary
var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'instaFAKE', // give cloudinary folder where you want to store images
  allowedFormats: ['jpg', 'png'],
});
var parser = multer({ storage: storage });

function getAllPosts(req, res){
	res.json(PostDatabase.all());
}

router.post('/upload', parser.single('image'), function (req, res) {       
    console.log(req.file);
    res.sendStatus(201);
});

router.route('/posts').get(getAllPosts);

module.exports = router;