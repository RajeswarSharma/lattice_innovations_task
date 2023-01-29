require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
global.logger = require("./config/logger.config");
const http = require("http");
const { formatErrorLog } = require("./utils/error.utils");
const app = require("./routes/route");
const { getDBConnection } = require("./database/dbConnection");
const PORT = process.env.PORT || 8000;

app.get("/ping",async (req, res) => {
  res.status(200).json({ pid: process.pid });
});

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  switch (error.code) {
    case "EACCES":
      global.logger.info(`${PORT} requires elevated privileges`);
      process.exit(1);
    case "EADDRINUSE":
      global.logger.info(`${PORT} is already in use`);
      process.exit(1);
    default:
      global.logger.info(`UNHANDLED-ERR ${formatErrorLog(error)}`);
      throw error;
  }
};
app.set("port", PORT);
const server = http.createServer(app);
server.on("error", onError);
server.listen(PORT, async () => {
  const [dbConnection, error] = await getDBConnection();
  if(error){
    global.logger.error(formatErrorLog(error));
    process.exit(1);
  }
  global.dbConnection = dbConnection;
  global.logger.info(`server is listning at ${PORT}, instance_pid:${process.pid}`);
  const server_info = {
    env: process.env.NODE_ENV,
    port: PORT,
    pid: process.pid,
  };
  console.log(server_info);
});