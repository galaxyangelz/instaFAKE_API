var express = require('express');
var router = express.Router();
var PostDatabase = require('../src/PostsData');

function getPosts(req, res){
	res.json(PostDatabase.getPosts());
}

router.route('/posts').get(getPosts);

module.exports = router;