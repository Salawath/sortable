const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "sortable",
  password: "salawath",
});

module.exports = pool.promise();
