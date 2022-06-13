import { fullHeader } from "../../../../components/custom/categories";
import { getDepts, getTyps, getSubTyp1 } from "../../../../API";
const base_url = window.location.origin;

export default function fullHeader1(editor) {
  editor.BlockManager.add("full-header-default", {
    label: `   
    <i class="bi bi-card-heading fs-4  p-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Full Header Default"></i>

    <div class="gjs-block-label ">Header Default
    </div>

`,
    category: fullHeader,
    type: "full-header-default",

    open: false,

    content: ` 


        <header id="headerDefault" class="header-default main-comp"
        data-gjs-name="Full Header Default" data-gjs-type="full-header-default"
      data-gjs-id="full-header-default" id="full-header-default"
      
        >
            <div id="headerTop" class="header-default-Top" data-gjs-name="Change Bg TOP">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 text-left">
                            <p class="header-default-toptext">Monday - Friday 10AM - 8PM, Saturday 10AM - 6PM <a
                                    href="tel:+1231231234 " class="default-header-phone text-decoration-none"><i
                                        class="fa fa-phone"></i>+123-123-1234</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="innerHeader" class="header-default-inner" data-gjs-name="Change Bg Middle">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-12 col-12">
                            <a href="/"><img
                                    src="/images/logo.png"
                                    alt="Main-Logo" class="img-fluid p-3 default-logo"></a>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-8 col-9 d-flex justify-content-center align-items-center">
                            <form
                                class="f-header2-form advanced-search mx-sm-auto mx-auto mb-sm-0 mb-xs-3 position-relative w-100"
                                name="searchForm" action="/search" method="post">
                                <input class="default-header-input" type="text" name="searchKeyword" id="searchKeyword"
                                    value="" placeholder="Search">
                                <button class="default-header-btn btn-search"><i
                                        class="f-header2-sicon fa fa-search"></i></button></button>
                            </form>
                        </div>
                        <div class="col-lg-3 col-md-2 col-sm-3 col-3 d-flex justify-content-center align-items-center">
                            <a href="/login.cfm" class="default-header-usercart-link"><i
                                    class="default-header-usercart fa fa-user"></i>My Account</a>
                            <a href="/cart.cfm" class="default-header-usercart-link position-relative"><i
                                    class="default-header-usercart fa fa-shopping-cart"></i><span
                                    class="default-header-cartvalue">(0)</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="headerBottom" class="header-default-bottom">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 p-0">
                            <nav class="navbar navbar-expand-lg navbar-dark  static-top  p-1 inner-comp"
                                style="position: relative; top: auto;" data-gjs-name="Change Nav BG">
                                <div class="container-fluid p-0">
                                    <button class="navbar-toggler border-0 bg-dark mt-md-3" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
                                        aria-expanded="true" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="navbar-collapse collapse" id="navbarResponsive">
                                        <ul class="default-header-nav navbar-nav mx-auto d-flex justify-content-center align-items-center w-100 inner-comp"
                                            id="boxes" data-gjs-name="Main Menu " data-gjs-type="main-menu-default">
                                    
                                  <div id="dynamic-links" class="justify-space-between flex-direction-row">
           
                                    <li data-gjs-type="main-menu-default" class="default-header-nav-item nav-item default-header-nav-links navlink">
                                    Click here to Build Dynamic Menu
                                    </li>

                                      <!-------- start It does nothing but catch css --->
                                         <li class="default-header-nav-item nav-item d-none">
                                                <a class="default-header-nav-links navlink" href="##">HUNTING</a>
                                                <button
                                                    class="d-lg-none border-0 p-0 m-0 bg-transparent default-header-dropicon"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseExample0" aria-expanded="false"
                                                    aria-controls="collapseExample0">
                                                    <i class="fa fa-angle-down default-header-dicon d-lg-none"></i>
                                                </button>
                                                <div id="collapseExample0"
                                                    class="default-header-dropmenu dropdown-menu">
                                                    <div class="container-fluid">
                                                        <div class="row">
                                                            <div class="col-ag-2 col-md-12 col-12 first">
                                                                <a href="##" class="default-header-sublink">DECOYS</a>
                                                            </div>
                                                            <div class="col-ag-2 col-md-12 col-12 first">
                                                                <a href="##" class="default-header-sublink">FEEDERS</a>
                                                            </div>
                                                            <div class="col-ag-2 col-md-12 col-12 first">
                                                                <a href="##" class="default-header-sublink">GAME
                                                                    CALLS</a>
                                                            </div>
                                                            <div class="col-ag-2 col-md-12 col-12 first">
                                                                <a href="##" class="default-header-sublink">SCENTS</a>
                                                            </div>
                                                            <div class="col-ag-2 col-md-12 col-12 first">
                                                                <a href="##"
                                                                    class="default-header-sublink">REPELLENTS</a>
                                                            </div>
                                                            <div class="col-ag-2 col-md-12 col-12 first">
                                                                <a href="##" class="default-header-sublink">BLINDS AND
                                                                    ACCESSORIES</a>
                                                            </div>
                                                            <div class="col-ag-2 col-md-12 col-12 first">
                                                                <a href="##" class="default-header-sublink">HUNTING</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                          <!-------- end It does nothing but catch css --->

                                    </div>

                                      <div id="infoLinks" class="d-lg-flex d-md-block justify-space-between flex-direction-row">
                                      </div>

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
            .header-default {
                font-family: 'Montserrat', sans-serif;
                
            }
            .header-default-Top{
                background:#9b9b9b;
                height:40px;
            }
            .header-default-toptext {
                margin-bottom:0px;
                font-weight: 400;
                color: #fff;
                font-size: 13px;
                text-transform: capitalize;
                line-height:40px;
            }

            .default-header-phone {
                color: #fff;
                font-size: 13px
            }
            .default-header-phone:hover{color:#fff;}

            .header-default-inner {
                background:#fff;
                height: auto;
            }

            .default-logo{   
               max-width: 200px;
              width: 100%;
            }
            .f-header2-form{
              max-width:560px;
            }

            .default-header-input {
                padding-left: 10px;
                border: 0px;
                font-size: 16px;
                text-transform: capitalize;
                color: #000  ;
                width: 100%;
                max-width: 100%;
                height: 33px;
                background: #fff;
                font-weight: 500;
                border: 1px solid #000;
            }

            .default-header-input::placeholder {
                color: #000  ;
                font-weight: 500;
            }

            .default-header-btn {
                background: transparent;
                border: 0px;
                padding: 0px;
                position: absolute;
                top: 19%;
                right: 10px;
                z-index: 9999;
                cursor: pointer;
            }

            .default-header-usercart {
                font-size: 20px;
                color: #000;
            }

            .default-header-usercart-link {
                text-decoration: none;
                font-size: 12px;
                text-transform: capitalize;
                font-weight: 500;
                color: #000;
                margin-right: 10px;
            }
            .default-header-usercart-link:hover{
              color:#000;
            }

            .default-header-cartvalue {
                position: absolute;
                top: -15px;
                left: 5px;
                right: 0;
                text-align: center;
                color: #000;
                font-size: 12px;
            }
            .header-default-bottom{background:;}

  nav {background-color:#eee}          

 .default-header-nav-links
{
  color:#000;
}
            .default-header-nav-links {
                font-weight: bold;
                color: #000;
                padding: 0;
                margin: 0  ;
                line-height: 46px;
                text-align: center;
                font-size: 0.65rem  ;
                text-transform: uppercase;
                white-space: nowrap;
                display: block;
            }

            .default-header-nav {
                height: 46px;
                background-color: transparent;
                padding: 0px;
            }
            .navlink {
    display: block;
    padding: .5rem 1rem;
    color: #000;
    text-decoration: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
}

            .default-header-dropmenu {
                margin: 0 auto;
                max-width: 100%;
                width: 100%;
                text-transform: capitalize;
                text-align: left;
                box-sizing: border-box;
                display: none;
                background-color: #fff;
                border: 0px solid;
                border-radius: 2px;
                z-index: 10;
                top: 100%;
                box-: 0px 3px 5px -5px #222222;
                position: absolute;
                padding: 10px 10px 30px 10px;
                right: 0px;
            }

            .default-header-sublink {
                width: fit-content;
                border-bottom: 2px solid #bc0000;
                font-weight: bold;
                margin-bottom: 3%;
                text-transform: uppercase;
                font-size: 11px;
                color: #000;
                text-decoration: none;
                display: block;
            }
                #dynamic-links {
                    display: flex;
                  }

            @media (min-width:992px) {
                .col-ag-2 {
                    -ms-flex: 0 0 16%  ;
                    flex: 0 0 16%  ;
                    max-width: 20%;
                    position: relative;
                    box-sizing: border-box;
                    width: 100%;
                    min-height: 1px;
                    padding-right: 15px;
                    padding-left: 15px;
                }

                .default-header-nav-item:hover {
                    background: #fff;
                    transition: ease-out .3s;
                    color:#000;
                }

                .default-header-nav-item:hover .default-header-nav-links {
                    color: #000 ;
                }

                .default-header-nav-item:hover .default-header-dropmenu {
                    position: absolute;
                    display: block ;
                    color:#000;
                }

            }

            @media (max-width: 991px) {
                .default-header-input {
                    background-color: transparent  ;
                    display: block;
                    color: #000  ;
                    margin: 0 auto;
                    text-align: left;
                    padding-left: 35px;
                }
.default-header-sublink{border-bottom:0px solid transparent;font-weight:normal;}
                .default-header-input::placeholder {
                    color: #000  ;
                }

                .default-header-btn {
                    top: 50%;
                    transform: translateY(-50%);
                    right: unset;
                    width: 17px;
                    height: 17px;
                    left: 0;
                    background: transparent;
                    position: absolute;
                }

                .f-header2-sicon {
                    color: #000;
                }

                .default-header-nav {
                    height: auto;
                    align-items: flex-start  ;
                    padding: 0 15px  ;
                    background: #fff ;
                    display:block!important;
                }

                .default-header-nav-item {
                    position: relative;
                    width: 100%;
                }

                .default-header-usercart-link {
                    font-size: 0px;
                }

                .default-header-dropicon {
                    position: absolute;
                    right: 15px;
                    top: 20px;
                    transform: translateY(-50%);
                }

                .default-header-nav-links {
                    color: #000;
                    text-align: left  ;
                    padding:0px;
                }
                #dynamic-links {
                    display: block!important;
                  }

            }
<style>


`,
  });

  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;

  editor.DomComponents.addType("main-menu-default", {
    model: {
      init() {
        this.listenTo(
          this,
          "change:noOfCategoriesDefault",
          this.getnoOfCategoriesDefault
        );
        this.listenTo(
          this,
          "change:noOfLinksDefault",
          this.getInfoLinksDefault
        );
      },

      getnoOfCategoriesDefault() {
        let catLimit = 8;
        let deptRecs = [];
        catLimit = this.get("traits")
          .where({
            name: "noOfCategoriesDefault",
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

      getInfoLinksDefault(e) {
        let countLinks = 0;

        countLinks = this.get("traits")
          .where({
            name: "noOfLinksDefault",
          })[0]
          .get("value");
        if (!countLinks || countLinks < 1) {
          countLinks = 0;
        }
        let LinksGoups = "";
        let linksCounter = 0;

        for (let i = 0; i < countLinks; i++) {
          linksCounter++;
          LinksGoups += `
            <li id="li-info-link${linksCounter}" data-gjs-type="default" draggable="true" data-highlightable="1" class="default-header-nav-item nav-item">
            <a id="a-info-link${linksCounter}" data-gjs-type="link" draggable="true" data-highlightable="1" href="#" class="default-header-nav-links navlink  gjs-hovered">
                          Link
                        </a></li>
         `;
        }

        const wrapper = editor.getWrapper();
        const el = wrapper.find("#infoLinks")[0];
        el.components(LinksGoups);
      },
      defaults: {
        traits: [
          {
            type: "select",

            label: "Categories",
            name: "noOfCategoriesDefault",
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
            name: "noOfLinksDefault",
            id: "noOfLinksDefault",
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
      },
    },

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

      ab += `
      
            <li class="default-header-nav-item nav-item">
                <a class="default-header-nav-links navlink" href=${base_url}/c/${dept.URL}
                >${dept.DEPT}</a>
          <span id=arrowHolder-${index}>
          </span>
                <div id=fillTyps${index}
                    class="default-header-dropmenu dropdown-menu d-none">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-ag-2 col-md-12 col-12 first">
                                <a href="##" class="default-header-sublink">DECOYS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        
        `;
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
                    class="d-lg-none border-0 p-0 m-0 bg-transparent default-header-dropicon"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target=#fillTyps${index} aria-expanded="false"
                    aria-controls=fillTyps${index}>
                    <i class="fa fa-angle-down default-header-dicon d-lg-none"></i>
                </button>
                  `);
    } else {
    }
  });
};

const displayTyps = (editor, dept, index) => {
  getTyps(dept.DEPT).then((typs) => {
    if (typs.length > 0) {
      let typsHTML = `<div class="row">`;
      typs.map((cat, index) => {
        // displaySubTyp1(editor, dept.DEPT, cat.TYP, index);

        typsHTML += ` 
          <div class="col-ag-2 col-md-12 col-12 first">
          <a href=${base_url}/c/${cat.URL} class="default-header-sublink">${cat.TYP}</a>
          </div>
      `;
      });
      typsHTML += `</div>`;
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
