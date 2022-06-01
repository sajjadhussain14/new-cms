const { response } = require("express");
const sql = require("mssql");

const getConnection = async () => {
  try {
    return await sql.connect({
      user: "sa",
      password: "sa1234",
      database: "builder",
      server: "localhost",

      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
      },
      options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const checkSqlConnected = async (req, res) => {
  console.log("In sql test");
  try {
    await sql.connect(
      "Server=localhost,1433;Database=builder;User Id=sa;Password=sa1234;trustServerCertificate=true;Encrypt=true"
    );

    return res.send("Congratulations! SQL Database is Connected.");
  } catch (err) {
    console.log(err);
    return res.send("SQL Database is Connection Failed");
  }
};

module.exports = { getConnection, checkSqlConnected };
