const fs = require("fs");
const { dataSource } = require("../data-source");
const { createBannerJson } = require("../models/json/banners");

const getBanners = async (req, res) => {
  let dataSourceJson = "./data/banners.json";
  let bannersData = [];

  if (dataSource == "sqlServer") {
    let banners = [];

    res.json({});
  } else if (dataSource == "mongoDb") {
    res.json({});
  } else {
    fs.readFile(dataSourceJson, (err, data) => {
      if (!data) data = [];
      try {
        bannersData = JSON.parse(data);
      } catch (err) {}
      if (!bannersData) bannersData = [];
      res.json(bannersData);
    });
  }
};

const newBanner = async (req, res) => {
  let DataSource = "./data/banners.json";

  let banners = [];
  if (!req.body) {
    req.body = {};
  }

  let bannerName = "";
  try {
    bannerName = req.body.name;
  } catch (err) {}
  if (!bannerName || bannerName == "") {
    return res.json({ status: 309, msg: "Please Enter a Widget Name !" });
  } else {
    if (dataSource == "sqlServer") {
      res.json({});
    } else if (dataSource == "mongoDb") {
      res.json({});
    } else {
      let resp = createBannerJson(DataSource, req, res);
      res.json(resp);
    }
  }
};

const delBanner = async (req, res) => {
  let DataSourceJson = "./data/banners.json";
  let path = "./data/banners/";
  let banners = [];
  if (!req.body) {
    req.body = {};
  }

  let bannerName = "";
  try {
    bannerName = req.body.name;
  } catch (err) {}
  if (!bannerName || bannerName == "") {
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
          banners = prevRecs.filter(
            (banner) =>
              banner.name.toString().toLowerCase() !=
              req.body.name.toString().toLowerCase()
          );
        } catch (err) {}
        let bannerRecs = JSON.stringify(banners);

        fs.writeFile(DataSourceJson, bannerRecs, (err) => {
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
                msg: "Banner could not be deleted",
              });
            }

            //file removed
          });

          res.json({ status: 201, msg: "Banner deleted Sucessfully" });
        });
      });
    }
  }
};
module.exports = { getBanners, newBanner, delBanner };
