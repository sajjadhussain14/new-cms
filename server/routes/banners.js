const express = require("express");
const router = express.Router();

const { getBanners, newBanner, delBanner } = require("../controllers/banners");

router.get("/getAllBanners", getBanners);

router.post("/createBanner", newBanner);

router.post("/deleteBanner", delBanner);

module.exports = router;
