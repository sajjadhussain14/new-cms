import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import gjsstyleBG from "grapesjs-style-bg";
import gjsPreserWebpage from "grapesjs-preset-webpage";
import gjsCustomCode from "grapesjs-custom-code";
import "grapick/dist/grapick.min.css";
import "./css/style.css";

import { mainBannersStyle1 } from "./components/custom/home-page-main-banners/main-banners-style-1";

import { section } from "./components/custom/basic-elements/section";
import { colDiv } from "./components/custom/basic-elements/column";
import { rowDiv } from "./components/custom/basic-elements/row";

import { twoMiniBannersStyle1 } from "./components/custom/mini-banners/two-mini-banners-style-1";
import { threeMiniBannersStyle1 } from "./components/custom/mini-banners/three-mini-banners-style-1";
import { threeMiniBannersStyle2 } from "./components/custom/mini-banners/three-mini-banners-style-2";
import { fourMiniBannersStyle1 } from "./components/custom/mini-banners/four-mini-banners-style-1";

import { ProdSliderStyle1 } from "./components/custom/products-sliders/products-slider-style-1";
import { ProdSliderStyle2 } from "./components/custom/products-sliders/products-slider-style-2";
import { brandsSliderStyle1 } from "./components/custom/brands-sliders/brands-slider-style-1";

import { headerStyle1 } from "./components/custom/headers/header-style-1";
import { headerLogo } from "./components/custom/headers/header-logo";
import { headerNavigation } from "./components/custom/headers/header-navigation";
import { headerForm } from "./components/custom/headers/header-form";
import { headerLinks } from "./components/custom/headers/header-links";
import { headerPlaceholder } from "./components/custom/headers/header-placeholder";
import { headerTopMessage } from "./components/custom/headers/header-top-message";

import { footerStyle1 } from "./components/custom/footers/footers-style-1";
import { footerPlaceholder } from "./components/custom/footers/footer-placeholder";
import { footerCelerant } from "./components/custom/footers/footer-celerant";
import { footerSocial } from "./components/custom/footers/footer-form";
import { footerLinks } from "./components/custom/footers/footer-links";
import { footerLogo } from "./components/custom/footers/footer-logo";
import { footerPayment } from "./components/custom/footers/footer-payment";
import { footerCopyright } from "./components/custom/footers/footer-copyright";

import {
  headerCat,
  footerCat,
  celerantCat,
  basicElementsCat,
} from "./components/custom/categories";

function App() {
  const [editor, setEditor] = useState(null);

  let blockManager = "";

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      styleManager: { clearProperties: 1 },
      storageManager: false,
      storageManager: {
        type: "remote",
        stepsBeforeSave: 1,
        contentTypeJson: true,

        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,

        headers: {},
        id: "mycustom-",
        urlStore: `http://celerantcms-com.server-icumulusdataserver9-vps.vps.ezhostingserver.com/testsite/server/save`,
        urlLoad: `http://celerantcms-com.server-icumulusdataserver9-vps.vps.ezhostingserver.com/testsite/server/load`,
        params: {},
      },

      plugins: [gjsPreserWebpage],
      pluginsOpts: {
        gjsstyleBG: {},
        gjsPreserWebpage: {
          // options
        },
        gjsCustomCode: {
          // options
        },
      },

      canvas: {
        styles: [
          "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css",
          "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
          "./css/style.css",
        ],
        scripts: [
          "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
          "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
        ],
      },
    });
    blockManager = editor.BlockManager;

    // START CUSTOM CATEGORY BLOCK
    mainBannersStyle1(blockManager, celerantCat);

    section(blockManager, basicElementsCat);

    colDiv(blockManager, basicElementsCat);
    rowDiv(blockManager, basicElementsCat);

    twoMiniBannersStyle1(blockManager, celerantCat);
    threeMiniBannersStyle1(blockManager, celerantCat);
    threeMiniBannersStyle2(blockManager, celerantCat);
    fourMiniBannersStyle1(blockManager, celerantCat);

    ProdSliderStyle1(blockManager, celerantCat);
    ProdSliderStyle2(blockManager, celerantCat);
    brandsSliderStyle1(blockManager, celerantCat);

    headerPlaceholder(blockManager, headerCat);
    headerLogo(blockManager, headerCat);
    headerForm(blockManager, headerCat);
    headerLinks(blockManager, headerCat);
    headerTopMessage(blockManager, headerCat);
    headerNavigation(blockManager, headerCat);
    headerStyle1(blockManager, headerCat);

    footerPlaceholder(blockManager, footerCat);
    footerCelerant(blockManager, footerCat);
    footerSocial(blockManager, footerCat);
    footerLinks(blockManager, footerCat);
    footerLogo(blockManager, footerCat);
    footerPayment(blockManager, footerCat);
    footerCopyright(blockManager, footerCat);
    footerStyle1(blockManager, footerCat);

    // END CUSTOM CATEGORY BLOCK

    const styleManager = editor.StyleManager;

    // START CONTROLLING DEFAULT CATEGORY BLOCKS
    const block = editor.BlockManager.getAll();
    block.map((block) => {
      if (
        block.attributes.id === "text" ||
        block.attributes.id === "image" ||
        block.attributes.id === "link" ||
        block.attributes.id === "video" ||
        block.attributes.id === "link-block" ||
        block.attributes.id === "map" ||
        block.attributes.id === "text-section" ||
        block.attributes.id === "quote"
      ) {
        block.attributes.category = {
          label: "Basic",
          order: 11,
          open: false,
        };
      }
      if (
        block.attributes.id === "h-navbar" ||
        block.attributes.id === "countdown"
      ) {
        block.attributes.category = {
          label: "Extra",
          order: 12,
          open: false,
        };
      } else if (block.attributes.id === "form") {
        block.attributes.category = {
          label: "Forms",
          order: 13,
          open: false,
        };
      }
    });
    // END CONTROLLING DEFAULT CATEGORY BLOCKS

    // START REMOVING CERTAIN BASIC BLOCKS
    const bm = editor.BlockManager;
    const blocks = bm.getAll();
    const toRemove = blocks.filter(
      (block) => block.get("category") === "Basic"
    );

    toRemove.forEach((block) => {
      if (
        block.get("id") === "column1" ||
        block.get("id") === "column2" ||
        block.get("id") === "column3" ||
        block.get("id") === "column3-7"
      ) {
        bm.remove(block.get("id"));
      } else {
      }
    });

    // END REMOVING CERTAIN BASIC BLOCKS

    // START CUSTOM STEETINGS
    styleManager.addSector("div-only-sector", {
      name: "Setting",
      open: false,
      buildProps: [
        "width",
        "height",
        "float",
        "color",
        "max-width",
        "max-height",
        "min-width",
        "min-height",
        "text-align",
        "items-align",
      ],
      properties: [
        {
          name: "Visibility",
          property: "display",
          type: "radio",
          properties: [
            { value: "inherit", title: "Visiblity" },
            { value: "none", title: "Hidden" },
          ],
        },
      ],
    });
    // END CUSTOM STEETINGS

    // START ADDING DYNAMIC DATA
    styleManager.addSector("dynamic-data", {
      name: "Select Data",
      open: false,
      buildProps: ["categories"],
      properties: [
        {
          name: "select category",
          property: "categories",
          type: "select",
          defaults: "Please select one",
          list: [
            {
              value: "Men",
              name: "Men",
            },
            {
              value: "Kids",
              name: "Kids",
            },
          ],
        },
      ],
    });

    // END ADDING DYNAMIC DATA

    setEditor(editor);
  }, []);

  console.log(editor);
  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
}

export default App;
