const compression = require("compression");
const express = require("express");
const sql = require("mssql");
var CryptoJS = require("crypto-js");
require("dotenv").config();

const {
  connectMongoose,
  testConnectMongoose,
  checkMongoConnected,
} = require("./mongo-db-connect");

const { checkSqlConnected } = require("./db-connect");

var cors = require("cors");
const fs = require("fs");
const multer = require("multer");

const path = require("path");
const app = express();
// compress responses
app.use(compression());

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50000mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50000mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(
  express.urlencoded({
    limit: "50000mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.json());

app.use(express.text());
app.use("/uploads", express.static("uploads"));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    let name = "";
    name = file.originalname;
    name =
      name.slice(0, 0) +
      Math.floor(Math.random() * 100000000000) +
      "-" +
      name.slice(0);

    var today = new Date();
    var cdate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate() +
      "-" +
      today.getHours() +
      "-" +
      today.getMinutes() +
      "-" +
      today.getSeconds();
    name = cdate + "-" + name;

    cb(null, name);
  },
});
var upload = multer({ storage: storage });

var whitelist = [
  "http://localhost:5500",
  "http://localhost",
  "http://localhost/test",
  "http://retacshootingsports-com.server-icumulusdataserver9-vps.vps.ezhostingserver.com",
  "http://192.168.1.143:8081",
  "http://192.168.1.143:666",
  "http://192.168.0.101",
]; //white list consumers
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
};

app.use(cors(corsOptions)); //adding cors middleware to the express with above configurations

// LOAD HOME NODE PAGE
app.get("/", (req, res) => {
  res.json("welcome home of express");
});

app.post("/assets", upload.array("files", 10), function (req, res, next) {
  // req.files is array of `profile-files` files
  // req.body will contain the text fields, if there were any
  // console.log(req.files[0].path);
  return res.send(req.files);
});

app.get("/checkSqlServerConnection", (req, res) => {
  checkSqlConnected(req, res);
});

app.get("/mongo", (req, res) => {
  connectMongoose(req, res);
});

// checking connection status on Data Source env
app.get("/checkMongoConnected", (req, res) => {
  checkMongoConnected(req, res);
});

app.get("/testMongodbConnection", (req, res) => {
  testConnectMongoose(req, res);
});

// CONTENT ROUTES
const contentRoute = require("./routes/content");
app.use("/api/content", contentRoute);

// PAGES ROUTES
const pagesRoute = require("./routes/pages");
app.use("/api/pages", pagesRoute);

// WIDGETS ROUTES
const widgetsRoute = require("./routes/widgets");
app.use("/api/widgets", widgetsRoute);

// BANNERS ROUTES
const bannerRoute = require("./routes/banners");
app.use("/api/banners", bannerRoute);

// TAXONOMY ROUTES
const taxonomyRoute = require("./routes/taxonomy");
app.use("/api/taxonomy", taxonomyRoute);

// PRODUCTS ROUTES
const productsRoute = require("./routes/products");
app.use("/api/products", productsRoute);

// Data Source ROUTES
const dataSourceRoute = require("./routes/data-source");
app.use("/api/dataSource", dataSourceRoute);

// USERS ROUTES
const userRoute = require("./routes/user");
app.use("/api/user", userRoute);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server Up in Port ${port}`);
});

app.post("/api/encrpty-data", (req, res) => {
  const key = process.env.ENCRYPTION_KEY;
  const { data } = req.body;
  // Encrypt the JSON string using encryption_key from above
  var encrypted_data = CryptoJS.AES.encrypt(data, key).toString();

  // URL encode the encrypted data so it can be sent in the URL
  var encoded_data = encodeURIComponent(encrypted_data);

  // Put together the final UR: for displaying in your page

  if (!encoded_data || encoded_data == "") encoded_data = "none";

  res.json(encoded_data);
});
