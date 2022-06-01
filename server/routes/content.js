const express = require("express");
const router = express.Router();

const { loadContent, saveContent } = require("../controllers/content");

router.get("/load", loadContent);

router.post("/save", saveContent);

module.exports = router;
