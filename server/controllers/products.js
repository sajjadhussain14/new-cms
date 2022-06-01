const fs = require("fs");

const getHomeProducts = (req, res) => {
  let dataSource = "./data/homepage.json";
  let attr = "";
  let limitProds = 8;

  attr = req.query.attr;
  limitProds = req.query.limit;
  if (!attr || attr == "") attr = "";
  console.log(attr);
  if (!limitProds || limitProds == "") limitProds = 8;

  if (attr != "") {
    fs.readFile(dataSource, (err, data) => {
      if (!data) data = [];
      let products = [];
      try {
        products = JSON.parse(data);
      } catch (err) {}
      if (!products) products = [];
      let filteredProducts = [];

      if (attr == "featured") {
        filteredProducts = products.filter((prod) => prod.Featured == "yes");
        if (filteredProducts && filteredProducts.length > limitProds) {
          filteredProducts.length = limitProds;
        }
      } else if (attr == "new") {
        try {
          products.sort(function (a, b) {
            let dateA = a.date.toLowerCase();
            let dateB = b.date.toLowerCase();
            if (dateA < dateB) {
              return -1;
            } else if (dateA > dateB) {
              return 1;
            }
            return 0;
          });
        } catch (err) {}
        if (products && products.length > limitProds) {
          products.length = limitProds;
        }
        filteredProducts = products;
      } else if (attr == "sale") {
        filteredProducts = products.filter((prod) => prod.Sale == "yes");
        if (filteredProducts && filteredProducts.length > limitProds) {
          filteredProducts.length = limitProds;
        }
      } else if (attr == "random") {
        filteredProducts = products.sort(() => 0.5 - Math.random());
        if (filteredProducts && filteredProducts.length > limitProds) {
          filteredProducts.length = limitProds;
        }
      } else {
        console.log(attr);
        filteredProducts = products.filter(
          (prod) => prod.Dept.toUpperCase() == attr.toUpperCase()
        );
        if (filteredProducts && filteredProducts.length > limitProds) {
          filteredProducts.length = limitProds;
        }
      }

      if (!filteredProducts || filteredProducts == "") filteredProducts = [];
      if (!filteredProducts || filteredProducts.length < 1) {
        res.json("No Products Found");
      } else {
        res.json(filteredProducts);
      }
    });
  } else {
    res.json(["No Products Avaiable"]);
  }
};

module.exports = { getHomeProducts };
