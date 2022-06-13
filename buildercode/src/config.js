let origin = window.location.origin;
let path = window.location.pathname;
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

export let appURL = origin + path;

if (appURL.startsWith("http://localhost:5500")) {
  appURL = "http://192.168.0.101/";
} else {
}

export let currentURL = origin + path;

console.log("origin is");

console.log(origin);

let baseURL = window.location.origin;
//let baseURL = "http://localhost";

try {
  baseURL.replace(/\/$/, "");
} catch (err) {}

export let nodeExpressURL =
  "http://celerantcms-com.server-icumulusdataserver9-vps.vps.ezhostingserver.com/server";
if (
  baseURL.startsWith(
    "http://celerantcms-com.server-icumulusdataserver9-vps.vps.ezhostingserver.com"
  )
) {
  nodeExpressURL =
    "http://celerantcms-com.server-icumulusdataserver9-vps.vps.ezhostingserver.com/server";
} else {
  nodeExpressURL = "http://localhost:9000";
}

console.log("currentURL is : ", currentURL);

export let infoURL = "";
export let widgetURL = "";
export let bannerURL = "";
export let baseName = "";

if (
  currentURL.startsWith("http://localhost") ||
  currentURL.startsWith("http://192.168.1.143:666") ||
  currentURL.startsWith("http://192.168.0.101")
) {
  nodeExpressURL = "http://localhost:9000";

  infoURL = "info/index.cfm?info=";
  widgetURL = "widget/index.cfm?info=";
  bannerURL = "banner/index.cfm?info=";
} else {
  nodeExpressURL =
    "http://celerantcms-com.server-icumulusdataserver9-vps.vps.ezhostingserver.com/server";

  infoURL = "info/";
  widgetURL = "widget/";
  bannerURL = "banner/";
}

console.log("nodeExpressURL", nodeExpressURL);

const base_url = window.location.origin;
if (base_url.startsWith("http://localhost:5500")) {
  baseName = process.env.REACT_APP_BASE_NAME_TEMP;
} else {
  baseName = process.env.REACT_APP_BASE_NAME;
}
