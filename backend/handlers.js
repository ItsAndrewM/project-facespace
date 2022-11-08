const { findUser, findUserIndex, sendResponse } = require("./utils");

const users = require("./data/users.json");

const authenticateSignin = (req, res) => {
    const {data} = req.body;
    const loggedInUser = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].name.toLowerCase().includes(data.name.toLowerCase())) {
            loggedInUser.push(users[i]);
        }
    }
    if (loggedInUser.length !== 0) {
        console.log(loggedInUser);
        return sendResponse(res, 200, loggedInUser);
    }
    else {
        return sendResponse(res, 404, null, "user not found");
    }
}

// GET all users
const getUsers = (req, res) => {
    const activeUsers = users.filter((user) => !user.deleted);
    sendResponse(res, 200, activeUsers);
};

// GET user based on :id
const getUserById = (req, res) => {
    const userId = req.params.id;
    const user = findUser(users, userId);

    user
        ? sendResponse(res, 200, user)
        : sendResponse(res, 404, null, "user not found");
};

// PUT needs the user :id and the complete user object.
const updateUser = (req, res) => {
    const updatedUser = req.body;
    const { id, name, friends, avatarUrl } = updatedUser;

    const user = findUser(users, updatedUser.id);

    // if user is not found, stop and return 404
    if (!user) return sendResponse(res, 404, updatedUser, "user not found");

    // if provided user object doesn't include all name, or avatarUrl, or friends
    // PUT must include the complete user object
    if ((!id, !name || !avatarUrl || !friends))
        return sendResponse(
            res,
            400,
            updatedUser,
            "Bad Request: missing keys/values in user object"
        );

    const index = findUserIndex(users, id);
    users[index] = { id, name, friends, avatarUrl };
    sendResponse(res, 200, users[index], "user updated.");
};

// We don't believe in actually deleting data... we so bad...
// instead we add a 'deleted' flag to the object. hehehe and we sneaky...
const deleteUser = (req, res) => {
    const userId = req.params.id;
    const index = findUserIndex(users, userId);
    if (!index) return sendResponse(res, 404, null, "User not found.");

    users[index].deleted = true;
    sendResponse(res, 200, null, "user deleted.");
};

// PATCH. requires the ids of 2 people to make them friends
// ids should be sent along as an array called newFriends in the body
const handleFriends = (req, res) => {
    const [userId_1, userId_2] = req.body.newFriends;
    const user_1 = findUser(users, userId_1);
    const user_2 = findUser(users, userId_2);

    // if either of the userIds don't exist, stop and return error
    if (!user_1 || !user_2)
        return sendResponse(
            res,
            404,
            req.body,
            "One or both of the users not found."
        );

    const userIdx_1 = findUserIndex(users, userId_1);
    const userIdx_2 = findUserIndex(users, userId_2);

    // if users are already friends, make them NOT friends
    if (user_1.friends.includes(userId_2) || user_2.friends.includes(userId_1)) {
        users[userIdx_1].friends.splice(
            user_1.friends.indexOf(userId_2),
            1
        );
        users[userIdx_2].friends.splice(
            user_2.friends.indexOf(userId_1),
            1
        );

        return sendResponse(
            res,
            200,
            [user_1.friends, user_2.friends],
            "Users are no longer friends."
        );
    }

    users[userIdx_1].friends.push(userId_2);
    users[userIdx_2].friends.push(userId_1);

    sendResponse(
        res,
        200,
        [user_1.friends, user_2.friends],
        "users are now friends"
    );
};

module.exports = {
    deleteUser,
    getUsers,
    getUserById,
    handleFriends,
    updateUser,
    authenticateSignin,
};
