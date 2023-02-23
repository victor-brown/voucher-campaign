import mysql from "mysql";
import config from "../config/config";
import { createError } from "../errors/ErrorFactory";

const connection = mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database,
});

connection.connect((err) => {
  if (err) {
    throw createError("InternalServerError", {
      message: "Error connecting to MySQL database:" + err,
    });
  } else {
    console.log("Connected to MySQL database");
  }
});

export default connection;
