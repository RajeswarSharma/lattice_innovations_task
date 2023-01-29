const { HTTP_CODE_INTERNAL_ERROR, HTTP_CODE_CREATED, HTTP_CODE_DUPLICATE_RECORD, HTTP_CODE_BAD_REQUEST } = require("../constants");
const { getDBConnection } = require("../database/dbConnection");
const { insertPsychiatrist } = require("../database/queries/psychiatrist.queries");
const { formatErrorLog } = require("../utils/error.utils");
const { errorSender, hashPasswords } = require("../utils/helper.utils");

const addPsychiatrist = async (req,res)=>{
    if(!req.file) return errorSender(res,HTTP_CODE_BAD_REQUEST,"Profile photo is required")
    let photo = req.file.filename;
    let {name,mobile,email,password,address} = req.body;
    const { uid } = req.headers.authorization;
    password = await hashPasswords(password);
    const values = { name, mobile, email, photo, password, address,hospital_id:uid };
    try {
        const dbConnection = global.dbConnection;
        await insertPsychiatrist(dbConnection,values);
        return res.status(HTTP_CODE_CREATED).json({ message: "Psychiatrist added" });
    } catch (error) {
        if (error.code === "ER_DUP_ENTRY"){
            return errorSender(res, HTTP_CODE_DUPLICATE_RECORD, "psychiatrist with mobile or email already exists");
        }
        global.logger.error(formatErrorLog(error));
        errorSender(res, HTTP_CODE_INTERNAL_ERROR, "cannot add new psychiatrist");
    }
}

module.exports = {addPsychiatrist};