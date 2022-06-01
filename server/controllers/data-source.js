const fs = require("fs");
const { newDataSource } = require("../models/json/data-source");
const { dataSource } = require("../data-source");
const changeDataSource = async (req, res) => {
  let targetData = `const dataSource = "jsonFiles";// EXPECTED VALUES: sqlServer,mongoDb,jsonFiles`;
  let ds = "";
  ds = req.body.source;
  if (!ds || ds == "") ds = "jsonFiles";
  let dsString = JSON.stringify(ds);
  targetData = `const dataSource =${dsString} ;
  // EXPECTED VALUES: sqlServer,mongoDb,jsonFiles
  module.exports = { dataSource };

  `;
  let resp = newDataSource(targetData, req, res);
  res.json(resp);
};

const getDataSource = (req, res) => {
  console.log("pre value");
  console.log(dataSource);
  res.json(dataSource);
};

module.exports = { changeDataSource, getDataSource };
