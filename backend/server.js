"use strict";

const express = require("express");
const morgan = require("morgan");
const {
  deleteUser,
  getUsers,
  getUserById,
  handleFriends,
  updateUser,
  authenticateSignin,
} = require("./handlers");

const app = express();
// Below are methods that are included in express(). We chain them for convenience.
// --------------------------------------------------------------------------------
// This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
app.use(morgan("tiny"));
app.use(express.json());

app.get("/api/users", getUsers);
app.put("/api/users", updateUser);
app.get("/api/users/:id", getUserById);
app.delete("/api/users/:id", deleteUser);
app.patch("/api/friends", handleFriends);
app.post("/api/signin", authenticateSignin)

// this is our catch all endpoint.
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

// Node spins up our server and sets it to listen on port 8000.
app.listen(8000, () => console.log(`Listening on port 8000`));
