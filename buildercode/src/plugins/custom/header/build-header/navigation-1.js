import { buildHeader } from "../../../../components/custom/categories";
import { getDepts, getTyps, getSubTyp1 } from "../../../../API";

export default function navigation1(editor) {
  let editModeOff = `data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-hoverable="false"`;
  let editModeOn = `data-gjs-selectable="true" data-gjs-highlightable="true" data-gjs-hoverable="true"`;

  let dropModeOn = `data-gjs-droppable="true"`;
  let dropModeOff = `data-gjs-droppable="false"`;

  editor.BlockManager.add("navigation-1", {
    label: `
<i class="bi bi-menu-down fs-4 p-2" title="Nagation 1"></i>    
    <div class="gjs-block-label ">Navigation 1
    </div>
`,
    category: buildHeader,
    type: "navigation-1",
    open: false,

    content: `                 

          <div ${editModeOff} ${dropModeOff} id="navigation-1" data-gjs-name="Navigation 1" data-gjs-type="navigation-1" data-gjs-id="navigation-1" class="col-lg-12 col-md-12 col-sm-12 col-12 navi">
                        <div ${editModeOff} ${dropModeOff} class="col-12 f-header2-mob">
                            <nav ${editModeOff} ${dropModeOff} class="navbar navbar-expand-lg navbar-light f-header2-mainnav">
                                <div ${editModeOff} ${dropModeOff} class="container-fluid p-0">
                                <button ${editModeOff} ${dropModeOff} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-bars text-dark"></i>
      </button>
                                  <div ${editModeOff} ${dropModeOff} class="collapse navbar-collapse" id="navbarNavDropdown">

                                  
                                    <ul ${dropModeOff} class="f-header2-navmenu navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center inner-comp"
                                     data-gjs-name="Main Menu " data-gjs-type="main-menu-2">

                                    
                                       <div id="dynamic-links" class="justify-space-between flex-direction-row">
                                         <li data-gjs-type="main-menu-2">Click here to Build Dynamic Menu</li>     
                                     
                                          <!-------- start It does nothing but catch css --->
                                              <li class="f-header2-nav-li nav-item d-none">
                                              <a class="f-header2-dept " href="">
                                              
                                              </a>

                                              <span id=arrowHolder-1>

                                              </span>
                                              <ul class="f-header2-dropmenu dropdown-menu collapse d-none" id=fillTyps1>
                                              <li class="f-header2-drop-li">
                                              <a class="f-header2-droplinks dropdown-item" href="##">Typ 1</a>
                                              <button
                                              class="d-lg-none border-0 p-0 m-0 bg-transparent f-header2-btndrop"
                                              type="button" data-bs-toggle="collapse"
                                              data-bs-target="#collapseExample8" aria-expanded="false"
                                              aria-controls="collapseExample8">
                                              <i class="f-header-2-adicons fa fa-angle-down"></i>
                                              </button>
                                              </li>    
                                              </ul>
                                              </li>
                                          <!-------- end It does nothing but catch css --->

                                         </div>
                                      <div id="infoLinks" class="d-lg-flex d-md-block justify-space-between flex-direction-row"></div>






                                    
                                        </ul>
                                  </div>
                                </div>
                              </nav>
                        </div>
                    </div>

<style>
            .f-header2-mainnav {
                height: 46px;
            }

            .f-header2-navmenu {
                display: flex;
                justify-content: space-around;
                width: 100%;
            }

            .f-header2-dept {
                color: #000 !important;
                font-size: 0.70rem !important;
                width: fit-content;
                line-height: 46px;
                font-weight: bold;
                display: block;
                padding: .5rem 1rem;
                color: #0d6efd;
                text-decoration: none;
                transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;

            }

            .f-header-2-adicons {
                font-size: 14px;
                color: #C9C9C9;
            }

            .f-header2-droplinks {
                width: 100%;
                font-size: 16px;
                color: #fff;
                text-transform: capitalize;
                display: block;
                font-weight: 400;
                padding: .5rem 1rem;
                line-height: 25px;
                text-align: center;
            }

            .f-header2-submenu {

                position: absolute;
                top: 0px;
                background: #000;
                min-width: 160px;
                border-radius: 5px;
                border: 1px solid #000;
                left: 100%;
                padding: 0px;
            }

            .f-header2-sublinks {
                width: 100%;
                font-size: 16px;
                color: #fff;
                text-transform: capitalize;
                display: block;
                font-weight: 400;
                padding: .5rem 1rem;
                line-height: 25px;
                text-align: center;
            }
                #dynamic-links {
                    display: flex;
                  }
                  
            @media(min-width:992px) {
                .f-header2-nav-li:hover .f-header2-dept {
                    color: #771114;
                    transition: ease-in .4s;
                }

                .f-header2-drop-li:hover .f-header2-droplinks {
                    background-color: #771114;
                    transition: ease-in .4s;
                }

                .f-header2-drop-li:hover .f-header2-submenu {
                    display: block;
                    padding: 0px;
                }

                .f-header2-drop-li {
                    position: relative;
                }

                .f-header2-drop-li:hover .f-header2-sublinks {
                    width: 100%;
                    font-size: 15px;
                    color: #fff;
                    text-transform: capitalize;
                    display: block;
                    font-weight: 400;
                    padding: .5rem 0;
                    line-height: 25px;
                    text-decoration: none;
                    background: #000;
                }

                .f-header2-dropmenu {
                    display: none;
                }

                .f-header2-submenu {
                    display: none;
                    list-style-type: none;
                    padding: .5rem 1rem;
                    line-height: 25px;
                    ;
                }

                .f-header2-drop-li .f-header2-submenu li:hover .f-header2-sublinks {
                    background-color: #771114;
                }

                .f-header2-nav-li:hover .f-header2-dropmenu {
                    display: block;
                    position: absolute;
                    top: 40px;
                    background: #000;
                    min-width: 160px;
                    padding: .5rem 0;
                    border-radius: 5px;
                    color: #fff;
                }

                .f-header2-innerbtn {
                    display: none;
                }

                .f-header2-bottom-head {
                    background: #f8f9fa;
                }

            }

            @media(max-width:991px) {
                .f-header2-navmenu {
                    width: 100%;
                    display: block;
                    padding: 15px;
                    background: #000;
                }

                .f-header2-nav-li {
                    background: #000;
                    border-bottom: 1px solid #000;
                    padding: 0 15px;
                    position: relative;
                }

                .f-header-2-adicons {
                    float: right;
                }

                .f-header2-dropmenu {
                    position: relative;
                    top: 0;
                    min-width: 100%;
                    background: none;
                }

                .f-header2-drop-li {
                    border-bottom: 0px;
                    position: relative;
                }

                .f-header2-btndropdown-submenu {
                    position: relative;
                    top: 0;
                    min-width: 100%;
                    left: 0;
                }

                .f-header2-sub-li {
                    border-bottom: 0px;
                }

                .f-header2-btndrop {
                    position: absolute;
                    right: 15px;
                    top: 26px;
                    color: #fff;
                }

                .f-header2-toplogo {
                    display: none;
                }

                .f-header2-usercart {
                    line-height: 0px;
                }

                .f-header2-submenu {
                    position: relative;
                    left: 0;
                }

                .f-header2-innerbtn {
                    float: left;
                }

                .f-header2-dept {
                    color: #fff !important;
                    font-size: 0.95rem !important;
                }

                .f-header2-droplinks {
                    font-size: 0.95rem !important;
                    text-align: left;
                }

                .f-header2-mob {
                    top: 50px;
                    position: relative;
                }

                .f-header2-sublinks {
                    font-size: 0.95rem;
                    text-align: left;
                }
            }

            @media(max-width:775px) {
                .f-header2-sbar {
                    line-height: 0px;
                }

                .f-header2-innerhead {
                    height: auto;
                }

                .f-header2-bottom-head {
                    background: #fff !important;
                }

                .f-header2-mainnav {
                    height: auto;
                }
            }

            @media(max-width:767px) {
                .f-header2-mob {
                    top: auto;
                }
                #dynamic-links {
                    display: block;
                  }
            }
<style>


`,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("main-menu-2", {
    model: defaultModel.extend(
      {
        init() {
          this.listenTo(this, "change:noOfCategories", this.getnoOfCategories);
          this.listenTo(this, "change:noOfLinks", this.getInfoLinks);
        },

        getnoOfCategories() {
          let catLimit = 8;
          let deptRecs = [];
          catLimit = this.get("traits")
            .where({
              name: "noOfCategories",
            })[0]
            .get("value");
          if (!catLimit || catLimit == "") catLimit = 8;
          const wrapper = editor.getWrapper();
          const el = wrapper.find("#dynamic-links")[0];
          el.addAttributes({ depts: catLimit });
          getCatDepts(catLimit)
            .then((depts) => {
              getMenuViews(depts, editor);
            })
            .catch((err) => {});
        },

        getInfoLinks(e) {
          let countLinks = 0;

          countLinks = this.get("traits")
            .where({
              name: "noOfLinks",
            })[0]
            .get("value");
          if (!countLinks || countLinks < 1) {
            countLinks = 0;
          }
          let canvasDoc = editor.Canvas.getDocument();
          let LinksGoups = "";
          let linksCounter = 0;

          for (let i = 0; i < countLinks; i++) {
            linksCounter++;
            LinksGoups += `
            <li id="li-info-link${linksCounter}" data-gjs-type="default" draggable="true" data-highlightable="1" class="f-header2-nav-li nav-item">
            <a id="a-info-link${linksCounter}" data-gjs-type="link" draggable="true" data-highlightable="1" href="#" class="f-header2-dept nav-link  gjs-hovered">
                          Link
                        </a></li>
         `;
          }

          const wrapper = editor.getWrapper();
          const el = wrapper.find("#infoLinks")[0];
          // el.append(LinksGoups);
          el.components(LinksGoups);

          editor.TraitManager.getTraitsViewer().render();
        },
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          traits: [
            {
              label: "Categories",
              name: "noOfCategories",
              id: "noOfCategories",
              type: "select",
              options: [
                {
                  id: "0",
                  name: "None",
                },

                {
                  id: "1",
                  name: "1",
                },
                {
                  id: "2",
                  name: "2",
                },
                {
                  id: "3",
                  name: "3",
                },
                {
                  id: "4",
                  name: "4",
                },
                {
                  id: "5",
                  name: "5",
                },
                {
                  id: "6",
                  name: "6",
                },
                {
                  id: "7",
                  name: "7",
                },
                {
                  id: "8",
                  name: "8",
                },
                {
                  id: "9",
                  name: "9",
                },
                {
                  id: "10",
                  name: "10",
                },
              ],
              changeProp: 1,
            },
            {
              label: "Links",
              name: "noOfLinks",
              id: "noOfLinks",
              type: "select",
              options: [
                {
                  id: "0",
                  name: "none",
                },
                {
                  id: "1",
                  name: "1",
                },
                {
                  id: "2",
                  name: "2",
                },
                {
                  id: "3",
                  name: "3",
                },
                {
                  id: "4",
                  name: "4",
                },
              ],
              changeProp: 1,
            },
          ],
        }),
      },
      {
        isComponent: function (el) {
          if (el.tagName == "header") {
            return {
              type: "full-header-2",
            };
          }
        },
      }
    ),
    view: defaultModel.view,
  });
}

async function getCatDepts(limit) {
  let depts = [];
  if (!limit || limit == "") limit = 8;
  // fetch data from a url endpoint
  await getDepts(limit)
    .then((data) => {
      if (!data || data == "") {
        data = [];
      }
      depts = [...data];
    })
    .catch((err) => console.log(err));
  return depts;
}

const getMenuViews = (depts, editor) => {
  let ab = "";
  if (depts && depts.length > 0) {
    depts.map((dept, index) => {
      controlDropdownToggle(editor, dept, index);
      displayTyps(editor, dept, index);

      ab += `<li class="f-header2-nav-li nav-item">
          <a class="f-header2-dept " href=${dept.URL}>
            ${dept.DEPT}
          </a>
          
          <span id=arrowHolder-${index}>
          </span>
          
          <ul class="f-header2-dropmenu dropdown-menu collapse d-none" id=fillTyps${index}>
            <li class="f-header2-drop-li">
              <a class="f-header2-droplinks dropdown-item" href="##">Typ 1</a>
              <button
                  class="d-lg-none border-0 p-0 m-0 bg-transparent f-header2-btndrop"
                  type="button" data-bs-toggle="collapse"
                  data-bs-target="#fillTyps${index}" aria-expanded="false"
                  aria-controls="fillTyps${index}">
                  <i class="f-header-2-adicons fa fa-angle-down"></i>
              </button>
            </li>    
          </ul>
        </li>`;
    });
  } else {
    ab = "<li> &nbsp;	&nbsp;	&nbsp;	</li>";
  }
  const wrapper = editor.getWrapper();
  const el = wrapper.find("#dynamic-links")[0];
  el.components(ab);

  return ab;
};

const controlDropdownToggle = (editor, dept, index) => {
  getTyps(dept.DEPT).then((typs) => {
    if (typs.length > 0) {
      const wrapper = editor.getWrapper();
      const el = wrapper.find("#arrowHolder-" + index)[0];
      el.components(`
            <button
                class="d-lg-none border-0 p-0 m-0 bg-transparent f-header2-btndrop"
                type="button" data-bs-toggle="collapse"
                data-bs-target="#fillTyps${index}" aria-expanded="false"
                aria-controls="fillTyps${index}">
                <i class="f-header-2-adicons fa fa-angle-down"></i>
            </button>
                  `);
    } else {
    }
  });
};

const displayTyps = (editor, dept, index) => {
  getTyps(dept.DEPT).then((typs) => {
    if (typs.length > 0) {
      let typsHTML = "";
      typs.map((cat, index) => {
        displaySubTyp1(editor, dept.DEPT, cat.TYP, index);

        typsHTML += ` 
            <li class="f-header2-drop-li">
                <a class="f-header2-droplinks dropdown-item" href=${cat.URL}>${cat.TYP}</a>
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

      const wrapper = editor.getWrapper();
      const el = wrapper.find("#fillTyps" + index)[0];
      try {
        el.removeClass("d-none");
      } catch (err) {}

      // el.append(LinksGoups);
      el.components(typsHTML);
    }
  });
};

const displaySubTyp1 = (editor, dept, typ, index) => {
  getSubTyp1(dept, typ).then((subTyps) => {
    if (subTyps.length > 0) {
      let subtypsHTML = "";
      subTyps.map((cat) => {
        subtypsHTML += ` 
            <li class="f-header2-drop-li">
                <a class="f-header2-sublinks" href=${cat.URL}>${cat.SUBTYP_1}</a>
            </li>
      `;
      });

      const wrapper = editor.getWrapper();
      const el = wrapper.find("#fillSubTyps" + index)[0];
      try {
        el.removeClass("d-none");
      } catch (err) {}
      el.components(subtypsHTML);
    }
  });
};
