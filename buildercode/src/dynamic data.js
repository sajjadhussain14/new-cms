import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import gjsstyleBG from "grapesjs-style-bg";
import gjsPreserWebpage from "grapesjs-preset-webpage";
import gjsCustomCode from "grapesjs-custom-code";
import "grapick/dist/grapick.min.css";

function App() {
  const [editor, setEditor] = useState(null);

  try {
    editor.Commands.add("clear-html", () => editor.DomComponents.clear());
  } catch {}
  let blockManager = "";
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      styleManager: { clearProperties: 1 },

      plugins: [],
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
        ],
        scripts: [
          "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
          "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
        ],
      },
    });
    blockManager = editor.BlockManager;
    const styleManager = editor.StyleManager;

    var panelManager = editor.Panels;

    // get the buttons

    var panelObj = panelManager.getPanel("options");

    //Remove unwanted buttons
    panelObj.get("buttons").remove("canvas-clear");
    panelObj.get("buttons").add("canvas-clear");

    let compData = {
      id: "button",
      label: `div`,
      category: "Celerant Components",
      content: `<div class="container row"> <div>`,
    };

    blockManager.add("div-block", compData);

    compData = {
      id: "button",
      label: `Button`,
      category: "Celerant Components",
      content: `<button type="button" class=" btn-primary">Primary</button>
`,
    };

    blockManager.add("button-block", compData);

    styleManager.addSector("div-only-sector", {
      name: "Setting",
      open: true,
      buildProps: [
        "width",
        "height",
        "float",
        "color",
        "max-width",
        "max-height",
        "categories",
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

    setEditor(editor);
  }, []);

  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
}

export default App;
