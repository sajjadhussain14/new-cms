import React, { useState, useEffect } from "react";
import {
  getPages,
  getWidgets,
  getBanners,
  newWidget,
  newBanner,
  newPage,
  uploadImages,
} from "../../../API";
import { allCategories } from "../../../components/custom/categories";
import { appURL, nodeExpressURL } from "../../../config";
export const InitEditor = (
  grapesjs,
  currentPage,
  custPlugins,
  alert,
  isWidget
) => {
  const editor = grapesjs.init({
    container: "#editor",
    assetManager: {
      upload: nodeExpressURL + "/assets",

      uploadName: "files",

      uploadFile: function (e) {
        var files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        var formData = new FormData();
        for (let i in files) {
          formData.append("files", files[i]); //containing all the selected images from local
        }
        uploadImages(formData).then((data) => {
          let imgDirectory = "";
          imgDirectory = nodeExpressURL + "/uploads/";

          // console.log(data);

          for (let i = 0; i < data.length; i++) {
            let currentImage = imgDirectory + data[i].filename;

            editor.AssetManager.add(currentImage);
          }
        });
      },
    },

    styleManager: { clearProperties: 1 },
    storageManager: false,
    storageManager: {
      type: "remote",
      stepsBeforeSave: 1,
      contentTypeJson: true,
      autosave: false,

      storeComponents: true,
      storeStyles: true,
      storeHtml: true,
      storeCss: true,

      headers: {},
      id: "mycustom-",
      urlStore:
        nodeExpressURL +
        `/api/content/save?page=${currentPage}&&isWidget=${isWidget}`,
      urlLoad:
        nodeExpressURL +
        `/api/content/load?page=${currentPage}&&isWidget=${isWidget}`,

      params: {},
      fromElement: true,
      allowScripts: 1,
    },

    plugins: custPlugins,

    canvas: {
      styles: [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        "https://cdn.celerantwebservices.com/plugins/fontawesome/4.5.0/fontawesome.min.css",
        "./css/canvas.css",
      ],
      scripts: [
        "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",

        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
        "https://code.jquery.com/jquery-3.6.0.min.js",
      ],
    },
    // selectorManager: { componentFirst: true },
  });

  editor.on("storage:end:store", function (e) {
    setTimeout(() => {
      alert.success(
        <div style={{ color: "white", fontSize: 11 + "px" }}>
          Content Saved Successfully!
        </div>
      );
    }, 1000);
  });

  editor.on("storage:error", (err) => {});
  // The upload is started
  editor.on("asset:upload:start", () => {});

  // The upload is ended (completed or not)
  editor.on("asset:upload:end", () => {});

  // Error handling
  editor.on("asset:upload:error", (err) => {});

  return editor;
};

export const saveCurrentPage = (editor, currentPage) => {
  // DISPLAy SAVE ICON
  editor.Panels.addButton("options", [
    {
      id: "save-db",
      className: "fa fa-floppy-o",
      command: "save-db",
      attributes: { title: "Publish" },
    },
  ]);

  // RUN SAVE PAGE FUNCTION ON CLICK ON ICON

  editor.Commands.add("save-db", {
    run: function (editor, sender) {
      if (!currentPage || currentPage == "") {
        alert("Please select a Page from Top");
      } else {
        sender && sender.set("active"); // turn off the button
        editor.store();
      }
    },
  });
};

export const pageManager = (editor) => {
  editor.Panels.addButton("options", [
    {
      id: "manage-pages",
      className: "fa fa-file page-manager",
      command: "manage-pages",
      type: "button",

      attributes: {
        title: "Manage Pages",
        "data-bs-toggle": "modal",
        "data-bs-target": "#pagesModal",
      },
    },
  ]);

  editor.Commands.add("manage-pages", {
    run: function (editor, sender) {
      let myModal = document.getElementById("pagesModal");
    },
  });
};

export const widgetManager = (editor) => {
  editor.Panels.addButton("options", [
    {
      id: "manage-widgets",
      className: "fa fa-file-text-o page-manager",
      command: "manage-widgets",
      type: "button",

      attributes: {
        title: "Manage Widgets",
        "data-bs-toggle": "modal",
        "data-bs-target": "#widgetsModal",
      },
    },
  ]);

  editor.Commands.add("manage-widgets", {
    run: function (editor, sender) {
      let myModal = document.getElementById("widgetsModal");
    },
  });
};

export const bannerManager = (editor) => {
  editor.Panels.addButton("options", [
    {
      id: "manage-banners",
      className: "fa fa-image page-manager",
      command: "manage-banners",
      type: "button",

      attributes: {
        title: "Manage Category Banners",
        "data-bs-toggle": "modal",
        "data-bs-target": "#bannersModal",
      },
    },
  ]);

  editor.Commands.add("manage-banners", {
    run: function (editor, sender) {
      let myModal = document.getElementById("bannersModal");
    },
  });
};

export const logOut = (editor) => {
  editor.Panels.addButton("options", [
    {
      id: "log-out",
      className: "fa fa-sign-out page-manager",
      command: "log-out",
      type: "button",

      attributes: {
        title: "Log Out",
      },
    },
  ]);

  editor.Commands.add("log-out", {
    run: function (editor, sender) {
      sessionStorage.clear("loginInfo");
      window.location.reload();
    },
  });
};

export const savePage = (editor, currentPage) => {};

export const PageHandle = (setAllPages) => {
  let pageData = { name: "", slung: "" };
  let pageName = "";
  pageName = document.getElementById("pageName").value.trim();
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

  pageData.slung = pageData.slung.toUpperCase();

  pageData.slung = pageData.slung.toLowerCase();
  let response = "";
  newPage(pageData)
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
      setTimeout(() => {
        document.getElementById("pageName").value = "";
        getPages()
          .then((list) => {
            setAllPages(list);
          })
          .catch((err) => console.log(err));
      }, 2000);
    })
    .catch((err) => console.log(err));
};

export const WidgetHandle = (setAllWidgets) => {
  let widgetData = { name: "", slung: "" };
  let widgetName = "";
  widgetName = document.getElementById("widgetName").value.trim();
  if (!widgetName) widgetName = "";

  try {
    // replace all multiple spaces to single space
    widgetName = widgetName.replace(/\s\s+/g, " ");
  } catch (err) {}

  try {
    // replace all spaces to -
    widgetName = widgetName.replace(/ /g, "-");
  } catch (err) {}
  widgetData.name = widgetName;

  widgetData.slung = widgetName;

  widgetData.slung = widgetData.slung.toUpperCase();

  widgetData.slung = widgetData.slung.toLowerCase();
  let response = "";
  newWidget(widgetData)
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
        document.getElementById("widgetName").value = "";
        getWidgets()
          .then((list) => {
            setAllWidgets(list);
          })
          .catch((err) => console.log(err));
      }, 2000);
    })
    .catch((err) => console.log(err));
};

export const bannerHandle = (setAllBanners) => {
  let bannerData = { name: "", slung: "" };
  let bannerName = "";
  bannerName = document.getElementById("bannerName").value.trim();
  if (!bannerName) bannerName = "";

  try {
    // replace all multiple spaces to single space
    bannerName = bannerName.replace(/\s\s+/g, " ");
  } catch (err) {}

  try {
    // replace all spaces to -
    bannerName = bannerName.replace(/ /g, "-");
  } catch (err) {}
  bannerData.name = bannerName;

  bannerData.slung = bannerName;

  bannerData.slung = bannerData.slung.toUpperCase();

  bannerData.slung = bannerData.slung.toLowerCase();
  let response = "";
  newBanner(bannerData)
    .then((data) => {
      response = data;
      document.getElementById("actionMsg3").classList.remove("d-block");
      try {
        document.getElementById("actionMsg3").classList.remove("d-none");
      } catch (err) {}
      document.getElementById("actionMsg3").innerHTML = response.msg;
      setTimeout(() => {
        document.getElementById("actionMsg3").classList.add("d-none");
      }, 2000);
      setTimeout(() => {
        document.getElementById("bannerName").value = "";
        getBanners()
          .then((list) => {
            setAllBanners(list);
          })
          .catch((err) => console.log(err));
      }, 2000);
    })
    .catch((err) => console.log(err));
};
