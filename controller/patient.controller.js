const { HTTP_CODE_INTERNAL_ERROR, HTTP_CODE_CREATED, HTTP_CODE_DUPLICATE_RECORD } = require("../constants");
const { getDBConnection } = require("../database/dbConnection");
const { insertPatient } = require("../database/queries/patient.query");
const { formatErrorLog } = require("../utils/error.utils");
const { errorSender, hashPasswords } = require("../utils/helper.utils");

const addPatient = async(req,res)=>{
    
    if (!req.file)return errorSender(res, HTTP_CODE_BAD_REQUEST, "Profile photo is required");
    let photo = req.file.filename;
    let {name,mobile,email,password,address} = req.body;
    const { uid } = req.headers.authorization;
    password = await hashPasswords(password);
    const values = { name, mobile, email, photo, password, address,psychiatrist_id:uid };
    try {
        const dbConnection = global.dbConnection;
        await insertPatient(dbConnection,values);
        return res.status(HTTP_CODE_CREATED).json({ message: "patient added" });
    } catch (error) {
        if (error.code === "ER_DUP_ENTRY"){
            return errorSender(res, HTTP_CODE_DUPLICATE_RECORD, "patient with mobile or email already exists");
        }
        global.logger.error(formatErrorLog(error));
        errorSender(res, HTTP_CODE_INTERNAL_ERROR, "cannot add new patient");
    }
}

module.exports = {addPatient};