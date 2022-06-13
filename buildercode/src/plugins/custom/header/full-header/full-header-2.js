import { fullHeader } from "../../../../components/custom/categories";
import { getDepts, getTyps, getSubTyp1 } from "../../../../API";
const base_url = window.location.origin;

export default function fullHeader1(editor) {
  editor.BlockManager.add("full-header-2", {
    label: `       <i class="bi bi-card-heading fs-4  p-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Full Header Default"></i>
    
    <div class="gjs-block-label ">Header 2
    </div>
`,
    category: fullHeader,
    type: "full-header-2",
    open: false,

    content: ` 
      <header is-header='yes' id="full-header-2" class="f-header2 main-comp "
      data-gjs-name="Full Header 2" data-gjs-type="full-header-2"
      data-gjs-id="full-header-2" id="full-header-2"
      >
            <div id="headerTop" class="mb-lg-4 f-header2-topbar">
                <div class="container-fluid p-0">
                    <div class="row m-0">
                        <div class="col-lg-4 col-md-6 col-sm-6 col-6 one text-left">
                            <p class="f-header2-toptext">Monday - Friday 10AM - 8PM, Saturday 10AM - 6PM</p>
                        </div>
                        <div class="col-lg-4 col-md-0 col-sm-0 col-0 f-header2-toplogo text-center">
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-6 f-header2-phone text-right">
                            <a href="tel:9186054875" class="f-header2-toplink"><i class="fa fa-phone mx-2"></i>918-605-4875</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="innerHeader" class="f-header2-innerhead">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12 col-12 text-sm-center text-lg-left text-md-left text-center f-header2-sbar">
                            <form class="f-header2-innerform advanced-search mx-sm-auto mx-auto mb-sm-2" name="searchForm" action="/search" method="post">
                                    <input class="f-header2-input" type="text" name="searchKeyword" id="searchKeyword" value="" placeholder="Search here">
                                    <button class="f-header2-btn btn-search"><i class="f-header2-sicon fa fa-search"></i></button></button>
                            </form>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
                            <a href="/">
                                <img src="/images/logo.png" class="f-header2-logo img-fluid w-100" alt="MainLogo">
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12 col-12 f-header2-usercart">
                            <button class="f-header2-innerbtn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fa fa-bars text-dark"></i>
                              </button>
                            <a href="/login.cfm" class="f-header2-user"> <i class="f-header2-ucicon fa fa-user"></i>  Log In</a>
                            <a href="/cart.cfm" class="f-header2-bag">
                            <i class="f-header2-ucicon fa fa-shopping-cart"></i><span class="default-header-cartvalue f-header2-cvalue">(0)</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="headerBottom" class="f-header2-bottom-head">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 f-header2-mob">
                            <nav class="navbar navbar-expand-lg navbar-light f-header2-mainnav">
                                <div class="container-fluid p-0">
                                  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                                  
                                    <ul class="f-header2-navmenu navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center inner-comp"
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
                </div>
            </div>
      </header>
<style>
            .f-header2 {
                font-family: 'Poppins', sans-serif;
                width: 100%;
            }

            .f-header2-topbar {
                background-color: #302C2C;
                height: 37px;
            }

            .f-header2-toptext {
                color: #fff;
                font-family: 'Livvic', sans-serif;
                font-size: 13px;
                text-transform: capitalize;
                font-weight: bold;
                line-height: 37px;
            }

            .f-header2-topimg {
                height: 50px;
                width: 200px;
                object-fit: contain;
            }

            .f-header2-phone {
                text-align: right;
                font-weight: bold;
                line-height: 37px;
            }

            .f-header2-toplink {
                color: #fff !important;
                text-decoration: none;
                font-size:13px;
            }

            .f-header2-innerhead {
                height: 120px;
            }

            .f-header2-sbar {
               display:flex;
               justify-content:center;
               align-items:center;
            }

            .f-header2-innerform {
                position: relative;
                width: 100%;
                line-height: 120px;
                max-width:300px;
            }

            .f-header2-input {
                color: #1A1818;
                height: 36px;
                font-family: 'Montserrat', sans-serif;
                font-size: 13px;
                padding-left: 15px;
                background: transparent;
                width: 100%;
                border: solid 1px #AEAEAE;
                border-radius: 30px;
                max-width: 100%;
            }

            .f-header2-btn {
                border: none;
                background: transparent;
                height: 36px;
                width: 36px;
                position: absolute;
                right: 3px;
                top: 0;
                box-: none;
                line-height:36px
            }

            .f-header2-sicon {
                color: #AFAFAF;
            }

            .f-header2-logo {
                width: 100%;
                max-width: 200px;
                max-height: 100px;
                object-fit: contain;
            }

            .f-header2-usercart {
                text-align: right;
                line-height: 120px;
            }

            .f-header2-user {
                color: #1A1818;
                font-size: 13px;
                text-transform: capitalize;
                text-decoration: none;
                font-weight: bold;
            }
            .f-header2-user:hover{color:#000;}

            .f-header2-ucicon {
                color: #1A1818;
                font-size: 25px;
                margin-right: 6px;
            }

            .f-header2-bag {
                position: relative;
                margin-left: 20px;
                color: #1A1818;
                font-size: 12px;
                text-transform: capitalize;
                text-decoration: none;
                font-weight: bold;
            }

            .f-header2-cvalue {
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                font-family: 'Livvic', sans-serif;
                color: #1A1818;
                font-size: 12px;
                top: -22px;
                width: 14px;
                height: 14px;
                line-height: 11px;
                text-align: center;
            }

            .f-header2-mainnav {
                height: 46px;
            }

            .f-header2-navmenu {
                display: flex;
                justify-content: space-around;
                width: 100%;
                color:#fff;
            }

            .f-header2-dept {
                color: #fff !important;
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
                color: #444;
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
                    background: #4E082D;
                    transition: ease-in .4s;
                    color:#fff;
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
                    background: #302C2C;
                }

            }

            @media(max-width:991px) {
                .f-header2-navmenu {
                    width: 100%;
                    display: block!important;
                    padding: 15px;
                    background: #fff;
                }
                #dynamic-links{display:block!important;}
                .f-header2-nav-li {
                    background: #fff;
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
                    color: #000 !important;
                    font-size: 0.95rem !important;
                    padding:0px;
                }
               
                .f-header2-droplinks {
                    font-size: 0.95rem !important;
                    text-align: left;
                    color:#000!important;
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
                    display: block !important;;
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
          <a class="f-header2-dept " href=${base_url}/c/${dept.URL}>
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
                  data-bs-target=#fillTyps${index} aria-expanded="false"
                  aria-controls=fillTyps${index}>
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
                <a class="f-header2-droplinks dropdown-item" href=${base_url}/c/${cat.URL}>${cat.TYP}</a>
                  <button
                      class="d-lg-none border-0 p-0 m-0 bg-transparent f-header2-btndrop"
                      type="button" data-bs-toggle="collapse"
                      data-bs-target="#fillSubTyps${index}" aria-expanded="false"
                      aria-controls="fillSubTyps${index}">
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
                <a class="f-header2-sublinks" href=${base_url}/c/${cat.URL}>${cat.SUBTYP_1}</a>
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
