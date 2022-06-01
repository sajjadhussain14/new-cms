import { fullFooter } from "../../../../components/custom/categories";
import { getDepts } from "../../../../API";

export default function fullFooter3(editor) {
  editor.BlockManager.add("full-footer-3", {
    label: `           <i  class="bi bi-card-heading fs-4 p-2" title="Full Footer 3"></i>

    <div class="gjs-block-label">Footer 3
    </div>

`,
    category: fullFooter,
    type: "full-footer-3",
    open: false,

    content: `  
        <footer id="full-footer-3" class="f-footer3 main-comp mt-1"
        
            data-gjs-name="Full Footer 3" data-gjs-type="full-footer-3" data-gjs-id="full-footer-3" id="full-footer-3">

            <div title="Change BG of Top from here" data-gjs-name="Footer Top" id="footerTop" class="f-footer3-ftop inner-comp">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12 col-12 text-lg-start text-center">
                            <a href="##"><img
                                    src="./images/logo.png"
                                    alt="footerLogo" class="img-fluid f-footer3-logo"></a>
                        </div>
                        <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                            <strong class="f-footer3-newsletter">Subscribe for Newsletter</strong>
                            <p class="f-footer3-text">Our weekly newsletter provides you with the latest and most
                                important happenings in the industry.</p>
                            <form data-gjs-name="Form" title="select form for action and method" class="f-footer3-form advanced-search mb-4 position-relative inner-comp" name="searchForm"
                                action="/toolset/emailsignup.cfm" method="post">
                                <input class="f-footer3-input input" type="text" name="emailSubscription" id="searchKeyword"
                                    value="" placeholder="Enter your e-mail address here">
                                <button type="submit" class="f-footer3-btn btn-search">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div data-gjs-name="Footer Lower" title="Change BG of Lower from here" class="row p-2  f-footer3-lower inner-comp2" >
            <div  id="footerinner" class="f-footer3-innerfooter ">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                            <h3 class="f-footer3-heading" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Customer
                                Service</h3>
                            <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <a href="##" class="f-footer3-links">Track Your Order</a>
                                <a href="##" class="f-footer3-links">Returns</a>
                                <a href="##" class="f-footer3-links">Shipping</a>
                                <a href="##" class="f-footer3-links">Product Policies</a>
                                <a href="##" class="f-footer3-links">Recall Information</a>

                                </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                            <h3 class="f-footer3-heading" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Information</h3>
                            <div id="collapseTwo" class="accordion-collapse collapse " aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <a href="##" class="f-footer3-links">Privacy Policy</a>
                                <a href="##" class="f-footer3-links">Terms of Use</a>
                                <a href="##" class="f-footer3-links">Contact Us</a>
                                <a href="##" class="f-footer3-links">About Us</a>
                                <a href="##" class="f-footer3-links">Location</a>

                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                            <h3 class="f-footer3-heading" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Shop</h3>
                            <div title="Select No of Footer Categories from here" data-gjs-name="Footer categories" data-gjs-type="footer3-categories" id="footer3-categories" class="accordion-collapse collapse inner-comp2" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <a href="##" class="f-footer3-links">Department 1</a>
                                <a href="##" class="f-footer3-links">Department 2</a>
                                <a href="##" class="f-footer3-links">Department 3</a>
                                <a href="##" class="f-footer3-links">Department 4</a>
                                <a href="##" class="f-footer3-links">Department 5</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                            <h3 class="f-footer3-heading" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Stay
                                Connected</h3>
                            <div id="collapseFour" class="accordion-collapse collapse " aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <a href="##"><i class="f-footer3-iconi fa fa-facebook-square"></i></a>
                                <a href="##"><i class="f-footer3-iconi fa fa-twitter-square"></i></a>
                                <a href="##"><i class="f-footer3-iconi fa fa-youtube-square"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-gjs-name="Footer Bottom" id="footerBottom" class="f-footer-bottom-footer">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-12 mt-4 text-lg-start text-md-start text-center">
                            <i class="fa fa-cc-discover px-2 text-light" aria-hidden="true"></i>
                            <i class="fa fa-cc-mastercard text-light" aria-hidden="true"></i>
                            <i class="fa fa-cc-amex px-2 text-light" aria-hidden="true"></i>
                            <i class="fa fa-cc-visa text-light" aria-hidden="true"></i>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-12 text-center mt-4">
                            <p class="f-footer-bottom-text"> &copy; 2021 All rights reserved</p>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
                            <p class="f-footer3-bottomlogo-text">ecommerce site by <br>
                                <a href="##"> <img
                                        src="https://clothingtemplate.cumulusbetasites.com/demo-2/images/cumulus_logo.svg"
                                        alt="footer bottom logo" class="f-footer3-bottomlogo img-fluid"></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>  
        </footer>
        <style>
            .f-footer3 {
                font-family: 'Livvic', sans-serif;
            }

            .f-footer3-lower {background-color:#181212}

            .f-footer3-ftop {
              background: #EBE8E6;
                padding: 30px 0;
            }

            .f-footer3-logo {
                max-width: 217px;
            }

            .f-footer3-newsletter {
                color: #000;
                font-size: 17px;
                font-weight: bold;
                width: 100%;
                margin-bottom: 7px;
            }

            .f-footer3-form {
                max-width: 596px;
                width: 96%;
            }

            .f-footer3-text {
                color: #333;
                font-size: 13px;
                width: 100%;
                margin-bottom: 15px;
            }

            .f-footer3-input {
                color: #585858;
                font-size: 14px;
                width: 100%;
                border: none;
                height: 45px;
                background: #ffffff;
                padding: 0px 14px;
            }

            .f-footer3-btn {
                position: absolute;
                top: 0;
                right: 0;
                background: #C3D8CC;
                color: #333;
                font-size: 14px;
                width: 109px;
                height: 45px;
                text-align: center;
                box-shadow: none;
                border: 1px;
            }

            .f-footer3-heading {
                border: none;
                font-weight: bold;
                color: #fff;
                font-size: 15px;
                margin-bottom: 25px;
                text-transform: uppercase;
                box-shadow: none;
                background-color: transparent;
                margin-top: 20px;
                position: relative;
            }

            .f-footer3-links {
                color: #fff;
                font-size: 14px;
                text-decoration: none;
                display: block;
                line-height: 30px;
            }

            .f-footer3-links:hover {
                color: #fff;
            }

            .f-footer3-iconi {
                color: #9E9E9E;
                font-size: 41px;
                margin-right: 10px;
                margin-top: 20px;
            }

            .f-footer-bottom-text {
                color: #fff;
                font-size: 11px;
            }

            .f-footer3-bottomlogo-text {
                text-align: right;
                font-family: 'Roboto Condensed', sans-serif;
                color: #fff;
                text-transform: capitalize;
                font-size: 9px;
            }

            .f-footer3-bottomlogo {
                max-width: 80px;
            }

            @media(min-width:768px) {
                footer .collapse {
                    display: block !important;
                }

                footer .collapsing {
                    height: auto;
                    overflow: visible;
                    transition: height .35s ease;
                }
            }

            @media(max-width:767px) {
                .f-footer3-heading::after {
                    content: ">";
                    position: absolute;
                    color: #fff;
                    font-size: 15px;
                    font-weight: 300;
                    display: block;
                    top: 50%;
                    transform: translateY(-50%) rotate(90deg);
                    right: 15px;
                }
            }

        </style>


`,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("footer3-categories", {
    model: defaultModel.extend(
      {
        init() {
          this.listenTo(this, "change:footer3noCats", this.getfooter3noCats);
        },

        getfooter3noCats() {
          let catLimit = 5;
          let deptRecs = [];
          catLimit = this.get("traits")
            .where({
              name: "footer3noCats",
            })[0]
            .get("value");
          if (!catLimit || catLimit == "") catLimit = 5;
          const wrapper = editor.getWrapper();

          const el = wrapper.find("#full-footer-3")[0];
          el.addAttributes({ footer3noCats: catLimit });

          getCatDepts(catLimit)
            .then((depts) => {
              getMenuViews(depts, editor);
            })
            .catch((err) => {});
        },

        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          traits: [
            {
              label: "Categories",
              name: "footer3noCats",
              id: "footer3noCats",
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
          ],
        }),
      },
      {
        isComponent: function (el) {
          if (el.tagName == "footer") {
            return {
              type: "full-footer-3",
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
  let deptLinks =
    depts && depts.length > 0
      ? depts.map((dept, index) => {
          return (
            <a class="f-footer3-links" href={dept.URL}>
              {" "}
              {dept.DEPT}{" "}
            </a>
          );
        })
      : "<li> &nbsp;	&nbsp;	&nbsp;	</li>";

  const wrapper = editor.getWrapper();
  const el = wrapper.find("#footer3-categories")[0];
  // el.append(LinksGoups);
  el.components(deptLinks);

  return deptLinks;
};
