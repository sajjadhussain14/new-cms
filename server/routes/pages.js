const express = require("express");
const router = express.Router();

const {
  getPages,
  newPage,
  delPage,
  getPageMetas,
  updatePageSeoData,
  getOtherPages,
  getCategoryPages,
  getProductPages,
} = require("../controllers/pages");

router.get("/getAllPages", getPages);
router.get("/getOtherPages", getOtherPages);
router.get("/getCategoryPages", getCategoryPages);
router.get("/getProductPages", getProductPages);

router.post("/createPage", newPage);

router.post("/updatePageSeo", updatePageSeoData);

router.post("/deletePage", delPage);

router.get("/pageMetas", getPageMetas);

module.exports = router;
