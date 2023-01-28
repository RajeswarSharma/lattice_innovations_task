"use strict";
const { body } = require("express-validator");
const { validationResult } = require("express-validator");
const uploader = require("../config/multer.config");
const { HTTP_CODE_BAD_REQUEST, RELATION_HOSPITAL, RELATION_PATIENT, RELATION_PSYCHIATRIST, HTTP_CODE_UNAUTHORIZED, HTTP_CODE_INTERNAL_ERROR, HTTP_CODE_FORBIDDEN, CONST_REGEX_PHONE, CONST_REGEX_PASSWORD } = require("../constants");
const { formatErrorLog } = require("../utils/error.utils");
const { errorSender, verifyToken } = require("../utils/helper.utils");
exports.loginValidator = [
    body("email").not().isEmpty().withMessage("require email").isEmail().withMessage("require a valid email"),
    body("password").not().isEmpty().withMessage("require password"),
    body("user_type").custom((val)=>{return [RELATION_HOSPITAL,RELATION_PATIENT,RELATION_PSYCHIATRIST].includes(val);}).withMessage("require valid user type")
]
exports.regPsyValidator = [
  body("name").trim().not().isEmpty().withMessage("require psychiatrist name"),
  body("email").isEmail().withMessage("require valid email"),
  body("mobile").custom((val) => {
    if (val) {
      let re = new RegExp(CONST_REGEX_PHONE);
      return re.test(val);
    }
    return true;
  }).withMessage("invalid mobile number"),
  body("address")
    .trim()
    .not()
    .isEmpty()
    .withMessage("psychiatrist address")
    .isLength({ min: 10 })
    .withMessage("psychiatrist address have min length of 10"),
  body("password")
    .trim()
    .isLength({ min: 8, max: 15 })
    .withMessage("password length should be 8 to 15")
    .custom((val)=>{return new RegExp(CONST_REGEX_PASSWORD).test(val)})
    .withMessage(
      "must contain one upper character, one lower character and a number. Max length 15 and min length 8",
    ),
];
exports.regPatientValidator = [
  body("name").trim().not().isEmpty().withMessage("require patient name"),
  body("email").isEmail().withMessage("require valid email"),
  body("mobile").custom((val) => {
    if (val) {
      let re = new RegExp(CONST_REGEX_PHONE);
      return re.test(val);
    }
    return true;
  }).withMessage("invalid mobile number"),
  body("address")
    .trim()
    .not()
    .isEmpty()
    .withMessage("patient address")
    .isLength({ min: 10 })
    .withMessage("patient address have min length of 10"),
  body("password")
    .trim()
    .isLength({ min: 8, max: 15 })
    .withMessage("password length should be 8 to 15")
    .custom((val)=>{return new RegExp(CONST_REGEX_PASSWORD).test(val)})
    .withMessage(
      "must contain one upper character, one lower character and a number. Max length 15 and min length 8",
    ),
];
exports.validationResult = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(HTTP_CODE_BAD_REQUEST).json({
      error: validationErrors.array()[0],
    });
  }
  return next();
};

exports.resolveToken = async( req,res,next)=>{
  try {
	const {authorization} = req.headers;
	  if(!authorization) return errorSender(res, HTTP_CODE_UNAUTHORIZED, "require Bearer token");
	  const token = authorization.split(" ")[1];
	  const resolveToken = await verifyToken(token);
	  req.headers.authorization = resolveToken;
	  return next();
  } catch (error) {
    global.logger.error(formatErrorLog(error));
    return errorSender(res,HTTP_CODE_INTERNAL_ERROR,"internal server error");
  }
}

exports.checkUserType = (user_type)=>{
  return (req,res,next)=>{
    const {authorization} = req.headers;
    if(authorization.user_type === user_type)
      return  next();
    return errorSender(res, HTTP_CODE_FORBIDDEN, `require access-level:${user_type}`);
  }
}

exports.uploadFile=(req, res, next)=>{
  const upload = uploader.single("photo");
  upload(req, res, function (error) {
    if (error) {
      console.log(error);
      return errorSender(res,HTTP_CODE_BAD_REQUEST,"invalid file type or file size");
      // An unknown error occurred when uploading.
    }
    next();
  });
}