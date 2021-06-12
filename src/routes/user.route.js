const express = require('express');
const router = express.Router();

const usercontroller = require("../controller/user.controller");

router.route("/user")
    .post(usercontroller.registerUser);

module.exports = router;