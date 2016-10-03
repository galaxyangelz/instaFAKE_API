var express = require('express');
var router = express.Router();
var PostDatabase = require('../src/PostsData');

function getAllPosts(req, res){
	res.json(PostDatabase.getAllPosts());
}

router.route('/posts').get(getAllPosts);

module.exports = router;