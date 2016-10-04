var posts = [
    {
        id: 0,
        user: {
            id: 1,
            username: "dtrump",
            profileImageSmall: "http://core0.staticworld.net/images/article/2015/11/111915blog-donald-trump-100629006-primary.idge.jpg"
        },
        image: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
        imageThumbnail: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
        likes: 892,
        caption: "Always winning #elections",
        tags: ['elections'],
        comments: [
            {
                id: 0,
                user: {
                    id: 2,
                    username: "POTUS"
                },
                comment: "You're never going to make it don #losing",
                userRefs: [],
                tags: ["losing"]
            },
            {
                id: 1,
                user: {
                    id: 3,
                    username: "HillaryC"
                },
                comment: "Damn right @POTUS",
                userRefs: ["POTUS"],
                tags: []
            },
        ]

    },
    {
        id: 1,
        user: {
            id: 1,
            username: "dtrump",
            profileImageSmall: "http://core0.staticworld.net/images/article/2015/11/111915blog-donald-trump-100629006-primary.idge.jpg"
        },
        image: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
        imageThumbnail: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
        likes: 1,
        caption: "Always lost #elections",
        tags: ['elections'],
        comments: [
            {
                id: 0,
                user: {
                    id: 3,
                    username: "HillaryC"
                },
                comment: "Right",
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