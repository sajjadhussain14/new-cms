import { getDepts, getTyps, getSubTyp1, getHomePageProducts } from "../../API";

export const bindFrontend = (pageContent, name) => {
  let componets = pageContent[name + "-components"];

  try {
    let componentsJson = JSON.parse(componets);

    if (componentsJson && componentsJson.length > 0) {
      componentsJson.map((comp) => {
        if (comp.name && comp.name.toLowerCase() == "full header 1") {
          bindFullHeader1();
        } else if (comp.name && comp.name.toLowerCase() == "full header 2") {
          bindFullHeader2();
        } else if (comp.name && comp.name.toLowerCase() == "navigation 1") {
          bindNav1();
        } else if (
          comp.name &&
          comp.name.toLowerCase() == "Products Slider 1"
        ) {
          bindSliders(comp.name);
        } else if (
          comp.name &&
          comp.name.toLowerCase() == "Products Slider 2"
        ) {
          bindSliders(comp.name);
        } else {
        }
      });
    } else {
    }
  } catch (err) {}
};

// ********************* START BIND FULL HEADER 1 DATA ********************* //
export const bindFullHeader1 = () => {
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
          <a class="nav-link" href=${dept.URL}>
            ${dept.DEPT}
          </a>
          
          <span id=arrowHolder-${index}>

          </span>
          <div class="dropdown collapse" id=dropdown${index}>
            <a href="">Sub link 1</a>
            <a href="">Sub link 2</a>
            <a href="">Sub link 3</a>
            <a href="">Sub link 4</a>
            <a href="">Sub link 5</a>
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
                    d-lg-none
                    border-0
                    d-md-block d-sm-block d-block
                    p-0
                    m-0
                    bg-transparent
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
        <a  href=${cat.URL}>
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
export const bindFullHeader2 = () => {
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
          <a class="f-header2-dept" href=${dept.URL}>
            ${dept.DEPT}
          </a>
          
          <span id=arrowHolder-${index}>

          </span>
          <ul class="f-header2-dropmenu dropdown-menu collapse" id=fillTyps${index}>
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
              <i class="f-header-2-adicons fas fa-angle-down"></i>
              </button>`;
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
            <li>
                <a class="f-header2-droplinks dropdown-item" href=${cat.URL}>${cat.TYP}</a>
              
                <button
                    class="d-lg-none border-0 p-0 m-0 bg-transparent f-header2-btndrop"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseExample8" aria-expanded="false"
                    aria-controls="collapseExample8">
                    <i class="f-header-2-adicons fas fa-angle-down"></i>
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
            <li >
                <a class="f-header2-sublinks" href=${cat.URL}>${cat.SUBTYP_1}</a>
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

// ********************* START BIND SLIDERS DATA ********************* //
export const bindSliders = (slidername) => {
  let dataQty = "";
  let dataSource = "";
  let dataCategoty = "";

  try {
    dataQty = document.getElementById(slidername).getAttribute("productQty");
  } catch (err) {}

  try {
    dataSource = document.getElementById(slidername).getAttribute("dataSource");
  } catch (err) {}
  if (!dataSource) dataSource = "";
  if (dataSource && dataSource == "") {
  } else if (dataSource && dataSource.toLocaleLowerCase() == "categories") {
    try {
      dataCategoty = document
        .getElementById("products-slider-1")
        .getAttribute("dataCategory");
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
          prods += `<div class="carousel-item ${
            index == 0 ? "active" : ""
          } row mx-auto">`;
        }
        prods += `         
      
            <div class="col-lg-2 col-md-3 col-sm-4 col-4 float-start">
              <div class="inner">
                <a href="##" class="text-decoration-none text-center">
                  <img
                    src=${prod.image}
                    class="img-fluid"
                  />
                  <strong class="text-uppercase text-dark d-block font-weight-bold">
                    ${prod.name}
                  </strong>
                  <p class="text-dark my-2">
                  </p>
                  <b class="text-uppercase text-danger d-block my-2 font-weight-bold">
                    ${prod.price}
                  </b>
                </a>
              </div>
            </div>

      `;
        if (i == 6) {
          prods += `</div>`;
        }
        if (i == 6) i = 0;
      });

      document.getElementById("prodsContainer").innerHTML = prods.toString();
    } catch (err) {
      document.getElementById("prodsContainer").innerHTML =
        "No Products Available";
    }
  };
};

// ********************* END BIND SLIDERS DATA ********************* //

// ******************** START BIND NAV DATA******************* //
export const bindNav1 = () => {
  try {
    let deptsCount = 0;

    deptsCount = document.getElementById("dynamic-links").getAttribute("depts");

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
          <a class="nav-link" href=${dept.URL}>
            ${dept.DEPT}
          </a>
          
          <span id=arrowHolder-${index}>

          </span>
          <div class="dropdown collapse" id=dropdown${index}>
            <a href="">Sub link 1</a>
            <a href="">Sub link 2</a>
            <a href="">Sub link 3</a>
            <a href="">Sub link 4</a>
            <a href="">Sub link 5</a>
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
                    d-lg-none
                    border-0
                    d-md-block d-sm-block d-block
                    p-0
                    m-0
                    bg-transparent
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
        <a  href=${cat.URL}>
${cat.TYP}        </a>
      `;
        });
        let typHolder = "";
        typHolder = document.getElementById("dropdown" + index);
        typHolder.innerHTML = typsHTML;
      }
    });
  };
};
// ********************* END BIND NAV DATA ********************* //
