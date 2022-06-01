import { prodGrids } from "../../../components/custom/categories";
import { getDepts, getHomePageProducts } from "../../../API";

export default function productsGrid2(editor) {
  editor.BlockManager.add("products-grid-2", {
    label: `        
<i class="bi bi-grid-3x3-gap fs-4  p-2" title="Products Grid 2"></i>
    <div class="gjs-block-label ">Grid 2</div>
  `,
    category: prodGrids,
    type: "products-grid-2",
    open: false,

    content: `
    <section id="products-grid-2" class="f-trends main-comp"
    
            data-gjs-name="Products Grid 2"
        data-gjs-type="products-grid-2"
        data-gjs-id="products-grid-2"
                


    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 id="grid2-products-heading1" class="f-trends-h2">PRODUCTS</h2>
          </div>

        <div class="row products-holder" id="prodsGrid2Container"> 
          <div class="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
            <div class="media">
              <img src="/images/dummy.jpg"
                class="f-trends-img mr-3 img-fluid" alt="Chain-bucket-bag">
              <div class="media-body">
                <h5 class="f-trends-h5 mt-0">Chain bucket bag</h5>
                <div class="d-flex">
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                </div>
                <strong class="f-trends-price">$ 59.0</strong>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
            <div class="media">
              <img src="/images/dummy.jpg"
                class="f-trends-img mr-3 img-fluid" alt="Cotton-T-Shirt">
              <div class="media-body">
                <h5 class="f-trends-h5 mt-0">Cotton T-Shirt</h5>
                <div class="d-flex">
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                </div>
                <strong class="f-trends-price">$ 59.0</strong>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
            <div class="media">
              <img src="/images/dummy.jpg"
                class="f-trends-img mr-3 img-fluid" alt="Bow-wrap-skirt">
              <div class="media-body">
                <h5 class="f-trends-h5 mt-0">Bow wrap skirt</h5>
                <div class="d-flex">
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                </div>
                <strong class="f-trends-price">$ 59.0</strong>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
            <div class="media">
              <img src="/images/dummy.jpg"
                class="f-trends-img mr-3 img-fluid" alt="Pendant-earrings">
              <div class="media-body">
                <h5 class="f-trends-h5 mt-0">Pendant earrings</h5>
                <div class="d-flex">
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                </div>
                <strong class="f-trends-price">$ 59.0</strong>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
            <div class="media">
              <img src="/images/dummy.jpg"
                class="f-trends-img mr-3 img-fluid" alt="Zip-pockets-pebbled-tote-briefcase">
              <div class="media-body">
                <h5 class="f-trends-h5 mt-0">Zip-pockets pebbled tote briefcase</h5>
                <div class="d-flex">
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                </div>
                <strong class="f-trends-price">$ 59.0</strong>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
            <div class="media">
              <img src="/images/dummy.jpg"
                class="f-trends-img mr-3 img-fluid" alt="Metallic-earrings">
              <div class="media-body">
                <h5 class="f-trends-h5 mt-0">Metallic earrings</h5>
                <div class="d-flex">
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                </div>
                <strong class="f-trends-price">$ 59.0</strong>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
            <div class="media">
              <img src="/images/dummy.jpg"
                class="f-trends-img mr-3 img-fluid" alt="Cotton-T-Shirt">
              <div class="media-body">
                <h5 class="f-trends-h5 mt-0">Cotton T-Shirt</h5>
                <div class="d-flex">
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                </div>
                <strong class="f-trends-price">$ 59.0</strong>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
            <div class="media">
              <img src="/images/dummy.jpg"
                class="f-trends-img mr-3 img-fluid" alt="Round-leather-bag">
              <div class="media-body">
                <h5 class="f-trends-h5 mt-0">Round leather bag</h5>
                <div class="d-flex">
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                </div>
                <strong class="f-trends-price">$ 59.0</strong>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
            <div class="media">
              <img src="/images/dummy.jpg"
                class="f-trends-img mr-3 img-fluid" alt="Flap-cross-body-bag">
              <div class="media-body">
                <h5 class="f-trends-h5 mt-0">Flap cross-body bag</h5>
                <div class="d-flex">
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                </div>
                <strong class="f-trends-price">$ 59.0</strong>
              </div>
            </div>
          </div>
        </div>  
        </div>
      </div>
    </section>
    <style>
      .f-trends {
        font-family: 'Montserrat', sans-serif;
      }

      .f-trends-h2 {
        font-size: 20px;
        color: #111;
        font-weight: 600;
        text-transform: uppercase;
        margin: 30px 0px;
        position: relative;
      }

      .f-trends-h2::after {
        content: "-";
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 74px;
        display: block;
        border-bottom: 2px solid #ca1515;
        font-size: 0px;
      }

      .f-trends-img {
        float: left;
        margin-right: 25px;
        max-width:90px;
      }

      .f-trends-h5 {
        font-size: 14px;
        color: #111111;
        margin-bottom: 5px;
        font-weight: 400;
      }

      .f-trends-i {
        font-size: 10px;
        color: #e3c01c;
        line-height: 20px;
      }

      .f-trends-price {
        font-weight: 600;
        line-height: 40px;
        font-size: 16px;
      }

    </style>
    `,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("products-grid-2", {
    model: defaultModel.extend(
      {
        editable: false,
        highlightable: false,
        hoverable: false,
        selectable: false,
        droppable: false,
        badgable: false,
        copyable: false,
        layerable: false,
        init() {
          this.listenTo(this, "change:noOfProds", this.getSliderProds);
          this.listenTo(
            this,
            "change:productsDataSource",
            this.getsliderprodSource
          );

          this.listenTo(
            this,
            "change:sourceCategoriesAttr",
            this.getsliderCatProds
          );
        },

        getSliderProds(e) {
          GetProductsForTraits(e, editor);
        },

        getsliderprodSource(e) {
          GetProductsForTraits(e, editor);
        },

        getsliderCatProds(e) {
          GetProductsForTraits(e, editor);
        },

        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          traits: [
            {
              label: "Data",
              name: "productsDataSource",
              id: "productsDataSource",
              type: "select",
              options: [
                {
                  value: "random",
                  name: "Random",
                },
                {
                  id: "new",
                  name: "New",
                },
                {
                  id: "sale",
                  name: "Sale",
                },
                {
                  id: "featured",
                  name: "Featured",
                },
                {
                  id: "categories",
                  name: "Categories",
                },
              ],
              changeProp: 1,
            },
            {
              label: "Products",
              name: "noOfProds",
              id: "noOfProds",
              type: "select",
              options: [
                {
                  id: "3",
                  name: "3",
                },
                {
                  id: "6",
                  name: "6",
                },
                {
                  id: "9",
                  name: "9",
                },
                {
                  id: "12",
                  name: "12",
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

const GetProductsForTraits = (e, editor) => {
  let prodsLimit = 3;
  let sourceInputValue = "";
  let sourceCategory = "no";
  try {
    prodsLimit = e
      .get("traits")
      .where({
        name: "noOfProds",
      })[0]
      .get("value");
  } catch (err) {}
  if (!prodsLimit || prodsLimit == "") prodsLimit = 3;
  e.addAttributes({ prodGrid2QTY: prodsLimit });

  try {
    sourceInputValue = e
      .get("traits")
      .where({
        name: "productsDataSource",
      })[0]
      .get("value");
  } catch (err) {}
  if (!sourceInputValue || sourceInputValue == "") sourceInputValue = "any";
  e.addAttributes({ slider2DataSource: sourceInputValue });

  if (sourceInputValue == "categories") {
    getDepts(20).then((cats) => {
      addCategories(e, cats);
    });
    try {
      sourceCategory = e
        .get("traits")
        .where({
          name: "sourceCategoriesAttr",
        })[0]
        .get("value");
    } catch (err) {}
    if (!sourceCategory || sourceCategory == "") sourceCategory = "no";
    e.addAttributes({ slider2DataCategory: sourceCategory });

    updateSliderHeading(editor, sourceCategory);
    getHomePageProducts(sourceCategory, prodsLimit).then((products) => {
      displayHomeProducts(editor, products);
    });
  } else {
    e.removeTrait("sourceCategoriesAttr");

    // START UPDATE SLIDER HEADING
    updateSliderHeading(editor, sourceInputValue);
    // END UPDATE SLIDER HEADING

    getHomePageProducts(sourceInputValue, prodsLimit).then((products) => {
      displayHomeProducts(editor, products);
    });
  }
};

const addCategories = (e, cats) => {
  let catsData = [];
  cats.map((cat) => {
    if (cat && cat != "") {
      catsData.push({ name: cat.DEPT, id: cat.DEPT });
    } else {
    }
  });

  e.addTrait(
    {
      label: "Categories",
      name: "sourceCategoriesAttr",
      id: "sourceCategoriesAttr",
      type: "select",
      options: catsData,
      changeProp: 1,
    },

    { at: 3 }
  );
};

const displayHomeProducts = (editor, products) => {
  let prods = "";
  let i = 0;
  if (products && products.length > 0) {
  } else {
    products = [];
  }
  try {
    products.map((prod, index) => {
      prods += `     
          <div class="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
            <div class="media">
              <img src=${prod.image}
                class="f-trends-img mr-3 img-fluid" alt="Chain-bucket-bag">
              <div class="media-body">
                <h5 class="f-trends-h5 mt-0">${prod.name}</h5>
                <div class="d-flex">
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                  <i class="f-trends-i fa fa-star"></i>
                </div>
                <strong class="f-trends-price">$ ${prod.price}</strong>
              </div>
            </div>
          </div>

      `;
    });
    const wrapper = editor.getWrapper();
    const el = wrapper.find("#prodsGrid2Container")[0];
    el.components(prods.toString());
  } catch (err) {
    const wrapper = editor.getWrapper();
    const el = wrapper.find("#prodsGrid2Container")[0];
    el.components("No products Found");
  }
};

const updateSliderHeading = (editor, seletedValue) => {
  let headingStr = "";
  try {
    if (seletedValue == "featured") {
      headingStr = "FEATURED PRODUCTS";
    } else if (seletedValue == "new") {
      headingStr = "NEW PRODUCTS";
    } else if (seletedValue == "sale") {
      headingStr = "SALE PRODUCTS";
    } else if (seletedValue == "random") {
      headingStr = "PRODUCTS";
    } else if (seletedValue == "categories") {
      headingStr = " PRODUCTS";
    } else {
      headingStr = "SHOP BY " + seletedValue;
    }

    const wrapper = editor.getWrapper();
    const sliderHeading = wrapper.find("#grid2-products-heading1")[0];
    sliderHeading.components(headingStr);
  } catch (err) {}
};
