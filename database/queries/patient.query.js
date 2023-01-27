const { RELATION_PATIENT } = require("../../constants");

const insertPatient = async (dbConnection, data) => {
  await dbConnection
    .createQueryBuilder()
    .insert()
    .into(RELATION_PATIENT)
    .values(data)
    .execute();
};

module.exports = { insertPatient };
