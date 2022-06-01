const fs = require("fs");
const util = require("util");
const fsys = require("fs").promises;

const getWidgets = (req, res) => {
  let dataSource = "./data/widgets.json";
  let widgetsData = [];

  fs.readFile(dataSource, (err, data) => {
    if (!data) data = [];
    try {
      widgetsData = JSON.parse(data);
    } catch (err) {}
    if (!widgetsData) widgetsData = [];
    res.json(widgetsData);
  });
};

const createWidgetJson = (DataSource, req, res) => {
  let response = { status: 409, msg: "Failed to Create the Widget!" };
  let widgetRecs = [];
  let prevRecs = [];

  prevRecs = fs.readFileSync(DataSource);

  if (!prevRecs || prevRecs == "") prevRecs = [];
  if (prevRecs.length > 0) {
    prevRecs = JSON.parse(prevRecs);
  }
  if (!prevRecs || prevRecs == "") prevRecs = [];

  if (
    prevRecs.some(
      (widget) =>
        widget.name.toString().toUpperCase() ==
        req.body.name.toString().toUpperCase()
    )
  ) {
    return (response = {
      status: 309,
      msg: `Widget <strong> ${req.body.name} </strong> Already Exists !`,
    });
  } else {
    prevRecs.push(req.body);
    widgetRecs = JSON.stringify(prevRecs);
    try {
      fs.writeFileSync(DataSource, widgetRecs);
      response = {
        status: 201,
        msg: `Widget <strong> ${req.body.name} </strong> Created Successfully!`,
      };
      let initialContent =
        '{"mycustom-html":"","mycustom-components":"[]","mycustom-assets":"[]","mycustom-css":"* { box-sizing: border-box; } body {margin: 0;}","mycustom-styles":"[]"}';
      fs.writeFileSync(
        "./data/widgets/" + req.body.name + ".json",
        initialContent
      );
    } catch (err) {
      response = {
        status: 409,
        msg: `Widget <strong> ${req.body.name} </strong> Created Failed!`,
      };
      console.log("failed created");
    }
  }

  return response;
};

const delWidget = (req, res) => {
  let DataSource = "./data/widgets.json";
  let path = "./data/widgets/";
  let widgets = [];
  if (!req.body) {
    req.body = {};
  }

  let widgetName = "";
  try {
    widgetName = req.body.name;
  } catch (err) {}
  if (!widgetName || widgetName == "") {
    return res.json({ status: 309, msg: "Please Enter a Widget Name !" });
  } else {
    fs.readFile(DataSource, (err, prevRecs) => {
      if (!prevRecs || prevRecs == "") prevRecs = [];
      if (prevRecs.length > 0) {
        prevRecs = JSON.parse(prevRecs);
      }
      if (!prevRecs || prevRecs == "") prevRecs = [];
      let p = [];

      try {
        widgets = prevRecs.filter(
          (widget) =>
            widget.name.toString().toLowerCase() !=
            req.body.name.toString().toLowerCase()
        );
      } catch (err) {}
      let widgetRecs = JSON.stringify(widgets);

      fs.writeFile(DataSource, widgetRecs, (err) => {
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
              msg: "Widget could not be deleted",
            });
          }

          //file removed
        });

        res.json({ status: 201, msg: "Widget deleted Sucessfully" });
      });
    });
  }
};
module.exports = { getWidgets, createWidgetJson, delWidget };
