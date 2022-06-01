const fs = require("fs");
const util = require("util");
const fsys = require("fs").promises;

const getBanners = (req, res) => {
  let dataSource = "./data/banners.json";
  let bannersData = [];

  fs.readFile(dataSource, (err, data) => {
    if (!data) data = [];
    try {
      bannersData = JSON.parse(data);
    } catch (err) {}
    if (!bannersData) widgetsData = [];
    res.json(bannersData);
  });
};

const createBannerJson = (DataSource, req, res) => {
  let response = { status: 409, msg: "Failed to Create the Widget!" };
  let bannerRecs = [];
  let prevRecs = [];

  prevRecs = fs.readFileSync(DataSource);

  if (!prevRecs || prevRecs == "") prevRecs = [];
  if (prevRecs.length > 0) {
    prevRecs = JSON.parse(prevRecs);
  }
  if (!prevRecs || prevRecs == "") prevRecs = [];

  if (
    prevRecs.some(
      (banner) =>
        banner.name.toString().toUpperCase() ==
        req.body.name.toString().toUpperCase()
    )
  ) {
    return (response = {
      status: 309,
      msg: `Banner <strong> ${req.body.name} </strong> Already Exists !`,
    });
  } else {
    prevRecs.push(req.body);
    bannerRecs = JSON.stringify(prevRecs);
    try {
      fs.writeFileSync(DataSource, bannerRecs);
      response = {
        status: 201,
        msg: `Banner <strong> ${req.body.name} </strong> Created Successfully!`,
      };
      let initialContent =
        '{"mycustom-html":"","mycustom-components":"[]","mycustom-assets":"[]","mycustom-css":"* { box-sizing: border-box; } body {margin: 0;}","mycustom-styles":"[]"}';
      fs.writeFileSync(
        "./data/banners/" + req.body.name + ".json",
        initialContent
      );
    } catch (err) {
      response = {
        status: 409,
        msg: `Banner <strong> ${req.body.name} </strong> Created Failed!`,
      };
      console.log("failed created");
    }
  }

  return response;
};

const delBanner = (req, res) => {
  let DataSource = "./data/banners.json";
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
    return res.json({ status: 309, msg: "Please Enter a Banner Name !" });
  } else {
    fs.readFile(DataSource, (err, prevRecs) => {
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

      fs.writeFile(DataSource, bannerRecs, (err) => {
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
};
module.exports = { getBanners, createBannerJson, delBanner };
