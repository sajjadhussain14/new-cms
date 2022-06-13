const { filter } = require("compression");
const fs = require("fs");
const util = require("util");
const fsys = require("fs").promises;

const getPages = (req, res) => {
  let dataSource = "./data/pages.json";
  let pagesData = [];

  fs.readFile(dataSource, (err, data) => {
    if (!data) data = [];
    try {
      pagesData = JSON.parse(data);
      pagesData = pagesData.filter((page) => page.pageType == "Builder");
    } catch (err) {}
    if (!pagesData) pagesData = [];
    res.json(pagesData);
  });
};

const createPageJson = (DataSource, req, res) => {
  let response = { status: 409, msg: "Failed to Create the Page!" };
  let pageRecs = [];
  let prevRecs = [];

  prevRecs = fs.readFileSync(DataSource);

  if (!prevRecs || prevRecs == "") prevRecs = [];
  if (prevRecs.length > 0) {
    prevRecs = JSON.parse(prevRecs);
  }
  if (!prevRecs || prevRecs == "") prevRecs = [];

  if (
    prevRecs.some(
      (page) =>
        page.name.toString().toUpperCase() ==
          req.body.name.toString().toUpperCase() &&
        page.slung.toString().toUpperCase() ==
          req.body.slung.toString().toUpperCase()
    )
  ) {
    return (response = {
      status: 309,
      msg: `Page <strong> ${req.body.name} </strong> Already Exists !`,
    });
  } else {
    prevRecs.push(req.body);
    pageRecs = JSON.stringify(prevRecs);
    try {
      fs.writeFileSync(DataSource, pageRecs);
      response = {
        status: 201,
        msg: `Page <strong> ${req.body.name} </strong> Created Successfully!`,
      };
      let initialContent =
        '{"mycustom-html":"","mycustom-components":"[]","mycustom-assets":"[]","mycustom-css":"* { box-sizing: border-box; } body {margin: 0;}","mycustom-styles":"[]"}';
      fs.writeFileSync(
        "./data/pages/" + req.body.name + ".json",
        initialContent
      );
    } catch (err) {
      response = {
        status: 409,
        msg: `Page <strong> ${req.body.name} </strong> Created Failed!`,
      };
    }
  }

  return response;
};

const delPage = (req, res) => {
  let DataSource = "./data/pages.json";
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
    fs.readFile(DataSource, (err, prevRecs) => {
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

      fs.writeFile(DataSource, pageRecs, (err) => {
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

            return res.json({ status: 502, msg: "Page could not be deleted" });
          }

          //file removed
        });

        res.json({ status: 201, msg: "Page deleted Sucessfully" });
      });
    });
  }
};
module.exports = { getPages, createPageJson, delPage };
