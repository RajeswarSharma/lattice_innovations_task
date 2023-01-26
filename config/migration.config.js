const { DataSource } = require("typeorm");

exports.default = new DataSource(require("./dev_database.config"));
