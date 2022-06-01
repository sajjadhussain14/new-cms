const express = require("express");
const router = express.Router();

const { getPages, newPage, delPage } = require("../controllers/pages");

router.get("/getAllPages", getPages);

router.post("/createPage", newPage);

router.post("/deletePage", delPage);

module.exports = router;
