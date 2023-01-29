const { HTTP_CODE_INTERNAL_ERROR, HTTP_CODE_UNAUTHORIZED } = require("../constants");
const { getDBConnection } = require("../database/dbConnection");
const { getUser } = require("../database/queries/common.queries");
const { formatErrorLog } = require("../utils/error.utils");
const { validatePassword, errorSender, getLoginToken } = require("../utils/helper.utils");

const login = async (req, res) => {
  try {
     const dbConnection = global.dbConnection;
    const {email,password,user_type} = req.body;
    const data = await getUser(dbConnection,{email,password,user_type})
    if(!data) return errorSender(res,HTTP_CODE_UNAUTHORIZED,"incorrect email or password");
    const hashedPass = data.password;
    let isCorrect = await validatePassword(password,hashedPass);
    if(!isCorrect)
    return errorSender(res, HTTP_CODE_UNAUTHORIZED, "incorrect email or password");
    const token = await getLoginToken({email,user_type,uid:data[`${user_type}_id`]});
    return res.json({token});
  } catch (error) {
    console.error(error);
    global.logger.error(formatErrorLog(error))
    res.status(HTTP_CODE_INTERNAL_ERROR).json({ message: "Internal server error" });
  }
};

module.exports = {login}
