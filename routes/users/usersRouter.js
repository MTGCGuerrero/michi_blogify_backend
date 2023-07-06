const express = require("express");
const { register } = require("../../controllers/usersCtrl");

const usersRouter = express.Router();

//!Register
usersRouter.post("/api/v1/users/register", register);

// * Export

module.exports = usersRouter;
