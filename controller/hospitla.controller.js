const { HTTP_CODE_INTERNAL_ERROR, HTTP_CODE_NOT_FOUND } = require("../constants");
const { getDBConnection } = require("../database/dbConnection");
const { listingByHospitalByID } = require("../database/queries/common.queries");
const { formatErrorLog } = require("../utils/error.utils");
const { errorSender } = require("../utils/helper.utils");

const getHospitaldataById = async(req,res)=>{
    try {
        const {hospital_id} = req.params;
        const dbConnection = global.dbConnection;
        const data = await listingByHospitalByID(dbConnection,{hospital_id});
        if(data) return res.json(data);
        return errorSender(res,HTTP_CODE_NOT_FOUND,"Not found");
    } catch (error) {
        global.logger.error(formatErrorLog(error));
        return errorSender(res,HTTP_CODE_INTERNAL_ERROR,"Internal server error");
    }
}

module.exports = {getHospitaldataById};