import React, { useState, useEffect } from "react";

import { getpage } from "../../API";
import { bindFrontend } from "../../plugins/frontend/fontend";

export default function Home() {
  const [pageContent, setPageContent] = useState({});
  async function getPage() {
    // fetch data from a url endpoint
    getpage("home")
      .then((data) => {
        setTimeout(() => {
          setPageContent(data);
        }, 500);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPage();
  }, []);

  document.getElementById("root").innerHTML = pageContent["mycustom-html"];
  try {
    document.getElementById("simpletext").innerHTML = "data updated";
  } catch (err) {}
  var style = document.createElement("style");
  let css = pageContent["mycustom-css"];

  if (!css) {
    css = "";
  }

  style.innerHTML = css.toString();
  if (css != "") document.head.appendChild(style);

  let mainComp = document.getElementsByClassName("main-comp");

  for (let i = 0; i < mainComp.length; i++) {
    try {
      mainComp[i].style.border = "none";
    } catch (err) {}
    try {
      mainComp[i].style.padding = 0 + "px";
    } catch (err) {}

    try {
      mainComp[i].style.margin = 0 + "px";
    } catch (err) {}
  }

  let innerComp = document.getElementsByClassName("inner-comp");

  for (let i = 0; i < innerComp.length; i++) {
    try {
      innerComp[i].style.border = "none";
    } catch (err) {}
  }

  let innerComp2 = document.getElementsByClassName("inner-comp2");

  for (let i = 0; i < innerComp2.length; i++) {
    try {
      innerComp2[i].style.border = "none";
    } catch (err) {}
  }

  bindFrontend(pageContent, "mycustom");

  return "";
}
