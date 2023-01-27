"use strict";

const { loginValidator, validationResult } = require("../../middleware/common.middleware");
const {login}  = require("../../controller/login.controller");
const router = require("express").Router();
router.post("/login", loginValidator,validationResult,login);

module.exports = router;
