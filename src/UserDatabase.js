var users = [{
        id: "txgw35",
        username: "test",
        password: "pwd"
    },
    {
        id: "xvj2f2",
        username: "john",
        password: "doe"
    }
];
exports.all = function() {
    return users;
}
exports.add = function(user) {
    users.push(user);
}
exports.get = function (userID) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === parseInt(userID)) {
            return users[i];
        }
    }
}
