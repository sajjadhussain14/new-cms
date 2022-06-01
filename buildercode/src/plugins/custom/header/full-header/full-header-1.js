import { fullHeader } from "../../../../components/custom/categories";
import { getDepts, getTyps } from "../../../../API";
const base_url = window.location.origin;

export default function fullHeader1(editor) {
  editor.BlockManager.add("full-header-1", {
    label: `       
     <i  class="bi bi-card-heading fs-4 p-2" title="Header 1"></i>
    <div class="gjs-block-label ">Header 1    </div>
`,
    category: fullHeader,
    type: "full-header-1",
    open: false,

    content: ` 
      <header data-gjs-componentName="header" id="full-header-1" class="f-header1 shadow-sm  main-comp" data-gjs-name="Full Header 1" data-gjs-type="full-header-1">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-lg-2 col-md-6 col-sm-6 col-6 f-header1-logo">
                    <a href="/">
                        <img alt=""src="/images/logo.png" class="img-fluid"/>
                    </a>
                  </div>
                  <div  class="col-lg-8 col-md-12 col-sm-12 col-12 f-header1-navi " >
                    <nav  class="navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid p-0">
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div data-gjs-name="change Nav BG" class="collapse navbar-collapse " id="navbarTogglerDemo01">
                            
                            <ul id="f-header1-nav-ul" class="f-header1-nav navbar-nav mx-auto mb-2 mb-lg-0 d-lg-flex d-md-block justify-content-center align-items-center w-100 inner-comp"
                            data-gjs-name="Main Menu " data-gjs-type="main-menu-1"
                            >
                                            
                                            

                    <div id="dynamic-links" class="justify-space-between flex-direction-row">
                  <p data-gjs-type="main-menu-1" data-gjs-name="Menu Builder">Click here to Build Dynamic Menu </p>
                                        
                          <!-------- start It does nothing but catch css --->
                              <li class="nav-item d-none">
                              <a class="f-header1-nav-li-a" href="">
                              Category1
                              </a>
                              <span id=arrowHolder-1>
                              </span>
                              <div class="f-header1-dropdown collapse" id=dropdown1>
                              <a href="" class="f-header1-dropdown-a">Sub link 1</a>
                              <a href="" class="f-header1-dropdown-a">Sub link 2</a>
                              <a href="" class="f-header1-dropdown-a">Sub link 3</a>
                              <a href="" class="f-header1-dropdown-a">Sub link 4</a>
                              <a href="" class="f-header1-dropdown-a">Sub link 5</a>
                              </div>
                              </li>
                          <!-------- end It does nothing but catch css --->
                   
                    </div>
                    <div id="infoLinks" class="d-lg-flex d-md-block justify-space-between flex-direction-row"></div>
                            </ul>
                          </div>
                        </div>
                      </nav>
                  </div>
                  <div class="col-lg-2 col-md-6 col-sm-6 col-6 f-header1-icons">
                      <a href="/login.cfm"><i class="fa fa-user"></i>Login/Register</a>
                      <a href="##"><i class="fa fa-search" id="search"></i></a>
                      <a href="/cart.cfm"><i class="fa fa-shopping-bag"></i><span>0</span></a>
                  </div>
              </div>
          </div>
          <div class="f-header1-smodel">
            <div class="h-100 d-flex align-items-center justify-content-center">
                <div class="f-header1-sclose-switch">+</div>
                <form class="search-model-form" role="search" action="/search" method="post" name="myForm" onsubmit="return validateForm()" required="">
                    <input type="text" name="Search" id="search-input" placeholder="Search here.....">
                </form>
            </div>
        </div>
      </header>

<style>  

/* start Header css */
               .f-header1 {font-family: "Montserrat",sans-serif;}
         .container-fluid{max-width: 1440px;padding: 10px 30px;}
         .f-header1-nav li{transition: ease-in .8s;}
         .f-header1-nav-li-a{text-transform:uppercase;font-weight: 500; font-size: 15px;display: block;padding: .5rem 1rem;color: rgba(0, 0, 0, 0.55);text-decoration: none; transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;}  
         .f-header1-nav-li-a:hover{color: rgba(0, 0, 0, 0.55);}    
         .f-header1-icons{display: flex;align-items: center;justify-content: space-around;}
         .f-header1-icons a{line-height: 58px;font-size: 12px;color: #000;text-decoration: none;position: relative;}
         .f-header1-icons a:first-of-type{text-decoration: underline;}
         .f-header1-icons a span{display: block;position:absolute;width: 15px;height: 15px;border-radius: 15px;text-align: center;line-height: 15px;color:#fff;top:-5px;right:-5px;background: #000;font-size: 12px;}
         .f-header1-icons a:first-of-type i{font-size: 20px;color:#333;display: none;}
         .f-header1-icons a i{font-size: 20px;color:#333;display:block;}  
          .f-header1-dropdown{position: absolute;top: 50px;left: auto;background-color:rgba(0, 0, 0, 1);min-width:auto;padding: 20px;border-bottom:2px solid transparent;min-width: 180px;}
          .f-header1-dropdown-a{font-size: 14px;color: #fff;display: block;text-decoration: none;margin-bottom: 5px;text-transform:uppercase;font-weight: 400;line-height: 25px;}
          .f-header1-dropdown-a:hover{color:#fff;}
          .f-header1-smodel {display: none;position: fixed;width: 100%;height: 100%;left: 0;top: 0;background: #ffffff;z-index: 99999;}
         .f-header1-sclose-switch {position: absolute;width: 50px;height: 50px;background: #333;color: #fff;text-align: center;border-radius: 50%;font-size: 28px;line-height: 28px;top: 30px;cursor: pointer;-webkit-transform: rotate(45deg);transform: rotate(45deg);display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;}
         .f-header1-smodel-form {padding: 0 15px;}
         .f-header1-smodel-form input {width: 500px;font-size: 40px;border: none;border-bottom: 2px solid #dddddd;background: 0 0;color: #999}   
                           #dynamic-links {
                      display: flex;
                    }

         @media(min-width:992px)
          {
            .f-header1-nav{width: 80%!important;}
            .f-header1-nav li:hover .f-header1-dropdown{display: block;}
            .f-header1-nav li:hover{border-bottom:2px solid darkred;}
            .f-header1-nav li  .f-header1-dropdown{display: none;}
          }
        @media(max-width:991px)
          {
            ul#f-header1-nav-ul {display: block!important;}
            .f-header1-icons a{font-size: 0px;}
            .f-header1-icons a i {display: block;}   
            .f-header1-logo{order:1;}
            .f-header1-navi{order: 3;margin: 15px 0 0;}
            .f-header1-icons{order: 2;display: flex;justify-content: space-between;align-items: center;}
            .f-header1-icons a{line-height: normal;}
            .f-header1-nav li{position: relative;}
            .f-header1-nav li .f-header1-dropdown{position: relative;top: 0;min-width: 100%;background:#fff!important;}
            .f-header1-dropdown-a{color:#000!important;}
            .f-header1-drop{position: absolute;right: 15px;top:0;}
                                 #dynamic-links {
                      display: block!important;
                    }

          }
/* end Header css */


</style>

`,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("main-menu-1", {
    model: defaultModel.extend(
      {
        init() {
          this.listenTo(this, "change:noOfCategories", this.getnoOfCategories);
          this.listenTo(this, "change:noOfLinks", this.getInfoLinks);
        },

        getnoOfCategories() {
          let catLimit = 5;
          let deptRecs = [];
          catLimit = this.get("traits")
            .where({
              name: "noOfCategories",
            })[0]
            .get("value");
          if (!catLimit || catLimit == "") catLimit = 5;
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
          // let canvasDoc = editor.Canvas.getDocument();
          let LinksGoups = "";
          let linksCounter = 0;

          for (let i = 0; i < countLinks; i++) {
            linksCounter++;
            LinksGoups += `
            <li id=li-info-link${linksCounter}  class="nav-item">
            <a id=a-info-link${linksCounter}  href="#" class="f-header1-nav-li-a">
                          Link
                        </a></li>
         `;
          }
          console.log("LinksGoups");
          console.log(LinksGoups);

          const wrapper = editor.getWrapper();
          const el = wrapper.find("#infoLinks")[0];
          el.append(LinksGoups);
          // el.components("LinksGoups");

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
              type: "full-header-1",
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

      ab += `<li class="nav-item">
          <a class="f-header1-nav-li-a" href=${base_url}/c/${dept.URL}>
            ${dept.DEPT}
          </a>
          
          <span id=arrowHolder-${index}>
          </span>
          <div class="f-header1-dropdown collapse" id=dropdown${index}>
            <a href="" class="f-header1-dropdown-a">Sub link 1</a>
            <a href="" class="f-header1-dropdown-a">Sub link 2</a>
            <a href="" class="f-header1-dropdown-a">Sub link 3</a>
            <a href="" class="f-header1-dropdown-a">Sub link 4</a>
            <a href="" class="f-header1-dropdown-a">Sub link 5</a>
          </div>
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
                    <button type="button" data-bs-toggle="collapse" data-bs-target=#dropdown${index}
                    aria-expanded="false" aria-controls="dropdown${index}" id="drop" class="
                    d-lg-none
                    border-0
                    d-md-block d-sm-block d-block
                    position-absolute
                    end-0 
                    top-0
                    p-0
                    m-0
                    me-3
                    mt-2
                    bg-transparent
                    ">
                    <i class="fa fa-angle-down text-dark"></i>
                  `);
    } else {
    }
  });
};

const displayTyps = (editor, dept, index) => {
  getTyps(dept.DEPT).then((typs) => {
    if (typs.length > 0) {
      let typsHTML = "";
      typs.map((cat) => {
        typsHTML += ` 
        <a class="f-header1-dropdown-a" href=${base_url}/c/${cat.URL}>
${cat.TYP}        </a>
      `;
      });

      const wrapper = editor.getWrapper();
      const el = wrapper.find("#dropdown" + index)[0];
      // el.append(LinksGoups);
      el.components(typsHTML);
    }
  });
};
const showSearchModal = () => {
  var searchModal = document.getElementsByClassName("search-model")[0];
  searchModal.style.display = "block";
};

const hideSearchModal = () => {
  var searchModal = document.getElementsByClassName("search-model")[0];
  searchModal.style.display = "none";
};
