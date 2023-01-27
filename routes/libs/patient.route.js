const { RELATION_PSYCHIATRIST } = require("../../constants");
const { addPatient } = require("../../controller/patient.controller");
const { checkUserType, validationResult, regPatientValidator } = require("../../middleware/common.middleware");

const router = require("express").Router();

router.post("/add",checkUserType(RELATION_PSYCHIATRIST),regPatientValidator,validationResult,addPatient);

module.exports = router;