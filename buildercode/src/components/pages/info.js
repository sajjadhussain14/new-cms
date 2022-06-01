import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getpage } from "../../API";

export default function Info() {
  const [pageContent, setPageContent] = useState({});
  let { id } = useParams();
  async function getPage(id) {
    // fetch data from a url endpoint
    getpage(id)
      .then((data) => {
        setTimeout(() => {
          setPageContent(data);
        }, 500);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (!id || id == "") {
      return "No Page found";
    } else {
      getPage(id);
    }
  }, []);

  try {
    // let componenets = JSON.parse(pageContent["mycustom-components"]);
    let c = pageContent["mycustom-components"];
    let a = JSON.parse(c)[0];
    a = a.toHTML();
    console.log(a);
  } catch (err) {}

  let pageData = "";
  pageData = pageContent["mycustom-html"];
  if (!pageData || pageData == "")
    pageData = `
  <div class="jumbotron text-center">
  <h1>No Content Created Yet</h1>
</div>
`;
  document.getElementById("root").innerHTML = pageData;
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

  return "";
}
