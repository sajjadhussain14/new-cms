const fs = require("fs");

const getDepts = (req, res) => {
  let dataSource = "./data/taxonomy.json";
  let limit = 8;
  limit = req.query.limit;
  if (!limit || limit == "") limit = 8;
  fs.readFile(dataSource, (err, data) => {
    if (!data) data = [];
    let deptsRec = [];
    try {
      deptsRec = JSON.parse(data);
    } catch (err) {}
    if (!deptsRec) deptsRec = [];
    let depts = [];
    depts = deptsRec.filter((dept) => dept.TYP == "EMPTY");
    if (!depts || depts == "") depts = [];
    if (depts && depts.length > limit) depts.length = limit;

    res.json(depts);
  });
};

const getTyps = (req, res) => {
  let dataSource = "./data/taxonomy.json";
  let dept = "";
  dept = req.query.dept;
  if (!dept || dept == "") dept = "";
  if (dept != "") {
    fs.readFile(dataSource, (err, data) => {
      if (!data) data = [];
      let typsRec = [];
      try {
        typsRec = JSON.parse(data);
      } catch (err) {}
      if (!typsRec) typsRec = [];
      let typs = [];
      typs = typsRec.filter(
        (cat) =>
          cat.DEPT == dept && cat.SUBTYP_1 == "EMPTY" && cat.TYP != "EMPTY"
      );
      if (!typs || typs == "") typs = [];

      res.json(typs);
    });
  } else {
    res.json([]);
  }
};

const getSubTyp1 = (req, res) => {
  let dataSource = "./data/taxonomy.json";
  let dept = "";
  let typ = "";

  dept = req.query.dept;

  typ = req.query.typ;

  if (!dept || dept == "") dept = "";
  if (!typ || typ == "") typ = "";

  if (dept != "" && typ != "") {
    fs.readFile(dataSource, (err, data) => {
      if (!data) data = [];
      try {
        typsRec = JSON.parse(data);
      } catch (err) {}
      if (!typsRec) typsRec = [];
      let subTyp1 = [];
      subTyp1 = typsRec.filter(
        (cat) =>
          cat.DEPT == dept &&
          cat.TYP == typ &&
          cat.SUBTYP_2 == "EMPTY" &&
          cat.SUBTYP_1 != "EMPTY"
      );
      if (!subTyp1 || subTyp1 == "") subTyp1 = [];

      res.json(subTyp1);
    });
  } else {
    res.json([]);
  }
};

const getSubTyp2 = () => {};

module.exports = { getDepts, getTyps, getSubTyp1, getSubTyp2 };
