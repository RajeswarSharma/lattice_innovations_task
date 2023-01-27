const { RELATION_PSYCHIATRIST } = require("../../constants");

const insertPsychiatrist = async (dbConnection,data)=>{
    await dbConnection
      .createQueryBuilder()
      .insert()
      .into(RELATION_PSYCHIATRIST)
      .values(data)
      .execute();
}

module.exports = {insertPsychiatrist}