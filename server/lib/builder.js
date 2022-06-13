const getsiteURLs = () => {
  let siteUrls = {};

  let origin = window.location.origin;
  let path = window.location.pathname;
  let nodeExpressURL = "";
  try {
    // path = path.replaceAll("/builder/", "");

    path = path.split("/builder/").join("");
  } catch (err) {}

  try {
    //path = path.replaceAll("/builder", "");
    path = path.split("/builder").join("");
  } catch (err) {}

  try {
    //path = path.replaceAll("/builder", "");
    path = path.split("/home/").join("");
  } catch (err) {}

  try {
    //path = path.replaceAll("/builder", "");
    path = path.split("home/").join("");
  } catch (err) {}

  try {
    //path = path.replaceAll("/builder", "");
    path = path.split("/home").join("");
  } catch (err) {}

  try {
    //path = path.replaceAll("/builder", "");
    path = path.split("home").join("");
  } catch (err) {}

  try {
    if (path.endsWith("/")) {
    } else {
      path = path + "/";
    }
  } catch (err) {}

  let appURL = origin + path;

  let currentURL = origin + path;

  console.log("origin is");

  console.log(origin);

  let baseURL = window.location.origin;
  //let baseURL = "http://localhost";

  try {
    baseURL.replace(/\/$/, "");
  } catch (err) {}

  try {
    //path = path.replaceAll("/builder", "");
    currentURL = currentURL.split("widget/index.html/").join("");
  } catch (err) {}

  try {
    //path = path.replaceAll("/builder", "");
    currentURL = currentURL.split("info/index.html/").join("");
  } catch (err) {}

  console.log("currentURL is : ", currentURL);

  if (
    currentURL.startsWith("http://localhost") ||
    currentURL.startsWith("http://localhost:5500") ||
    currentURL.startsWith("http://localhost:5501") ||
    currentURL.startsWith("http://127.0.0.1:5501") ||
    currentURL.startsWith("http://192.168.0.101")
  ) {
    nodeExpressURL = "http://localhost:9000";
  } else {
    nodeExpressURL = baseURL + "/server";
  }
  console.log("nodeExpressURL", nodeExpressURL);

  siteUrls.nodeExpressURL = nodeExpressURL;

  return siteUrls;
};

let siteUrls = getsiteURLs();

console.log("test node url");
console.log(siteUrls.nodeExpressURL);
const nodeExpressURL = siteUrls.nodeExpressURL;
const getpage = async function (page, isWidget) {
  let pageContent = {};

  try {
    const response = await axios(
      nodeExpressURL + `/api/content/load?page=${page}&&isWidget=${isWidget}`
    );
    pageContent = response.data;

    if (!pageContent || pageContent == "") pageContent = {};
  } catch (err) {}

  return pageContent;
};

const getHeaderFooterCss = async function (page, isWidget) {
  let pageContent = {};

  axios(
    nodeExpressURL + `/api/content/load?page=${page}&&isWidget=${isWidget}`
  ).then((response) => {
    pageContent = response.data;

    if (!pageContent || pageContent == "") pageContent = {};
    let pagecss = pageContent["mycustom-css"];

    try {
      let styles = pagecss.toString();

      if (page == "home") {
        let cssFile = document.createElement("link");
        cssFile.rel = "stylesheet";
        cssFile.href = "/builder-css/main.css"; // or path for file {themes('/styles/mobile.css')}
        document.head.appendChild(cssFile); // append css to head element
      } else {
        let cssFile = document.createElement("link");
        cssFile.rel = "stylesheet";
        cssFile.href = "/builder-css/page.css"; // or path for file {themes('/styles/mobile.css')}
        document.head.appendChild(cssFile); // append css to head element
      }
    } catch (err) {}
  });
};

const appendCss = async function (page, isWidget) {
  let pageContent = {};

  try {
    const response = await axios(
      nodeExpressURL + `/api/content/load?page=${page}&&isWidget=${isWidget}`
    );
    pageContent = response.data;

    if (!pageContent || pageContent == "") pageContent = {};
  } catch (err) {}

  let pagecss = pageContent["mycustom-css"];
  let styles = "";
  try {
    styles = pagecss.toString();
  } catch (err) {}

  //let css = document.createElement("style");
  // css.type = "text/css";

  // css.appendChild(document.createTextNode(styles));

  // document.getElementsByTagName("head")[0].appendChild(css);

  if (page == "home") {
    let cssFile = document.createElement("link");
    cssFile.rel = "stylesheet";
    cssFile.href = "/builder-css/main.css"; // or path for file {themes('/styles/mobile.css')}
    document.head.appendChild(cssFile); // append css to head element
  } else {
    let cssFile = document.createElement("link");
    cssFile.rel = "stylesheet";
    cssFile.href = "/builder-css/page.css"; // or path for file {themes('/styles/mobile.css')}
    document.head.appendChild(cssFile); // append css to head element
  }

  let metas = {};
  try {
    metas = await getPageMetasData(page);
  } catch (err) {}

  if (!metas.title || metas.title == "undefined") {
    metas.title = "";
  }
  if (!metas.description || metas.description == "undefined") {
    metas.description = "";
  }
  if (!metas.keywords || metas.keywords == "undefined") {
    metas.keywords = "";
  }

  try {
    document.title = metas.title;
  } catch (err) {}

  try {
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", metas.description);
  } catch (err) {}

  try {
    document
      .querySelector('meta[name="keywords"]')
      .setAttribute("content", metas.keywords);
  } catch (err) {}
};

const GetPage = async function (page, isWidget, pageContainer, iscategory) {
  let pageContent = {};
  if (!pageContainer) pageContainer = "root";
  try {
    const response = await axios(
      nodeExpressURL + `/api/content/load?page=${page}&&isWidget=${isWidget}`
    );
    pageContent = response.data;
    if (!pageContent || pageContent == "") pageContent = {};
  } catch (err) {}
  let pageHTML = pageContent["mycustom-html"];
  if (!pageHTML) pageHTML = "";
  try {
    document.getElementById(pageContainer).innerHTML = pageHTML;
  } catch (err) {}
};

const GetWidget = async function (page, isWidget, widgetArea) {
  let pageContent = {};
  if (!widgetArea) widgetArea = "root";
  try {
    const response = await axios(
      nodeExpressURL + `/api/content/load?page=${page}&&isWidget=${isWidget}`
    );
    pageContent = response.data;
    if (!pageContent || pageContent == "") pageContent = {};
  } catch (err) {}
  let pageHTML = pageContent["mycustom-html"];
  if (!pageHTML) pageHTML = "";

  document.getElementById(widgetArea).innerHTML = pageHTML;
};

const GetHeader = () => {
  getpage("home", "no").then((content) => {
    let pageHTMLString = content["mycustom-html"];
    let pageHtml = new DOMParser().parseFromString(pageHTMLString, "text/html");
    let headerHTML = pageHtml.getElementsByTagName("header")[0];
    if (!headerHTML) headerHTML = "";
    document.getElementById("header").append(headerHTML);
  });
};

const GetFooter = () => {
  getpage("home", "no").then((content) => {
    let pageHTMLString = content["mycustom-html"];
    let pageHtml = new DOMParser().parseFromString(pageHTMLString, "text/html");
    let footerHTML = pageHtml.getElementsByTagName("footer")[0];
    if (!footerHTML) footerHTML = "";
    document.getElementById("footer").append(footerHTML);
  });
};

const GetCss = async function (page, iswidget) {
  let pageContent = {};
  try {
    const response = await axios(
      nodeExpressURL + `/api/content/load?page=${page}&&isWidget=${iswidget}`
    );
    pageContent = response.data;

    if (!pageContent || pageContent == "") pageContent = {};
  } catch (err) {}

  let pagecss = pageContent["mycustom-css"];

  let styles = "";
  try {
    styles = pagecss.toString();
  } catch (err) {}

  // let css = document.createElement("style");
  // css.type = "text/css";

  // css.appendChild(document.createTextNode(styles));

  // document.getElementsByTagName("head")[0].appendChild(css);
  try {
    let cssFile = document.createElement("link");
    cssFile.rel = "stylesheet";
    cssFile.href = "/builder-css/page.css"; // or path for file {themes('/styles/mobile.css')}
    document.head.appendChild(cssFile); // append css to head element
  } catch (err) {}

  let metas = {};
  try {
    metas = await getPageMetasData(page);
  } catch (err) {}

  if (!metas.title || metas.title == "undefined") {
    metas.title = "";
  }
  if (!metas.description || metas.description == "undefined") {
    metas.description = "";
  }
  if (!metas.keywords || metas.keywords == "undefined") {
    metas.keywords = "";
  }

  try {
    document.title = metas.title;
  } catch (err) {}

  try {
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", metas.description);
  } catch (err) {}

  try {
    document
      .querySelector('meta[name="keywords"]')
      .setAttribute("content", metas.keywords);
  } catch (err) {}

  return "";
};

const updateCss = async (file, css) => {
  let actionResponse = "";
  let payload = css;
  payload = payload.toString();

  try {
    const config = { headers: { "Content-Type": "text/plain" } };

    const response = await axios.post(
      nodeExpressURL + `/api/content/saveCss?file=${file}`,
      payload,
      config
    );
    actionResponse = response.data;

    if (!actionResponse || actionResponse == "") actionResponse = "";
  } catch (err) {}
};

const getDepts = async (limit) => {
  let depts = [];

  try {
    const response = await axios(
      nodeExpressURL + `/api/taxonomy/getDepts?limit=${limit}`
    );
    depts = response.data;
    if (!depts || depts == "") depts = [];
  } catch (err) {}

  return depts;
};

const getTyps = async (dept) => {
  let typs = [];

  try {
    const response = await axios(
      nodeExpressURL + `/api/taxonomy/getTyps?dept=${dept}`
    );
    typs = response.data;

    if (!typs || typs == "") typs = [];
  } catch (err) {}

  return typs;
};

const getSubTyp1 = async (dept, typ) => {
  let subTyp1 = [];

  try {
    const response = await axios(
      nodeExpressURL + `/api/taxonomy/getSubTyp1?dept=${dept}&typ=${typ}`
    );

    subTyp1 = response.data;

    if (!subTyp1 || subTyp1 == "") subTyp1 = [];
  } catch (err) {}

  return subTyp1;
};

const getHomePageProducts = async (attr, limit) => {
  let products = [];

  try {
    const response = await axios(
      nodeExpressURL +
        `/api/products/getHomePageprods?attr=${attr}&&limit=${limit}`
    );
    products = response.data;

    if (!products || products == "") products = [];
  } catch (err) {}
  return products;
};

const displayWidget = async function (widgetName, widgetArea) {
  try {
    GetCss(widgetName, "yes").then(() => {
      setTimeout(() => {
        GetWidget(widgetName, "yes", widgetArea);
      }, 2000);
    });
  } catch (err) {
    setTimeout(() => {
      document.getElementById(widgetArea).innerHTML = "";
    }, 1000);
  }

  setTimeout(() => {
    bindFrontend("home", "no");
  }, 2500);
};

const displayIndexPage = async function (pageContainer) {
  try {
    appendCss("home", "no").then(() => {
      setTimeout(() => {
        GetPage("home", "no", pageContainer);
        bindFrontend("home", "no");
      }, 2000);
    });
  } catch (err) {
    setTimeout(() => {
      document.getElementById(pageContainer).innerHTML = "";
    }, 1000);
  }
};

const displayHomePage = async function (pageContainer) {
  try {
    appendCss("home", "no").then(() => {
      setTimeout(() => {
        GetPage("home", "no", pageContainer);
        bindFrontend("home", "no");
      }, 2000);
    });
  } catch (err) {
    setTimeout(() => {
      document.getElementById(pageContainer).innerHTML = "";
    }, 1000);
  }
};

const displayPage = async function (pageName, pageContainer) {
  getHeaderFooterCss("home", "no").then(() => {
    try {
      setTimeout(() => {
        GetHeader();
      }, 2000);
    } catch (err) {}
    let isPage = false;
    try {
      GetCss(pageName, "no").then(() => {
        isPage = true;
        setTimeout(() => {
          GetPage(pageName, "no", pageContainer);
        }, 2000);
      });
    } catch (err) {}
    if (!isPage) {
      document.getElementById(pageContainer).innerHTML = "";
    }
    try {
      setTimeout(() => {
        GetFooter();
      }, 2000);
    } catch (err) {}
  });

  try {
    setTimeout(() => {
      bindFrontend("home", "no");
    }, 2500);
  } catch (err) {}
};

const displayInfoPage = async function (pageName, pageContainer) {
  let isPage = false;
  try {
    GetCss(pageName, "no").then(() => {
      isPage = true;
      setTimeout(() => {
        GetPage(pageName, "no", pageContainer);
      }, 2000);
    });
  } catch (err) {}
  if (!isPage) {
    document.getElementById(pageContainer).innerHTML = "";
  }

  try {
    setTimeout(() => {
      bindFrontend("home", "no");
    }, 2500);
  } catch (err) {}
};

const displayCategoryBanner = async function (category, pageContainer) {
  let isPage = false;
  try {
    GetCss(category, "banner").then(() => {
      isPage = true;

      setTimeout(() => {
        GetPage(category, "banner", pageContainer);
        try {
          setTimeout(() => {
            timeout;
            document.getElementById(pageContainer).style.display = "block";
          }, 1000);
        } catch (err) {}
      }, 0);
    });
  } catch (err) {}
  if (!isPage) {
    try {
      document.getElementById(pageContainer).innerHTML = "";
    } catch (err) {}
  }

  try {
    setTimeout(() => {
      bindFrontend("home", "no");
    }, 2500);
  } catch (err) {}
};

const displayHeader = async function () {
  getHeaderFooterCss("home", "no").then(() => {
    try {
      setTimeout(() => {
        document.getElementById("header").style.display = "none";

        GetHeader();
      }, 2000);
    } catch (err) {}
  });

  try {
    setTimeout(() => {
      bindFrontend("home", "no");
      document.getElementById("header").style.display = "block";
    }, 2500);
  } catch (err) {}
};

const displayFooter = async function (pageName, pageContainer) {
  getHeaderFooterCss("home", "no").then(() => {
    try {
      setTimeout(() => {
        document.getElementById("footer").style.display = "none";

        setTimeout(() => {
          GetFooter();
        }, 2000);
      }, 0);
    } catch (err) {}
  });

  try {
    setTimeout(() => {
      bindFrontend("home", "no");
      document.getElementById("footer").style.display = "block";
    }, 2500);
  } catch (err) {}
};

const getPages = async () => {
  let pagesData = [];
  try {
    const response = await axios(nodeExpressURL + `/api/pages/getAllPages`);
    pagesData = response.data;
    if (!pagesData || pagesData == "") pagesData = [];
  } catch (err) {}
  return pagesData;
};

const getOtherPages = async () => {
  let pagesData = [];
  try {
    const response = await axios(nodeExpressURL + `/api/pages/getOtherPages`);
    pagesData = response.data;
    if (!pagesData || pagesData == "") pagesData = [];
  } catch (err) {}
  return pagesData;
};

const getCategoryPages = async () => {
  let pagesData = [];
  try {
    const response = await axios(
      nodeExpressURL + `/api/pages/getCategoryPages`
    );
    pagesData = response.data;
    if (!pagesData || pagesData == "") pagesData = [];
  } catch (err) {}
  return pagesData;
};

const getProductPages = async () => {
  let pagesData = [];
  try {
    const response = await axios(nodeExpressURL + `/api/pages/getProductPages`);
    pagesData = response.data;
    if (!pagesData || pagesData == "") pagesData = [];
  } catch (err) {}
  return pagesData;
};

const getPageMetasData = async (page) => {
  let pageMeta = {};
  try {
    const response = await axios(
      nodeExpressURL + `/api/pages/pageMetas?page=${page}`
    );
    pageMeta = response.data;

    if (!pageMeta || pageMeta == "") pageMeta = {};
  } catch (err) {}
  return pageMeta;
};

const UpdatePageSeoData = async (pageData) => {
  let actionResponse = "";
  let payload = pageData;

  try {
    const response = await axios.post(
      nodeExpressURL + `/api/pages/updatePageSeo`,
      payload
    );
    actionResponse = response.data;

    if (!actionResponse || actionResponse == "") actionResponse = "";
  } catch (err) {}

  return actionResponse;
};

const savePageSeo = (pageData) => {
  let response = "";
  UpdatePageSeoData(pageData)
    .then((data) => {
      response = data;
      document.getElementById("actionMsg").classList.remove("d-block");
      try {
        document.getElementById("actionMsg").classList.remove("d-none");
      } catch (err) {}
      document.getElementById("actionMsg").innerHTML = response.msg;
      setTimeout(() => {
        document.getElementById("actionMsg").classList.add("d-none");
      }, 2000);
      setTimeout(() => {}, 2000);
    })
    .catch((err) => console.log(err));
};

const PageHandle = () => {
  let pageData = {
    name: "",
    slung: "",
    title: "",
    description: "",
    keywords: "",
    focus_keyword: "",
    seo_page_heading: "",
    seo_page_text: "",
    pageType: "",
  };
  let pageSlug = "";
  let pageType = "";

  let pageName = "";
  try {
    pageSlug = document.getElementById("pageSlug").value.trim();
  } catch (err) {}
  try {
    pageType = document.getElementById("pageType").value.trim();
  } catch (err) {}

  try {
    pageName = pageSlug.split("-").join(" ");
  } catch (err) {}

  try {
    pageName = pageName.split("/").join(" ");
  } catch (err) {}

  if (!pageName) pageName = "";

  try {
    // replace all multiple spaces to single space
    pageName = pageName.replace(/\s\s+/g, " ");
  } catch (err) {}

  try {
    // replace all spaces to -
    pageName = pageName.replace(/ /g, "-");
  } catch (err) {}

  pageData.name = pageName;

  pageData.slung = pageName;
  pageData.pageType = pageType.toLowerCase();
  pageData.slung = pageData.slung.toLowerCase();
  let response = "";

  if (
    !pageType ||
    pageType == "" ||
    !pageName ||
    pageName == "" ||
    pageName == " "
  ) {
    alert("Page Name or Page Type is not Valid");
  } else {
    newPage(pageData)
      .then((data) => {
        response = data;
        document.getElementById("actionMsg2").classList.remove("d-block");
        try {
          document.getElementById("actionMsg2").classList.remove("d-none");
        } catch (err) {}
        document.getElementById("actionMsg2").innerHTML = response.msg;
        setTimeout(() => {
          document.getElementById("actionMsg2").classList.add("d-none");
        }, 2000);
        setTimeout(() => {
          document.getElementById("pageSlug").value = "";
          getPages()
            .then((list) => {})
            .catch((err) => console.log(err));
        }, 2000);
      })
      .catch((err) => console.log(err));
  }
};

const newPage = async (pageData) => {
  let actionResponse = "";
  let payload = pageData;

  try {
    const response = await axios.post(
      nodeExpressURL + `/api/pages/createPage`,
      payload
    );
    actionResponse = response.data;

    if (!actionResponse || actionResponse == "") actionResponse = "";
  } catch (err) {}

  return actionResponse;
};
