import { fullFooter } from "../../../../components/custom/categories";
import { getDepts } from "../../../../API";

export default function fullFooterDefault(editor) {
  editor.BlockManager.add("full-footer-default", {
    label: `    
             <i  class="bi bi-card-heading fs-4 p-2" title="Full Footer Default"></i>

    <div class="gjs-block-label">Footer Default
    </div>

`,
    category: fullFooter,
    type: "full-footer-default",
    open: false,

    content: `  
        <footer id="full-footer-default" class="default-footer main-comp mt-1" data-gjs-name="Change BG of Full Footer Default"
            data-gjs-type="full-footer-default" data-gjs-id="full-footer-default" id="full-footer-default">


            <div id="footerinner" class="f-footer3-innerfooter">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                            <h3 class="default-footer-heading" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Customer
                                Service</h3>
                            <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <a href="##" class="default-footer-links"><i class="fa fa-angle-double-right"></i> your
                                    account</a>
                                <a href="##" class="default-footer-links"><i class="fa fa-angle-double-right"></i>
                                    Contact Us</a>
                                <a href="##" class="default-footer-links"><i class="fa fa-angle-double-right"></i> Gift
                                    Cards</a>
                                <a href="##" class="default-footer-links"><i class="fa fa-angle-double-right"></i> Terms
                                    and Condition</a>

                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                            <h3 class="default-footer-heading" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Information</h3>
                            <div id="collapseTwo" class="accordion-collapse collapse " aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <a href="##" class="default-footer-links"><i class="fa fa-angle-double-right"></i>
                                    Privacy Policy</a>
                                <a href="##" class="default-footer-links"><i class="fa fa-angle-double-right"></i> About
                                    Us</a>
                                <a href="##" class="default-footer-links"><i class="fa fa-angle-double-right"></i>
                                    Shipping and returns</a>

                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                            <h3 class="default-footer-heading" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Shop</h3>
                            <div  class="accordion-collapse inner-comp" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
title="Select No of Footer Categories from here" data-gjs-name="Footer categories" data-gjs-type="footerDefault-categories" id="footerDefault-categories"                                
                                >
                                <a href="##" class="default-footer-links"><i class="fa fa-angle-double-right"></i>
                                    Department 1 </a>
                                <a href="##" class="default-footer-links"><i class="fa fa-angle-double-right"></i>
                                    Department 2
                                </a>
                                <a href="##" class="default-footer-links"><i class="fa fa-angle-double-right"></i>
                                    Department 3</a>

                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                            <h3 class="default-footer-heading">Subscribe Newsletter</h3>
                            <p class="default-footer-text">Our weekly newsletter provides you with the latest and most
                                important happenings in the industry.</p>
                            <form class="default-footer-form advanced-search position-relative" name="searchForm"
                                action="/toolset/emailsignup.cfm" method="post">
                                <input class="default-footer-input input" type="text" name="emailSubscription"
                                    id="searchKeyword" value="" placeholder="Enter e-mail address">
                                <button type="submit" class="default-footer-btn btn-search">Subscribe</button>
                            </form>
                            <a href="##"><i class="default-footer-iconi fa fa-facebook"></i></a>
                            <a href="##"><i class="default-footer-iconi fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footerBottom" class="f-footer-bottom-footer">
                <div class="container">
                    <div class="row">
                        <div
                            class="col-lg-4 col-md-4 col-sm-12 col-12 mt-2 default-footer-copyright text-lg-start text-md-start text-sm-center text-center">
                            <p class="default-footer-text"> &copy; 2021 All rights reserved</p>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-12 mt-2 text-center">
                            <i class="fa fa-cc-discover px-2" aria-hidden="true"></i>
                            <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
                            <i class="fa fa-cc-amex px-2" aria-hidden="true"></i>
                            <i class="fa fa-cc-visa" aria-hidden="true"></i>
                        </div>
                        <div
                            class="col-lg-4 col-md-4 col-sm-12 col-12 mt-2 text-lg-end text-md-end text-sm-center text-center">
                            <p class="default-footer-logotext text-lg-end text-md-end text-sm-center text-center">
                                ecommerce site by
                                <a href="##"> <img
                                        src="https://clothingtemplate.cumulusbetasites.com/demo-2/images/cumulus_logo.svg"
                                        alt="footer bottom logo" class="default-footer-logo img-fluid"></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <style>
            .default-footer {
                font-family: 'Montserrat', sans-serif;
                background: #c5c5c5;
            }

            .default-footer-heading {
                border: none;
                font-weight: 600;
                color: #646464;
                font-size: 15px;
                margin-bottom: 20px;
                text-transform: uppercase;
                box-shadow: none;
                background-color: transparent;
                margin-top: 20px;
                position: relative;
            }

            .default-footer-links {
                color: #484747;
                font-size: 14px;
                text-decoration: none;
                display: block;
                margin-bottom: 10px;
                text-transform: capitalize;
                font-weight: 400;
            }

            .default-footer-links:hover {
                color: #484747;
            }

            .default-footer-text {
                margin-bottom: 20px;
                font-size: 13px;
                color: #484747;
            }

            .default-footer-form {
                background: #fff;
                margin-bottom: 10px;
                border-radius: 5px;
            }

            .default-footer-input {
                color: #646464;
                font-size: 14px;
                width: 100%;
                border: none;
                height: 42px;
                background: #fff;
                border-radius: 5px;
                padding: 12px 5px;
                font-weight: 400;
            }

            .default-footer-input::placeholder {
              color: #646464;
                font-size: 14px;
                border: none;
                height: 42px;
                background: #fff;
                padding: 12px 5px;
                font-weight: 400;
            }

            .default-footer-btn {
                position: absolute;
                top: 0;
                right: 0;
                background: #c5c5c5;
                color: #000;
                font-size: 14px;
                height: 42px;
                text-align: center;
                box-shadow: none;
                border: 1px solid #fff;
            }

            .default-footer-iconi {
                color: #484747;
                font-size: 24px;
                margin-right: 10px;
            }

            .default-footer-logotext {
                text-align: right;
                color: #484747;
                text-transform: capitalize;
                font-size: 12px;
            }

            .default-footer-logo {
                max-width: 80px;
                color:#484747;
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
                .default-footer-heading::after {
                    content: "+";
                    position: absolute;
                    color: #fff;
                    font-size: 30px;
                    font-weight: 300;
                    display: block;
                    top: 50%;
                    transform: translateY(-50%) rotate(90deg);
                    right: 15px;
                }

                .col-lg-3.col-md-6.col-sm-12.col-12:last-of-type .default-footer-heading::after {
                    content: "";
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
  editor.DomComponents.addType("footerDefault-categories", {
    model: defaultModel.extend(
      {
        init() {
          this.listenTo(
            this,
            "change:footerDefaultnoCats",
            this.getfooterDefaultnoCats
          );
        },

        getfooterDefaultnoCats() {
          let catLimit = 3;
          let deptRecs = [];
          catLimit = this.get("traits")
            .where({
              name: "footerDefaultnoCats",
            })[0]
            .get("value");
          if (!catLimit || catLimit == "") catLimit = 3;

          const wrapper = editor.getWrapper();

          const el = wrapper.find("#full-footer-default")[0];
          el.addAttributes({ footerDefaultnoCats: catLimit });

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
              name: "footerDefaultnoCats",
              id: "footerDefaultnoCats",
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
              type: "full-footer-default",
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
            <a class="default-footer-links" href={dept.URL}>
              {" "}
              {dept.DEPT}{" "}
            </a>
          );
        })
      : "<li> &nbsp;	&nbsp;	&nbsp;	</li>";

  const wrapper = editor.getWrapper();
  const el = wrapper.find("#footerDefault-categories")[0];
  // el.append(LinksGoups);
  el.components(deptLinks);

  return deptLinks;
};
