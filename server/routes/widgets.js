const express = require("express");
const router = express.Router();

const { getWidgets, newWidget, delWidget } = require("../controllers/widgets");

router.get("/getAllWidgets", getWidgets);

router.post("/createWidget", newWidget);

router.post("/deleteWidget", delWidget);

module.exports = router;
