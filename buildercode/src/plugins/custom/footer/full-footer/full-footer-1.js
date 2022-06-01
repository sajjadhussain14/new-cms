import { fullFooter } from "../../../../components/custom/categories";
import { getDepts } from "../../../../API";

export default function fullFooter1(editor) {
  editor.BlockManager.add("full-footer-1", {
    label: `    
         <i  class="bi bi-card-heading fs-4 p-2" title="Full Footer 1"></i>

    <div class="gjs-block-label">Footer 1
    </div>
`,
    category: fullFooter,
    type: "full-footer-1",
    open: false,

    content: `  <footer class="bg-dark main-comp pt-5 px-5 mt-1"
    data-gjs-name="Full Footer 1" data-gjs-type="full-footer-1" data-gjs-id="full-footer-1" id="full-footer-1">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6 col-6 mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2">
              <h5 class="text-light text-uppercase font-weight-bold mb-3">
                heading 1
              </h5>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-6 mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2">
              <h5 class="text-light text-uppercase font-weight-bold mb-3">
                heading 2
              </h5>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-12 mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2">
              <h5 class="text-light text-uppercase font-weight-bold mb-3">
                Categories
              </h5>
                 <div id="footer1-categories" class="inner-comp"
     data-gjs-name="Footer Categories" data-gjs-type="footer1-categories" data-gjs-id="footer1-categories" id="footer1-categories">
             
              
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              <a
                class="text-light text-capitalize d-block text-decoration-none mb-2"
                href="##"
              >
                link here
              </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-12  mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2">
              <h5 class="text-light text-uppercase font-weight-bold mb-3">
                heading 4
              </h5>
              <p class="text-light mb-3">
                Join our newsletter program to stay updated with all the latest
                updates , sales and promotions!
              </p>
              <form class="position-relative inner-comp" action="/toolset/emailsignup.cfm" method="post">
                <input
                name="emailSubscription"
                  class="text-capitalize text-light bg-transparent py-1 border-0"
                  type="email" placeholder="Enter your Email Address"
                />
                <button type="submit" class="text-light bg-danger text-uppercase border-0 position-absolute py-1 px-4 top-50 end-0 translate-middle-y">
                  Subscribe
                </button>
              </form>
              <div class="social d-flex justify-content-between align-items-center">
                <a data-gjs-type="link" data-gjs-name="Facebook Link" href="##" class="text-decoration-none inner-comp">
                  <i class="fa fa-facebook text-light"></i>
                </a>
                <a  data-gjs-type="link" data-gjs-name="Twitter Link" href="##" class="text-decoration-none inner-comp">
                  <i class="fa fa-twitter text-light"></i>
                </a>
                <a data-gjs-type="link" data-gjs-name="Linkedin Link"  href="##" class="text-decoration-none inner-comp">
                  <i class="fa fa-linkedin text-light"></i>
                </a>
                <a data-gjs-type="link" data-gjs-name="Youtube Link"  href="##" class="text-decoration-none inner-comp">
                  <i class="fa fa-youtube text-light"></i>
                </a>
                <a data-gjs-type="link" data-gjs-name="Pinterest Link" href="##" class="text-decoration-none inner-comp">
                  <i class="fa fa-pinterest text-light"></i>
                </a>
                <a data-gjs-type="link"  href="##" class="text-decoration-none inner-comp">
                  <i class="fa fa-vimeo text-light"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12 my-5 py-1 mx-auto mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2">
              <p class="text-light text-center">
                &copy; 2021 All Rights Reserved React Template For Celerent
              </p>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12 my-5 py-1 mx-auto mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2">
              <div class="payments d-flex justify-content-around align-items-center">
                <a href="#" class="text-decoration-none">
                  <i class="fa fa-cc-discover text-light"></i>
                </a>
                <a href="#" class="text-decoration-none">
                  <i class="fa fa-cc-mastercard text-light"></i>
                </a>
                <a href="#" class="text-decoration-none">
                  <i class="fa fa-cc-paypal text-light"></i>
                </a>
                <a href="#" class="text-decoration-none">
                  <i class="fa fa-cc-amex text-light"></i>
                </a>
                <a href="#" class="text-decoration-none">
                  <i class="fa fa-cc-visa text-light"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12 mt-5 ">
              <p class="text-light text-capitalize text-sm-center text-md-end text-lg-end">
                ecommerce site by
                <a
                  href="https://www.celerant.com/cumulus-retail/"
                  class="text-decoration-none"
                >
                  <img
                    alt="Cumulus retail logo"
                    src="http://template1icumulus-com.ntc5-p2stl.ezhostingserver.com/images/cumulus_logo.svg"
                    class="img-fluid w-25"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

`,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("footer1-categories", {
    model: defaultModel.extend(
      {
        init() {
          this.listenTo(this, "change:footer1noCats", this.getfooter1noCats);
        },

        getfooter1noCats() {
          let catLimit = 5;
          let deptRecs = [];
          catLimit = this.get("traits")
            .where({
              name: "footer1noCats",
            })[0]
            .get("value");
          if (!catLimit || catLimit == "") catLimit = 5;

          const wrapper = editor.getWrapper();
          const el = wrapper.find("#full-footer-1")[0];
          el.addAttributes({ footer1noCats: catLimit });

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
              name: "footer1noCats",
              id: "footer1noCats",
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
          if (el.tagName == "header") {
            return {
              type: "header",
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
            <a
              class="text-light text-capitalize d-block text-decoration-none mb-2"
              href={dept.URL}
            >
              {" "}
              {dept.DEPT}{" "}
            </a>
          );
        })
      : "<li> &nbsp;	&nbsp;	&nbsp;	</li>";

  const wrapper = editor.getWrapper();
  const el = wrapper.find("#footer1-categories")[0];
  // el.append(LinksGoups);
  el.components(deptLinks);

  return deptLinks;
};
