import { buildFooter } from "../../../../components/custom/categories";
import { getDepts } from "../../../../API";

export default function footerCategories1(editor) {
  editor.BlockManager.add("footerCategories1", {
    label: `   
     <i class="bi bi-menu-down fs-4 p-2" title="Footer Categories"></i>    
    <div class="gjs-block-label ">Footer Categories
    </div>
`,
    category: buildFooter,
    type: "footerCategories1",
    open: false,

    content: `             
    <div class="col-lg-3 col-md-3 col-sm-6 col-12 mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2">
              <h5 class="text-light text-uppercase font-weight-bold mb-3">
                Categories
              </h5>
              <div id="footer-categories"class="inner-comp"
     data-gjs-name="Footer Categories" data-gjs-type="footer-categories" data-gjs-id="footer-categories" id="footer-categories">
             
              >
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


`,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("footer-categories", {
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
              {dept.DEPT}
            </a>
          );
        })
      : "<li> &nbsp;	&nbsp;	&nbsp;	</li>";

  const wrapper = editor.getWrapper();
  const el = wrapper.find("#footer-categories")[0];
  // el.append(LinksGoups);
  el.components(deptLinks);

  return deptLinks;
};
