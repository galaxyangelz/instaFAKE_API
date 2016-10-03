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

exports.getAllPosts = function() {
    return posts;
}
exports.getPostById = function (postID) {
    for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === parseInt(postID)) {
            return posts[i];
        }
    }
}