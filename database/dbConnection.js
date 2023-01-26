const { DataSource } = require("typeorm");
const { formatErrorLog } = require("../utils/error.utils");
const connectionConfigs = require("../config/dev_database.config");
exports.getDBConnection = async () => {
  try {
    const connection = new DataSource(connectionConfigs);
    await connection.initialize();
    return [connection, null];
  } catch (error) {
    global.logger.error(formatErrorLog(error));
    console.error(error);
    return [null, true];
  }
};
