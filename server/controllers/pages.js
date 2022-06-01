const fs = require("fs");
const { dataSource } = require("../data-source");
const { createPageJson } = require("../models/json/pages");
const {
  createpageMongo,
  getAllPageMongo,
  deletePageMongo,
} = require("../models/mongodb/pages");

const {
  createPageSqlServer,
  getALlPages,
  deletePage,
} = require("../models/sql-server/pages");

const getPages = async (req, res) => {
  let dataSourceJson = "./data/pages.json";
  let pagesData = [];

  if (dataSource == "sqlServer") {
    let pages = [];
    pages = await getALlPages(req, res);

    res.json(pages);
  } else if (dataSource == "mongoDb") {
    let response = await getAllPageMongo();
    res.json(response);
  } else {
    fs.readFile(dataSourceJson, (err, data) => {
      if (!data) data = [];
      try {
        pagesData = JSON.parse(data);
      } catch (err) {}
      if (!pagesData) pagesData = [];
      res.json(pagesData);
    });
  }
};

const newPage = async (req, res) => {
  let DataSource = "./data/pages.json";

  let pages = [];
  if (!req.body) {
    req.body = {};
  }

  let pageName = "";
  try {
    pageName = req.body.name;
  } catch (err) {}
  if (!pageName || pageName == "") {
    return res.json({ status: 309, msg: "Please Enter a Page Name !" });
  } else {
    if (dataSource == "sqlServer") {
      let response = await createPageSqlServer(pageName, req, res);
      res.json(response);
    } else if (dataSource == "mongoDb") {
      let response = await createpageMongo(pageName);
      res.json(response);
    } else {
      let resp = createPageJson(DataSource, req, res);
      res.json(resp);
    }
  }
};

const delPage = async (req, res) => {
  let DataSourceJson = "./data/pages.json";
  let path = "./data/pages/";
  let pages = [];
  if (!req.body) {
    req.body = {};
  }

  let pageName = "";
  try {
    pageName = req.body.name;
  } catch (err) {}
  if (!pageName || pageName == "") {
    return res.json({ status: 309, msg: "Please Enter a Page Name !" });
  } else {
    if (dataSource == "sqlServer") {
      let response = await deletePage(pageName, req, res);
      res.json(response);
    } else if (dataSource == "mongoDb") {
      let response = await deletePageMongo(pageName);
      res.json(response);
    } else {
      fs.readFile(DataSourceJson, (err, prevRecs) => {
        if (!prevRecs || prevRecs == "") prevRecs = [];
        if (prevRecs.length > 0) {
          prevRecs = JSON.parse(prevRecs);
        }
        if (!prevRecs || prevRecs == "") prevRecs = [];

        let p = [];

        try {
          pages = prevRecs.filter(
            (page) =>
              page.name.toString().toLowerCase() !=
              req.body.name.toString().toLowerCase()
          );
        } catch (err) {}
        let pageRecs = JSON.stringify(pages);

        fs.writeFile(DataSourceJson, pageRecs, (err) => {
          if (err) {
            return res.json({ status: 400, msg: "error" });
          }
          let file = req.body.name.replace(/\s\s+/g, " ");

          try {
            // replace all multiple spaces to single space
            file = file.replace(/\s\s+/g, " ");
            // replace all spaces to -
            file = file.replace(/ /g, "-");
          } catch (err) {}

          file = file.toLocaleLowerCase();
          fs.unlink(path + file + ".json", (err) => {
            if (err) {
              console.error(err);
              console.error(path + file + ".json");

              return res.json({
                status: 502,
                msg: "Page could not be deleted",
              });
            }

            //file removed
          });

          res.json({ status: 201, msg: "Page deleted Sucessfully" });
        });
      });
    }
  }
};
module.exports = { getPages, newPage, delPage };
