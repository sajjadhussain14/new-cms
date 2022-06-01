const fs = require("fs");

const getContent = (req, res) => {
  let path = "./data/pages/";
  let pageName = "";

  pageName = req.query.page;
  try {
    // replace all multiple spaces to single space
    pageName = pageName.replace(/\s\s+/g, " ");
  } catch (err) {}

  try {
    // replace all spaces to -
    pageName = pageName.replace(/ /g, "-");
  } catch (err) {}

  pageName = pageName + ".json";

  fs.readFile(path + pageName, (err, data) => {
    if (!data) data = {};
    let pageContent = {};
    try {
      pageContent = JSON.parse(data);
    } catch (err) {}
    if (!pageContent || pageContent == "") pageContent = "";
    res.json(pageContent);
  });
};

const updateContentJson = async (pageName, path, pageBody) => {
  await fs.writeFile(path + pageName + ".json", pageBody, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
};


const updateCssFileContent = async (pageName, path, pageBody) => {

  await fs.writeFile(path + pageName + ".css", pageBody, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
};


module.exports = { getContent, updateContentJson ,updateCssFileContent};
