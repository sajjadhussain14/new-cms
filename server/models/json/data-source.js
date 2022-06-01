const fs = require("fs");
const util = require("util");
const fsys = require("fs").promises;

const newDataSource = (ds, req, res) => {
  let sourceFile = "./data-source.js";

  let sourceData = "";
  let response = { status: 409, msg: "Failed to update Data Source!" };
  sourceData = ds;
  console.log("here OK");
  try {
    fs.writeFileSync(sourceFile, sourceData);
    response = {
      status: 201,
      msg: `Updated Data Source Successfully!`,
    };
  } catch (err) {
    response = {
      status: 409,
      msg: `Data Source Updation Failed!`,
    };
  }

  return response;
};

module.exports = { newDataSource };
