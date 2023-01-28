const { RELATION_HOSPITAL } = require("../../constants");
const { addPsychiatrist } = require("../../controller/psychiatrist.controller");
const { checkUserType, regPsyValidator, validationResult, uploadFile } = require("../../middleware/common.middleware");

const router = require("express").Router();

router.post("/add",checkUserType(RELATION_HOSPITAL),uploadFile,regPsyValidator,validationResult,addPsychiatrist);

module.exports = router;