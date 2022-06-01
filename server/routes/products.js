const express = require("express");
const router = express.Router();

const { getHomeProducts } = require("../controllers/products");

router.get("/getHomePageprods", getHomeProducts);

module.exports = router;
