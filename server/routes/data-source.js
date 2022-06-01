const express = require("express");
const router = express.Router();

const {
  changeDataSource,
  getDataSource,
} = require("../controllers/data-source");

router.post("/setNew", changeDataSource);
router.get("/getDs", getDataSource);

module.exports = router;
