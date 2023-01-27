const { HTTP_CODE_INTERNAL_ERROR, HTTP_CODE_CREATED, HTTP_CODE_DUPLICATE_RECORD } = require("../constants");
const { getDBConnection } = require("../database/dbConnection");
const { insertPsychiatrist } = require("../database/queries/psychiatrist.queries");
const { formatErrorLog } = require("../utils/error.utils");
const { errorSender, hashPasswords } = require("../utils/helper.utils");

const addPsychiatrist = async (req,res)=>{
    let {name,mobile,email,photo,password,address} = req.body;
    const { uid } = req.headers.authorization;
    password = await hashPasswords(password);
    const values = { name, mobile, email, photo, password, address,hospital_id:uid };
    try {
        const [dbConnection,error] = await getDBConnection();
        if(error) {
            global.logger.error(formatErrorLog(error));
            return errorSender(res,HTTP_CODE_INTERNAL_ERROR,"Connection failed");
        }
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