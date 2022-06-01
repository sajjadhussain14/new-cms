const express = require("express");
const router = express.Router();

const {
  getDepts,
  getTyps,
  getSubTyp1,
  getSubTyp2,
} = require("../controllers/taxonomy");

router.get("/getDepts", getDepts);

router.get("/getTyps", getTyps);

router.get("/getSubTyp1", getSubTyp1);

module.exports = router;
