const fs = require("fs");
let { dataSource } = require("../data-source");
const {
  updateContentJson,
  updateCssFileContent,
} = require("../models/json/content");
const {
  updateContentSqlServer,
  getPageContent,
} = require("../models/sql-server/content");
const {
  UpdatePageContentMongo,
  getPageContentMongo,
} = require("../models/mongodb/content");

dataSource = "jsonFiles";
const loadContent = async (req, res) => {
  let isWidget = "no";
  isWidget = req.query.isWidget;
  let path = "";

  if (isWidget == "yes") {
    path = "./data/widgets/";
  } else if (isWidget == "no") {
    path = "./data/pages/";
  } else if (isWidget == "banner") {
    path = "./data/banners/";
  } else {
    path = "";
  }
  let pageName = "";
  let cssPage = "";

  pageName = req.query.page;
  try {
    // replace all multiple spaces to single space
    pageName = pageName.replace(/\s\s+/g, " ");
  } catch (err) {}

  try {
    // replace all spaces to -
    pageName = pageName.replace(/ /g, "-");
  } catch (err) {}

  if (dataSource == "sqlServer") {
    getPageContent(pageName)
      .then((data) => {
        if (!data) data = {};
        let pageContent = {};
        try {
          pageContent = JSON.parse(data);
        } catch (err) {}
        if (!pageContent || pageContent == "") pageContent = "";

        res.json(pageContent);
      })
      .catch((error) => {
        console.error("Contnet Updation Faile!", error);

        res.json({});
      });
  } else if (dataSource == "mongoDb") {
    let pageContent = "";
    let content = await getPageContentMongo(pageName);
    try {
      pageContent = JSON.parse(content);
    } catch (err) {}
    if (!pageContent || pageContent == "") pageContent = {};

    res.json(pageContent);
  } else {
    cssPage = pageName;

    pageName = pageName + ".json";
    fs.readFile(path + pageName, (err, data) => {
      if (!data) data = {};
      let pageContent = {};
      try {
        pageContent = JSON.parse(data);
      } catch (err) {}
      if (!pageContent || pageContent == "") pageContent = "";

      let css = pageContent["mycustom-css"];

      setTimeout(() => {
        writeCss(cssPage, css)
          .then(() => {
            res.json(pageContent);
          })
          .catch((error) => {
            // res.json(pageContent);
          });
      }, 0);
    });
  }
};

const writeCss = async (page, css) => {
  console.log("page : ", page);

  let path = "";
  if (page == "home") {
    path = "../builder-css/";

    fs.writeFileSync(path + "main" + ".css", css, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      //file written successfully
    });
  } else {
    path = "../builder-css/";
    fs.writeFileSync(path + "page" + ".css", css, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      //file written successfully
    });
  }
};

const saveContent = async (req, res) => {
  if (!req.body) {
    req.body = "";
  }
  let isWidget = "no";
  isWidget = req.query.isWidget;
  let pageName = "";
  pageName = req.query.page;
  const pageBody = JSON.stringify(req.body);
  if (!pageName || pageName == "") {
  } else {
    try {
      // replace all multiple spaces to single space
      pageName = pageName.replace(/\s\s+/g, " ");
    } catch (err) {}

    try {
      // replace all spaces to -
      pageName = pageName.replace(/ /g, "-");
    } catch (err) {}
    // pageName = pageName.replaceAll(" ", "-");

    // to lowercase
    pageName = pageName.toLocaleLowerCase();

    if (dataSource == "sqlServer") {
      updateContentSqlServer(pageName, pageBody)
        .then((resp) => {
          res.json({});
        })
        .catch((error) => {
          console.error("Contnet Updation Faile!", error);
          res.json({});
        });
    } else if (dataSource == "mongoDb") {
      let response = await UpdatePageContentMongo(pageName, pageBody);
      res.json(response);
    } else {
      let path = "";
      if (isWidget == "yes") {
        path = "./data/widgets/";
      } else if (isWidget == "no") {
        path = "./data/pages/";
      } else if (isWidget == "banner") {
        path = "./data/banners/";
      } else {
        path = "";
      }
      updateContentJson(pageName, path, pageBody)
        .then(() => {
          console.log("Updated Content");

          res.json({});
        })
        .catch((error) => {
          console.error("Contnet Updation Faile!", error);
          res.json({});
        });
    }
  }
};

module.exports = { loadContent, saveContent };
