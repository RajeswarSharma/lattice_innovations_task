"use strict";
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const { CONST_JWT_EXP_HOURS, CONST_JWT_ISSUERS, CONST_JWT_ALGORITHM, CONST_BCRYPT_SALT_ROUND } = require("../constants");



exports.hashPasswords = async (password) => {
    let salt = await bcrypt.genSalt(CONST_BCRYPT_SALT_ROUND);
    password = await bcrypt.hash(password, salt);
    return password;
  };

exports.validatePassword = async (password, hashedPassword) => {
  let isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;
};

exports.getLoginToken = async (payload) => {
    let privateKey = fs.readFileSync(
      path.join(__dirname, "../keys/private.key"),
      "utf8",
    );
    let signOption = {
      issuer: CONST_JWT_ISSUERS,
      algorithm: CONST_JWT_ALGORITHM,
      expiresIn: CONST_JWT_EXP_HOURS,
    };
    let token = await jwt.sign(payload, privateKey, signOption);
    return token;
  };

 exports.verifyToken = async (token) => {
    let publicKey = fs.readFileSync(
      path.join(__dirname, "../keys/public.key"),
      "utf8",
    );
    let verificationOption = {
      issuer: CONST_JWT_ISSUERS,
      algorithm: [CONST_JWT_ALGORITHM],
      expiresIn: CONST_JWT_EXP_HOURS,
    };

    let isValid = await jwt.verify(token, publicKey, verificationOption);
    return isValid;
  };

exports.errorSender = (res,httStatusCode,message)=>{
  return res.status(httStatusCode).json({message});
}