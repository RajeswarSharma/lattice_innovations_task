"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
const CORS_CONFIG = require("../config/cors.config");
const authRoute = require("./libs/auth.route");
const psychiatristRoute = require("./libs/psychiatrist.route");
const patientRoute = require("./libs/patient.route");
const { resolveToken } = require("../middleware/common.middleware");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text({ limit: "200mb" }));
app.use(cors(CORS_CONFIG));
app.use(express.static("docs"));
// APIs
app.use("/auth",authRoute);
app.use("/psychiatrist",resolveToken,psychiatristRoute);
app.use("/patient",resolveToken,patientRoute);
//~APIs`

module.exports = app
