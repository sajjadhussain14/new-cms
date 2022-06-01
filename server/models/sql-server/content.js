const { sqlConfig } = require("../../db-settings");
const sql = require("mssql");
const { getConnection } = require("../../db-connect");

const getPageContent = async (pageName) => {
  const conn = await getConnection();
  const resp = await conn
    .request()
    .query(`select page_content from page where page_name='${pageName}' `);
  return resp.recordset[0].page_content;
};

const savePage = async (pageName, pageBody, conn) => {
  const request = conn.request();
  request.stream = true;
  const res = await request.query(
    `UPDATE page SET page_content = '${pageBody}' WHERE page_name = '${pageName}' `
  );
  return res.rowsAffected.length;
};
const updateContentSqlServer = async (pageName, pageBody) => {
  let response = { status: 409, msg: "Page Creation Failed" };
  const conn = await getConnection();
  let resp = 1;
  resp = await savePage(pageName, pageBody, conn);
  if (resp > 0) {
    return (response = {
      status: 200,
      msg: `Content Published Successfully`,
    });
  } else {
    return (response = {
      status: 309,
      msg: `Content Publish Failed!!!`,
    });
  }
};

module.exports = { getPageContent, updateContentSqlServer };
