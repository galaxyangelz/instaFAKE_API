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
exports.edit = function (userID, newinfo) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === parseInt(userID)) {
            users.splice(i,1);
            users.push(newinfo);
        }
    }
}
