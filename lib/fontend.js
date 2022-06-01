const base_url = window.location.origin;

const bindFrontend = (page, isWidget) => {
  getpage(page, isWidget).then((data) => {
    let componets = data["mycustom-components"];

    try {
      let componentsJson = JSON.parse(componets);

      if (componentsJson && componentsJson.length > 0) {
        componentsJson.map((comp) => {
          if (comp.name && comp.name.toLowerCase() == "full header 1") {
            bindFullHeader1();
          } else if (comp.name && comp.name.toLowerCase() == "full header 2") {
            bindFullHeader2();
          } else if (
            comp.name &&
            comp.name.toLowerCase() == "full header default"
          ) {
            bindFullHeaderDefault();
          } else if (comp.name && comp.name.toLowerCase() == "build header 1") {
            bindNav1();
          } else if (
            comp.name &&
            comp.name.toLowerCase() == "products slider 1"
          ) {
            bindSliders1(comp.name);
          } else if (
            comp.name &&
            comp.name.toLowerCase() == "products slider 2"
          ) {
            bindSliders2(comp.name);
          } else if (
            comp.name &&
            comp.name.toLowerCase() == "products grid 1"
          ) {
            bindProdsGrid1();
          } else if (comp.name && comp.name.toLowerCase() == "full footer 3") {
            bindFullFooter3();
          } else if (
            comp.name &&
            comp.name.toLowerCase() == "full footer default"
          ) {
            bindFullFooterDefault();
          } else if (
            comp.name &&
            comp.name.toLowerCase() == "products grid 2"
          ) {
            bindProdsGrid2();
          } else if (comp.name && comp.name.toLowerCase() == "full footer 1") {
            bindFullFooter1();
          } else {
          }
        });
      } else {
      }
    } catch (err) {}
  });
};

// ********************* START BIND FULL HEADER 1 DATA ********************* //
const bindFullHeader1 = () => {
  try {
    let deptsCount = 0;

    deptsCount = document.getElementById("dynamic-links").getAttribute("depts");
    if (!deptsCount || deptsCount == "") deptsCount = 5;
    document.getElementById(
      "dynamic-links"
    ).innerHTML = `<div class="spinner-grow text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>`;

    getDepts(deptsCount).then((depts) => {
      if (!depts || depts == "") {
        depts = [];
      }

      let deptsHTML = "";
      if (depts && depts.length > 0) {
        depts.map((dept, index) => {
          deptsHTML += `<li class="nav-item">
          <a class="f-header1-nav-li-a" href=${base_url}/c/${dept.URL}>
            ${dept.DEPT}
          </a>
          
          <span id=arrowHolder-${index}>

          </span>
          <div class="f-header1-dropdown collapse" id=dropdown${index}>
            <a href="" class="f-header1-dropdown-a">Sub link 1</a>
            <a href="" class="f-header1-dropdown-a">Sub link 2</a>
            <a href="" class="f-header1-dropdown-a">Sub link 3</a>
            <a href="" class="f-header1-dropdown-a">Sub link 4</a>
            <a href="" class="f-header1-dropdown-a">Sub link 5</a>
          </div>
        </li>`;
          document.getElementById("dynamic-links").innerHTML =
            deptsHTML.toString();
          controlDropdownToggle(dept, index);
          displayTyps(dept, index);
        });
      } else {
        document.getElementById("dynamic-links").innerHTML = "";
      }
    });

    // let a = JSON.parse(componets)[0];
    // a = a.toHTML();
  } catch (err) {}

  const controlDropdownToggle = (dept, index) => {
    getTyps(dept.DEPT).then((typs) => {
      if (typs.length > 0) {
        let letCurrnetDept = document.getElementById("arrowHolder-" + index);

        let letCurrnetDeptUL = document.getElementById("dropdown" + index);
        try {
          letCurrnetDeptUL.classList.remove("d-none");
        } catch (err) {}
        try {
          letCurrnetDept.innerHTML = `                    
                <button type="button" data-bs-toggle="collapse" data-bs-target=#dropdown${index}
                    aria-expanded="false" aria-controls="dropdown${index}" id="drop" class="
                    d-lg-none border-0 d-md-block d-sm-block d-block position-absolute end-0 top-0 p-0 m-0 me-3 mt-2 bg-transparent
                    ">
                    <i class="fa fa-angle-down text-dark"></i>
`;
        } catch (err) {}
      } else {
      }
    });
  };

  const displayTyps = (dept, index) => {
    getTyps(dept.DEPT).then((typs) => {
      if (typs.length > 0) {
        let typsHTML = "";
        typs.map((cat) => {
          typsHTML += `
        <a class="f-header1-dropdown-a" href=${base_url}/c/${cat.URL}>
${cat.TYP}        </a>
      `;
        });
        let typHolder = "";
        typHolder = document.getElementById("dropdown" + index);
        try {
          typHolder.innerHTML = typsHTML;
        } catch (err) {}
      }
    });
  };
};
// ********************* END BIND FULL HEADER 1 DATA ********************* //

// ********************* START BIND FULL HEADER 2 DATA ********************* //
const bindFullHeader2 = () => {
  try {
    let deptsCount = 0;

    deptsCount = document.getElementById("dynamic-links").getAttribute("depts");
    if (!deptsCount || deptsCount == "") deptsCount = 10;
    document.getElementById(
      "dynamic-links"
    ).innerHTML = `<div class="spinner-grow text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>`;

    getDepts(deptsCount).then((depts) => {
      if (!depts || depts == "") {
        depts = [];
      }

      let deptsHTML = "";
      if (depts && depts.length > 0) {
        depts.map((dept, index) => {
          deptsHTML += `<li class="f-header2-nav-li nav-item">
          <a class="f-header2-dept" href=${base_url}/c/${dept.URL}>
            ${dept.DEPT}
          </a>
          
          <span id=arrowHolder-${index}>

          </span>
          <ul class="f-header2-dropmenu dropdown-menu collapse d-none" id=fillTyps${index}>
          </ul>
        </li>`;
          document.getElementById("dynamic-links").innerHTML =
            deptsHTML.toString();
          controlDropdownToggle(dept, index);
          displayTyps(dept, index);
        });
      } else {
        document.getElementById("dynamic-links").innerHTML = "";
      }
    });

    // let a = JSON.parse(componets)[0];
    // a = a.toHTML();
  } catch (err) {}

  const controlDropdownToggle = (dept, index) => {
    getTyps(dept.DEPT).then((typs) => {
      if (typs.length > 0) {
        let letCurrnetDept = document.getElementById("arrowHolder-" + index);

        let letCurrnetDeptUL = document.getElementById("dropdown" + index);
        try {
          letCurrnetDeptUL.classList.remove("d-none");
        } catch (err) {}
        try {
          letCurrnetDept.innerHTML = `                    
              <button
                  class="d-lg-none border-0 p-0 m-0 bg-transparent f-header2-btndrop"
                  type="button" data-bs-toggle="collapse"
                  data-bs-target="#fillTyps${index}" aria-expanded="false"
                  aria-controls="fillTyps${index}">
                  <i class="f-header-2-adicons fa fa-angle-down"></i>
              </button>
`;
        } catch (err) {}
      } else {
      }
    });
  };

  const displayTyps = (dept, index) => {
    getTyps(dept.DEPT).then((typs) => {
      if (typs.length > 0) {
        let typsHTML = "";
        typs.map((cat, index) => {
          displaySubTyp1(dept.DEPT, cat.TYP, index);

          typsHTML += `
            <li class="f-header2-drop-li">
                <a class="f-header2-droplinks dropdown-item" href=${base_url}/c/${cat.URL}>${cat.TYP}</a>
                  <button
                      class="d-lg-none border-0 p-0 m-0 bg-transparent f-header2-btndrop"
                      type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseExample8" aria-expanded="false"
                      aria-controls="collapseExample8">
                      <i class="f-header-2-adicons fa fa-angle-down"></i>
                  </button>
                <ul class="f-header2-submenu dropdown-submenu collapse list-unstyled d-none" id=fillSubTyps${index}>
                </ul> 
            </li>
      `;
        });
        let typHolder = "";
        typHolder = document.getElementById("fillTyps" + index);
        try {
          typHolder.classList.remove("d-none");
        } catch (err) {}

        try {
          typHolder.innerHTML = typsHTML;
        } catch (err) {}
      }
    });
  };
  const displaySubTyp1 = (dept, typ, index) => {
    getSubTyp1(dept, typ).then((subtyps) => {
      if (subtyps.length > 0) {
        let subTypsHTML = "";
        subtyps.map((cat) => {
          subTypsHTML += `
            <li class="f-header2-drop-li">
                <a class="f-header2-sublinks" href=${base_url}/c/${cat.URL}>${cat.SUBTYP_1}</a>
            </li>
      `;
        });
        let subTypHolder = "";
        subTypHolder = document.getElementById("fillSubTyps" + index);
        try {
          subTypHolder.classList.remove("d-none");
        } catch (err) {}

        subTypHolder.innerHTML = subTypsHTML;
      }
    });
  };
};
// ********************* END BIND FULL HEADER 2 DATA ********************* //

// ********************* START BIND FULL HEADER DEFAULT DATA ********************* //
const bindFullHeaderDefault = () => {
  try {
    let deptsCount = 0;

    deptsCount = document.getElementById("dynamic-links").getAttribute("depts");
    if (!deptsCount || deptsCount == "") deptsCount = 10;
    document.getElementById(
      "dynamic-links"
    ).innerHTML = `<div class="spinner-grow text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>`;

    getDepts(deptsCount).then((depts) => {
      if (!depts || depts == "") {
        depts = [];
      }

      let deptsHTML = "";
      if (depts && depts.length > 0) {
        depts.map((dept, index) => {
          deptsHTML += `
            <li class="default-header-nav-item nav-item">
                <a class="default-header-nav-links navlink" href=${base_url}/c/${dept.URL}>${dept.DEPT}</a>
          <span id=arrowHolder-${index}>
          </span>
                <div id=fillTyps${index}
                    class="default-header-dropmenu dropdown-menu d-none">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-ag-2 col-md-12 col-12 first">
                                <a href="##" class="default-header-sublink">DECOYS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        
        `;
          document.getElementById("dynamic-links").innerHTML =
            deptsHTML.toString();
          controlDropdownToggle(dept, index);
          displayTyps(dept, index);
        });
      } else {
        document.getElementById("dynamic-links").innerHTML = "";
      }
    });

    // let a = JSON.parse(componets)[0];
    // a = a.toHTML();
  } catch (err) {}

  const controlDropdownToggle = (dept, index) => {
    getTyps(dept.DEPT).then((typs) => {
      if (typs.length > 0) {
        let letCurrnetDept = document.getElementById("arrowHolder-" + index);

        let letCurrnetDeptUL = document.getElementById("dropdown" + index);
        try {
          letCurrnetDeptUL.classList.remove("d-none");
        } catch (err) {}
        try {
          letCurrnetDept.innerHTML = `                    
                <button
                    class="d-lg-none border-0 p-0 m-0 bg-transparent default-header-dropicon"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target=#fillTyps${index} aria-expanded="false"
                    aria-controls=fillTyps${index}>
                    <i class="fa fa-angle-down default-header-dicon d-lg-none"></i>
                </button>
`;
        } catch (err) {}
      } else {
      }
    });
  };

  const displayTyps = (dept, index) => {
    getTyps(dept.DEPT).then((typs) => {
      if (typs.length > 0) {
        let typsHTML = `<div class="row">`;
        typs.map((cat, index) => {
          // displaySubTyp1(dept.DEPT, cat.TYP, index);

          typsHTML += ` 
          <div class="col-ag-2 col-md-12 col-12 first">
          <a href=${base_url}/c/${cat.URL} class="default-header-sublink">${cat.TYP}</a>
          </div>
      `;
        });
        typsHTML += `</div>`;

        let typHolder = "";
        typHolder = document.getElementById("fillTyps" + index);
        try {
          typHolder.classList.remove("d-none");
        } catch (err) {}

        try {
          typHolder.innerHTML = typsHTML;
        } catch (err) {}
      }
    });
  };
  const displaySubTyp1 = (dept, typ, index) => {
    getSubTyp1(dept, typ).then((subtyps) => {
      if (subtyps.length > 0) {
        let subTypsHTML = "";
        subtyps.map((cat) => {
          subTypsHTML += `
      `;
        });
        let subTypHolder = "";
        subTypHolder = document.getElementById("fillSubTyps" + index);
        try {
          subTypHolder.classList.remove("d-none");
        } catch (err) {}

        subTypHolder.innerHTML = subTypsHTML;
      }
    });
  };
};
// ********************* END BIND FULL HEADER 2 DATA ********************* //

// ********************* START BIND SLIDER 1 DATA ********************* //
const bindSliders1 = () => {
  let dataQty = "";
  let dataSource = "";
  let dataCategoty = "";

  try {
    dataQty = document
      .getElementById("products-slider-1")
      .getAttribute("slider1ProductQty");
  } catch (err) {}
  if (!dataQty) dataQty = 4;
  try {
    dataSource = document
      .getElementById("products-slider-1")
      .getAttribute("slider1DataSource");
  } catch (err) {}
  if (!dataSource) dataSource = "random";

  if (!dataSource) dataSource = "";
  if (dataSource && dataSource == "") {
  } else if (dataSource && dataSource.toLocaleLowerCase() == "categories") {
    try {
      dataCategoty = document
        .getElementById("products-slider-1")
        .getAttribute("slider1DataCategory");
    } catch (err) {}
    getHomePageProducts(dataCategoty, dataQty).then((products) => {
      displayHomeProducts(products);
    });
  } else {
    if (dataSource && dataSource != "") {
      getHomePageProducts(dataSource, dataQty).then((products) => {
        displayHomeProducts(products);
      });
    }
  }

  const displayHomeProducts = (products) => {
    let prods = "";
    let i = 0;
    if (products && products.length > 0) {
    } else {
      products = [];
    }
    try {
      products.map((prod, index) => {
        i++;

        if (i == 1) {
          prods += `<div class="carousel-item ${index == 0 ? "active" : ""} ">`;
          prods += `<div class="row">
`;
        }

        prods += `         
      
      <div class="col-lg-3 col-md-3 col-sm-6 col-6">

                <a href="##" class="text-decoration-none text-center d-block p-2 shadow-sm mx-auto">
                  <img
                    src=${prod.image}
                    class="img-fluid products-slider1-thumb mx-auto d-block my-2"
                  />
                  <strong class="text-uppercase text-dark d-block font-weight-bold">
                    ${prod.name}
                  </strong>
                  <p class="text-dark my-2">
                  </p>
                  <b class="text-uppercase text-danger d-block my-2 font-weight-bold">
                   $ ${prod.price && prod.price != null ? prod.price : 0}
                  </b>
                </a>
            </div>


      `;

        if (i == 4) {
          prods += `</div>`;
          prods += `</div>`;
        }
        if (i == 4) i = 0;
      });

      document.getElementById("slider1-prods-container").innerHTML =
        prods.toString();
    } catch (err) {
      document.getElementById("slider1-prods-container").innerHTML =
        "No Products Available";
    }
  };
};

// ********************* END BIND SLIDER 1 DATA ********************* //

// ********************* START BIND SLIDER 2 DATA ********************* //
const bindSliders2 = () => {
  let dataQty = "";
  let dataSource = "";
  let dataCategoty = "";

  try {
    dataQty = document
      .getElementById("products-slider-2")
      .getAttribute("slider2ProductQty");
  } catch (err) {}
  if (!dataQty) dataQty = 12;

  try {
    dataSource = document
      .getElementById("products-slider-2")
      .getAttribute("slider2DataSource");
  } catch (err) {}
  if (!dataSource) dataSource = "random";

  if (!dataSource) dataSource = "";
  if (dataSource && dataSource == "") {
  } else if (dataSource && dataSource.toLocaleLowerCase() == "categories") {
    try {
      dataCategoty = document
        .getElementById("products-slider-2")
        .getAttribute("slider2DataCategory");
    } catch (err) {}
    getHomePageProducts(dataCategoty, dataQty).then((products) => {
      displayHomeProducts(products);
    });
  } else {
    if (dataSource && dataSource != "") {
      getHomePageProducts(dataSource, dataQty).then((products) => {
        displayHomeProducts(products);
      });
    }
  }

  const displayHomeProducts = (products) => {
    let prods = "";
    let i = 0;
    if (products && products.length > 0) {
    } else {
      products = [];
    }
    try {
      products.map((prod, index) => {
        i++;

        if (i == 1) {
          prods += `<div class="carousel-item ${index == 0 ? "active" : ""} ">`;
          prods += `<div class="row">`;
        }

        prods += `         
            <div class="col-lg-2 col-md-2 col-sm-4 col-4">
              
                <a href="##" class="text-decoration-none text-center d-block p-2 shadow-sm mx-auto">
                  <img
                    src=${prod.image}
                    class="img-fluid products-slider2-thumb mx-auto d-block my-2"
                  />
                  <strong class="text-uppercase text-dark d-block font-weight-bold">
                    ${prod.name}
                  </strong>
                  <p class="text-dark my-2">
                  </p>
                  <b class="text-uppercase text-danger d-block my-2 font-weight-bold">
                   $ ${prod.price && prod.price != null ? prod.price : 0}
                  </b>
                </a>
            </div>

      `;
        if (i == 6) {
          prods += `</div>`;
          prods += `</div>`;
        }
        if (i == 6) i = 0;
      });

      document.getElementById("slider2-prods-container").innerHTML =
        prods.toString();
    } catch (err) {
      document.getElementById("slider2-prods-container").innerHTML =
        "No Products Available";
    }
  };
};

// ********************* END BIND SLIDER 2 DATA ********************* //

// ******************** START BIND NAV DATA******************* //
const bindNav1 = () => {
  try {
    let deptsCount = 0;

    deptsCount = document.getElementById("dynamic-links").getAttribute("depts");
    if (!deptsCount || deptsCount == "") deptsCount = 10;
    document.getElementById(
      "dynamic-links"
    ).innerHTML = `<div class="spinner-grow text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>`;

    getDepts(deptsCount).then((depts) => {
      if (!depts || depts == "") {
        depts = [];
      }

      let deptsHTML = "";
      if (depts && depts.length > 0) {
        depts.map((dept, index) => {
          deptsHTML += `<li class="f-header2-nav-li nav-item">
          <a class="f-header2-dept" href=${base_url}/c/${dept.URL}>
            ${dept.DEPT}
          </a>
          
          <span id=arrowHolder-${index}>

          </span>
          <ul class="f-header2-dropmenu dropdown-menu collapse d-none" id=fillTyps${index}>
          </ul>
        </li>`;
          document.getElementById("dynamic-links").innerHTML =
            deptsHTML.toString();
          controlDropdownToggle(dept, index);
          displayTyps(dept, index);
        });
      } else {
        document.getElementById("dynamic-links").innerHTML = "";
      }
    });

    // let a = JSON.parse(componets)[0];
    // a = a.toHTML();
  } catch (err) {}

  const controlDropdownToggle = (dept, index) => {
    getTyps(dept.DEPT).then((typs) => {
      if (typs.length > 0) {
        let letCurrnetDept = document.getElementById("arrowHolder-" + index);

        let letCurrnetDeptUL = document.getElementById("dropdown" + index);
        try {
          letCurrnetDeptUL.classList.remove("d-none");
        } catch (err) {}
        try {
          letCurrnetDept.innerHTML = `                    
              <button
                  class="d-lg-none border-0 p-0 m-0 bg-transparent f-header2-btndrop"
                  type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseExample8" aria-expanded="false"
                  aria-controls="collapseExample8">
                  <i class="f-header-2-adicons fa fa-angle-down"></i>
              </button>
`;
        } catch (err) {}
      } else {
      }
    });
  };

  const displayTyps = (dept, index) => {
    getTyps(dept.DEPT).then((typs) => {
      if (typs.length > 0) {
        let typsHTML = "";
        typs.map((cat, index) => {
          displaySubTyp1(dept.DEPT, cat.TYP, index);

          typsHTML += `
            <li class="f-header2-drop-li">
                <a class="f-header2-droplinks dropdown-item" href=${base_url}/c/${cat.URL}>${cat.TYP}</a>
                  <button
                      class="d-lg-none border-0 p-0 m-0 bg-transparent f-header2-btndrop"
                      type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseExample8" aria-expanded="false"
                      aria-controls="collapseExample8">
                      <i class="f-header-2-adicons fa fa-angle-down"></i>
                  </button>
                <ul class="f-header2-submenu dropdown-submenu collapse list-unstyled d-none" id=fillSubTyps${index}>
                </ul> 
            </li>
      `;
        });
        let typHolder = "";
        typHolder = document.getElementById("fillTyps" + index);
        try {
          typHolder.classList.remove("d-none");
        } catch (err) {}

        try {
          typHolder.innerHTML = typsHTML;
        } catch (err) {}
      }
    });
  };
  const displaySubTyp1 = (dept, typ, index) => {
    getSubTyp1(dept, typ).then((subtyps) => {
      if (subtyps.length > 0) {
        let subTypsHTML = "";
        subtyps.map((cat) => {
          subTypsHTML += `
            <li class="f-header2-drop-li">
                <a class="f-header2-sublinks" href=${base_url}/c/${cat.URL}>${cat.SUBTYP_1}</a>
            </li>
      `;
        });
        let subTypHolder = "";
        subTypHolder = document.getElementById("fillSubTyps" + index);
        try {
          subTypHolder.classList.remove("d-none");
        } catch (err) {}

        subTypHolder.innerHTML = subTypsHTML;
      }
    });
  };
};
// ********************* END BIND NAV DATA ********************* //

// ********************* START BIND PRODUCTS GRID 1 ********************* //

const bindProdsGrid1 = () => {
  let dataQty = "";
  let dataSource = "";
  let dataCategoty = "";

  try {
    dataQty = document
      .getElementById("products-grid-1")
      .getAttribute("prodGrid1QTY");
  } catch (err) {}
  if (!dataQty) dataQty = 8;
  try {
    dataSource = document
      .getElementById("products-grid-1")
      .getAttribute("prodsGrid1DSource");
  } catch (err) {}
  if (!dataSource) dataSource = "random";
  if (dataSource && dataSource == "") {
  } else if (dataSource && dataSource.toLocaleLowerCase() == "categories") {
    try {
      dataCategoty = document
        .getElementById("products-grid-1")
        .getAttribute("prodGrid1dataCategory");
    } catch (err) {}
    getHomePageProducts(dataCategoty, dataQty).then((products) => {
      displayHomeProducts(products);
    });
  } else {
    if (dataSource && dataSource != "") {
      getHomePageProducts(dataSource, dataQty).then((products) => {
        displayHomeProducts(products);
      });
    }
  }

  const displayHomeProducts = (products) => {
    let prods = "";
    let i = 0;
    if (products && products.length > 0) {
    } else {
      products = [];
    }
    try {
      products.map((prod, index) => {
        prods += `         
      
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12 prodgrid1-grid position-relative">
                    <div class="prodgrid1-btn mb-lg-4">
                    <img src=${
                      prod.image
                    } class="img-fluid w-100" alt="tweed blazer">
                    <span class="prodgrid1-grid-span d-inline-block">
                      <a href="##"><i class="prodgrid1-grid-span-a-i fa fa-expand-alt"></i></a>
                      <a href="##"><i class="prodgrid1-grid-span-a-i fa fa-shopping-bag"></i></a>
                    </span>
                    </div>
                    <p class="prodgrid1-grid-p">${prod.name}</p>
                    <div class="d-flex justify-content-center">
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                    </div>
                    <strong class="prodgrid1-grid-strong text-center d-block">
                   $ ${prod.price && prod.price != null ? prod.price : 0}
                    
                    </strong>
                  </div>

      `;
      });

      document.getElementById("prodsGrid1Container").innerHTML =
        prods.toString();
    } catch (err) {
      document.getElementById("prodsGrid1Container").innerHTML =
        "No Products Available";
    }
  };
};

// ********************* END BIND PRODUCTS GRID 1 ********************* //

// ********************* START BIND PRODUCTS GRID 2 ********************* //

const bindProdsGrid2 = () => {
  let dataQty = "";
  let dataSource = "";
  let dataCategoty = "";

  try {
    dataQty = document
      .getElementById("products-grid-2")
      .getAttribute("prodGrid2QTY");
  } catch (err) {}
  if (!dataQty || dataQty == "") dataQty = 6;
  try {
    dataSource = document
      .getElementById("products-grid-2")
      .getAttribute("prodsgrid2dsource");
  } catch (err) {}

  if (!dataSource) dataSource = "random";
  if (dataSource && dataSource == "") {
  } else if (dataSource && dataSource.toLocaleLowerCase() == "categories") {
    try {
      dataCategoty = document
        .getElementById("products-grid-2")
        .getAttribute("prodGrid2dataCategory");
    } catch (err) {}
    getHomePageProducts(dataCategoty, dataQty).then((products) => {
      displayHomeProducts(products);
    });
  } else {
    if (dataSource && dataSource != "") {
      getHomePageProducts(dataSource, dataQty).then((products) => {
        displayHomeProducts(products);
      });
    }
  }

  const displayHomeProducts = (products) => {
    let prods = "";
    let i = 0;
    if (products && products.length > 0) {
    } else {
      products = [];
    }
    try {
      products.map((prod, index) => {
        prods += `         
      
          <div class="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
          
            <div class="media">
              <img src=${prod.image}
                class="f-trends-img mr-3 img-fluid" alt="Chain-bucket-bag">
              <div class="media-body">
                <h5 class="f-trends-h5 mt-0">${prod.name}</h5>
                <div class="d-flex">
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                </div>
                <strong class="f-trends-price">
                   $ ${prod.price && prod.price != null ? prod.price : 0}
                </strong>
              </div>
            </div>
          </div>

      `;
      });

      document.getElementById("prodsGrid2Container").innerHTML =
        prods.toString();
    } catch (err) {
      document.getElementById("prodsGrid2Container").innerHTML =
        "No Products Available";
    }
  };
};

// ********************* END BIND PRODUCTS GRID 2 ********************* //

// ********************* START BIND FULL FOOTER 3 DATA ********************* //
const bindFullFooter1 = () => {
  let noCats = 5;
  try {
    noCats = document
      .getElementById("full-footer-1")
      .getAttribute("footer1noCats");
  } catch (err) {}
  if (!noCats || noCats == "") noCats = 5;

  try {
    getDepts(noCats).then((depts) => {
      if (!depts || depts == "") {
        depts = [];
      }

      let deptsHTML = "";

      if (depts && depts.length > 0) {
        depts.map((dept, index) => {
          deptsHTML += `
          <a class="text-light text-capitalize d-block text-decoration-none mb-2" href=${base_url}/c/${dept.URL}>
            ${dept.DEPT}
          </a>
`;
          document.getElementById("footer1-categories").innerHTML =
            deptsHTML.toString();
        });
      } else {
        document.getElementById("footer1-categories").innerHTML = "";
      }
    });
  } catch (err) {}
};
// ********************* END BIND FULL FOOTER 3 DATA ********************* //

// ********************* START BIND FULL FOOTER 3 DATA ********************* //
const bindFullFooter3 = () => {
  let noCats = 5;
  try {
    noCats = document
      .getElementById("full-footer-3")
      .getAttribute("footer3noCats");
  } catch (err) {}
  if (!noCats || noCats == "") noCats = 5;

  try {
    getDepts(noCats).then((depts) => {
      if (!depts || depts == "") {
        depts = [];
      }

      let deptsHTML = "";

      if (depts && depts.length > 0) {
        depts.map((dept, index) => {
          deptsHTML += `
          <a class="f-footer3-links" href=${base_url}/c/${dept.URL}>
            ${dept.DEPT}
          </a>
`;
          document.getElementById("footer3-categories").innerHTML =
            deptsHTML.toString();
        });
      } else {
        document.getElementById("footer3-categories").innerHTML = "";
      }
    });
  } catch (err) {}
};
// ********************* END BIND FULL FOOTER 3 DATA ********************* //

// ********************* START BIND FULL FOOTER Default DATA ********************* //
const bindFullFooterDefault = () => {
  let noCats = 5;
  try {
    noCats = document
      .getElementById("full-footer-default")
      .getAttribute("footerDefaultnoCats");
  } catch (err) {}
  if (!noCats || noCats == "") noCats = 3;

  try {
    getDepts(noCats).then((depts) => {
      if (!depts || depts == "") {
        depts = [];
      }

      let deptsHTML = "";

      if (depts && depts.length > 0) {
        depts.map((dept, index) => {
          deptsHTML += `
          <a class="default-footer-links" href=${base_url}/c/${dept.URL}>
            ${dept.DEPT}
          </a>
`;
          try {
            document.getElementById("footerDefault-categories").innerHTML =
              deptsHTML.toString();
          } catch (err) {}
        });
      } else {
        document.getElementById("footerDefault-categories").innerHTML = "";
      }
    });
  } catch (err) {}
};
// ********************* END BIND FULL FOOTER Default DATA ********************* //
