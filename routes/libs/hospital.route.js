const { getHospitaldataById } = require("../../controller/hospitla.controller");

const router = require("express").Router();
router.get("/details/:hospital_id",getHospitaldataById);
module.exports = router;