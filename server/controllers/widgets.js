const fs = require("fs");
const { dataSource } = require("../data-source");
const { createWidgetJson } = require("../models/json/widgets");

const getWidgets = async (req, res) => {
  let dataSourceJson = "./data/widgets.json";
  let widgetsData = [];

  if (dataSource == "sqlServer") {
    let widgets = [];

    res.json({});
  } else if (dataSource == "mongoDb") {
    res.json({});
  } else {
    fs.readFile(dataSourceJson, (err, data) => {
      if (!data) data = [];
      try {
        widgetsData = JSON.parse(data);
      } catch (err) {}
      if (!widgetsData) widgetsData = [];
      res.json(widgetsData);
    });
  }
};

const newWidget = async (req, res) => {
  let DataSource = "./data/widgets.json";

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
    if (dataSource == "sqlServer") {
      res.json({});
    } else if (dataSource == "mongoDb") {
      res.json({});
    } else {
      let resp = createWidgetJson(DataSource, req, res);
      res.json(resp);
    }
  }
};

const delWidget = async (req, res) => {
  let DataSourceJson = "./data/widgets.json";
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
    if (dataSource == "sqlServer") {
      res.json({});
    } else if (dataSource == "mongoDb") {
      res.json({});
    } else {
      fs.readFile(DataSourceJson, (err, prevRecs) => {
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

        fs.writeFile(DataSourceJson, widgetRecs, (err) => {
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
  }
};
module.exports = { getWidgets, newWidget, delWidget };
