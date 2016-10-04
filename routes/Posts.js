var express = require('express');
var router = express.Router();
var PostDatabase = require('../src/PostDatabase');

function getAllPosts(req, res){
	res.json(PostDatabase.all());
}

router.route('/posts').get(getAllPosts);

module.exports = router;