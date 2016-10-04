var posts = [
    {
        id: 0,
        user: {
            id: 2,
            username: "ben",
            profileImageSmall: "http://placehold.it/150x150"
        },
        image: "http://placehold.it/350x350",
        imageThumbnail: "http://placehold.it/350x350",
        likes: 1,
        caption: "Get Placeholder from API",
        tags: [],
        comments: [
            {
                id: 0,
                user: {
                    id: 2,
                    username: "Success"
                },
                comment: "Get successful",
                userRefs: [],
                tags: []
            }
        ]
    }
]

exports.all = function() {
            return posts;
        }
exports.add = function(newData) {
            posts.push(newData);
        }
        // posts from myself and the from the users i am following
exports.following = function () {
            return $q(function (resolve, reject) {
                resolve(posts);
            });
        }
        // most recent posts 
exports.recent = function () {
            return $q(function (resolve, reject) {
                resolve(posts);
            });
        }
        // search posts based on tags
exports.searchTag = function () {
            return $q(function (resolve, reject) {
                resolve(posts);
            });
        }
        //get all comments in a post
exports.get = function (postID) {
            for (var i = 0; i < posts.length; i++) {
                if (posts[i].id === parseInt(postID)) {
                    return posts[i];
                }
            }
        }
        // get all posts of single user
exports.getUserPosts = function (userId) {
            return $q(function (resolve, reject) {

                // execute the search and return results

                resolve(posts); // placeholder
            });
        }