import axios from "axios";
import { appURL, nodeExpressURL } from "./config";

export const getpage = async (page) => {
  let pageContent = {};

  try {
    const response = await axios(
      nodeExpressURL + `/api/content/load?page=${page}`
    );
    pageContent = response.data;

    if (!pageContent || pageContent == "") pageContent = {};
  } catch (err) {}

  return pageContent;
};

export const uploadImages = async (formData) => {
  console.log("here my data");
  console.log(formData.get("file-0"));
  let responseData = [];
  let payload = formData;

  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  try {
    const response = await axios.post(
      nodeExpressURL + `/assets`,
      payload,
      config
    );
    responseData = response.data;

    if (!responseData || responseData == "") responseData = [];
  } catch (err) {}

  return responseData;
};

export const newPage = async (pageData) => {
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

  let pModal = document.getElementById("pagesModal");
  //pModal.style.zIndex = 888888;

  let myModal = document.getElementById("builderModal");
  myModal.style.display = "block";
  myModal.style.opacity = 0.75;
  //myModal.style.zIndex = 999999999999999999999999999999999;

  setTimeout(() => {
    myModal = document.getElementById("builderModal");
    myModal.style.display = "none";
    myModal.style.opacity = 0;
    myModal.style.zIndex = 888;

    pModal.style.zIndex = 999999999999999999999999999999999;
    pModal.style.opacity = 1;
  }, 2000);

  return actionResponse;
};

export const newWidget = async (widgetData) => {
  let actionResponse = "";
  let payload = widgetData;

  try {
    const response = await axios.post(
      nodeExpressURL + `/api/widgets/createWidget`,
      payload
    );
    actionResponse = response.data;

    if (!actionResponse || actionResponse == "") actionResponse = "";
  } catch (err) {}

  let pModal = document.getElementById("widgetsModal");
  //pModal.style.zIndex = 888888;

  let myModal = document.getElementById("builderModal");
  myModal.style.display = "block";
  myModal.style.opacity = 0.75;
  //myModal.style.zIndex = 999999999999999999999999999999999;

  setTimeout(() => {
    myModal = document.getElementById("builderModal");
    myModal.style.display = "none";
    myModal.style.opacity = 0;
    myModal.style.zIndex = 888;

    pModal.style.zIndex = 999999999999999999999999999999999;
    pModal.style.opacity = 1;
  }, 2000);

  return actionResponse;
};

export const newBanner = async (bannerData) => {
  let actionResponse = "";
  let payload = bannerData;

  try {
    const response = await axios.post(
      nodeExpressURL + `/api/banners/createBanner`,
      payload
    );
    actionResponse = response.data;

    if (!actionResponse || actionResponse == "") actionResponse = "";
  } catch (err) {}

  let pModal = document.getElementById("BannersModal");
  //pModal.style.zIndex = 888888;

  let myModal = document.getElementById("builderModal");
  myModal.style.display = "block";
  myModal.style.opacity = 0.75;
  //myModal.style.zIndex = 999999999999999999999999999999999;

  setTimeout(() => {
    myModal = document.getElementById("builderModal");
    myModal.style.display = "none";
    myModal.style.opacity = 0;
    myModal.style.zIndex = 888;

    pModal.style.zIndex = 999999999999999999999999999999999;
    pModal.style.opacity = 1;
  }, 2000);

  return actionResponse;
};

export const getPages = async () => {
  let pagesData = [];

  try {
    const response = await axios(nodeExpressURL + `/api/pages/getAllPages`);
    pagesData = response.data;
    if (!pagesData || pagesData == "") pagesData = [];
  } catch (err) {}
  return pagesData;
};

export const getWidgets = async () => {
  let widgetsData = [];

  try {
    const response = await axios(nodeExpressURL + `/api/widgets/getAllWidgets`);
    widgetsData = response.data;
    if (!widgetsData || widgetsData == "") widgetsData = [];
  } catch (err) {}
  return widgetsData;
};

export const getBanners = async () => {
  let bannersData = [];

  try {
    const response = await axios(nodeExpressURL + `/api/banners/getAllBanners`);
    bannersData = response.data;
    if (!bannersData || bannersData == "") bannersData = [];
  } catch (err) {}
  return bannersData;
};

export const getDepts = async (limit) => {
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

export const getTyps = async (dept) => {
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

export const getSubTyp1 = async (dept, typ) => {
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

export const getHomePageProducts = async (attr, limit) => {
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

export const DelPage = async (e, pageName, setAllPages) => {
  let actionResponse = "";

  let payload = pageName;
  let response = {
    status: 200,
    msg: `Page <strong> ${pageName} </strong> Deletion Failed`,
  };
  try {
    showModal();
    response = await axios.post(nodeExpressURL + `/api/pages/deletePage`, {
      name: pageName,
    });

    actionResponse = response.data;

    setTimeout(() => {
      getPages()
        .then((list) => {
          setAllPages(list);
        })
        .catch((err) => console.log(err));

      hideModal();
      //  window.location.reload();
    }, 2000);
  } catch (err) {}
  console.log("deleted response", actionResponse);
  return actionResponse;
};

export const DelWidget = async (e, widgetName, setAllWidgets) => {
  let actionResponse = "";

  let payload = widgetName;
  let response = {
    status: 200,
    msg: `Widget <strong> ${widgetName} </strong> Deletion Failed`,
  };
  try {
    showModal();
    response = await axios.post(nodeExpressURL + `/api/widgets/deleteWidget`, {
      name: widgetName,
    });

    actionResponse = response.data;

    setTimeout(() => {
      getWidgets()
        .then((list) => {
          setAllWidgets(list);
        })
        .catch((err) => console.log(err));

      hideModal();
      //  window.location.reload();
    }, 2000);
  } catch (err) {}
  console.log("deleted response", actionResponse);
  return actionResponse;
};

export const DelBanner = async (e, bannerName, setAllBanners) => {
  let actionResponse = "";

  let payload = bannerName;
  let response = {
    status: 200,
    msg: `Widget <strong> ${bannerName} </strong> Deletion Failed`,
  };
  try {
    showModal();
    response = await axios.post(nodeExpressURL + `/api/banners/deleteBanner`, {
      name: bannerName,
    });

    actionResponse = response.data;

    setTimeout(() => {
      getBanners()
        .then((list) => {
          setAllBanners(list);
        })
        .catch((err) => console.log(err));

      hideModal();
      //  window.location.reload();
    }, 2000);
  } catch (err) {}
  console.log("deleted response", actionResponse);
  return actionResponse;
};

export const showModal = () => {
  let myModal = document.getElementById("builderModal");
  try {
    myModal.style.display = "block";
  } catch (err) {}
  try {
    myModal.style.opacity = 0.75;
  } catch (err) {}
};

export const hideModal = () => {
  let myModal = document.getElementById("builderModal");
  myModal.style.display = "none";
  myModal.style.opacity = 0;
};

export const dataSourceChange = async (ds) => {
  let actionResponse = "";
  let payload = ds;
  let response = {
    status: 200,
    msg: `Data Source <strong> ${ds} </strong> Has Been Set`,
  };
  try {
    /*  response = await axios.post(
      nodeExpressURL + `/api/dataSource/setNew`,
      payload
    );

    actionResponse = response.data;
    */
    alert(
      "Database Selection is disabled by developer. You can only us JSON Files"
    );
  } catch (err) {}
  return actionResponse;
};

export const getCuurentDataSource = async () => {
  let curDataSource = "";

  try {
    const response = await axios(nodeExpressURL + `/api/dataSource/getDs`);
    curDataSource = response.data;

    if (!curDataSource || curDataSource == "") curDataSource = "jsonFiles";
  } catch (err) {}

  return curDataSource;
};

export const testDSConnections = async (ds) => {
  let testResponse = "";

  if (ds == "jsonFiles") {
    testResponse =
      "Congratulations! JASON Files connection is Always Connected.";
  } else if (ds == "mongoDb") {
    try {
      const response = await axios(nodeExpressURL + `/checkMongoConnected`);
      testResponse = response.data;

      if (!testResponse || testResponse == "")
        testResponse = "MongoDb Connection Failed";
    } catch (err) {}
  } else if (ds == "sqlServer") {
    try {
      const response = await axios(
        nodeExpressURL + `/checkSqlServerConnection`
      );
      testResponse = response.data;
      if (!testResponse || testResponse == "")
        testResponse = "SQL Database Connection Failed";
    } catch (err) {}
  }
  return testResponse;
};

export const checkUserLogin = async (credentials) => {
  let actionResponse = "";
  let payload = credentials;

  let response = {};
  try {
    response = await axios.post(nodeExpressURL + `/api/user/login`, payload);
    actionResponse = response.data;
  } catch (err) {
    console.log(err);
  }
  return actionResponse;
};
