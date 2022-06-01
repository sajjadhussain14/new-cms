const fs = require("fs");
const sql = require("mssql");
const { getConnection } = require("../../db-connect");

const getALlPages = async (req, res) => {
  const conn = await getConnection();

  const resp = await conn.request().query(`select page_name  from page `);
  return resp.recordset;
};

const createPageSqlServer = async (name) => {
  let response = { status: 409, msg: "Page Creation Failed" };
  const conn = await getConnection();
  let resp = await pageExists(name, conn);

  if (resp > 0) {
    return (response = {
      status: 309,
      msg: `Page <strong> ${name} </strong> Already Exixts`,
    });
  } else {
    let resp = await createPage(name, conn);
    if (resp > 0) {
      return (response = {
        status: 200,
        msg: `Page <strong> ${name} </strong> Created Successfully`,
      });
    } else {
      return (response = {
        status: 309,
        msg: `Page <strong> ${name} </strong> Creation Failed!!!`,
      });
    }
  }
};

const deletePage = async (name, req, res) => {
  let response = { status: 409, msg: "Page Deletion Failed" };
  const conn = await getConnection();

  let resp = await delPage(name, conn);
  if (resp > 0) {
    return (response = {
      status: 200,
      msg: `Page <strong> ${name} </strong> Deleted Successfully`,
    });
  } else {
    return (response = {
      status: 309,
      msg: `Page <strong> ${name} </strong> Deletion Failed!!!`,
    });
  }
};

const delPage = async (name, conn) => {
  let content = " ";
  console.log("del page name", name);
  const res = await conn
    .request()
    .query(`DELETE FROM page WHERE page_name='${name}'`);
  return res.rowsAffected.length;
};

const createPage = async (name, conn) => {
  let content = " ";
  const request = conn.request();
  request.stream = true;
  const res = await request.query(`INSERT INTO page (page_name, page_content)
VALUES ('${name}', '${content}')`);
  return res.rowsAffected.length;
};

const pageExists = async (name, conn) => {
  const res = await conn
    .request()
    .query(`select page_name from page where page_name ='${name}'`);
  return res.recordset.length;
};

module.exports = { getALlPages, createPageSqlServer, deletePage };
