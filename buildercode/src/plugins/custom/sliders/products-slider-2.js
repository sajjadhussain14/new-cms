import { sliders } from "../../../components/custom/categories";
import { getDepts, getHomePageProducts } from "../../../API";

export default function productsSlider2(editor) {
  editor.BlockManager.add("products-slider-2", {
    label: `        
<i class="bi bi-sliders fs-4  p-2"></i>
    <div class="gjs-block-label ">Slider 2</div>

`,
    category: sliders,
    type: "products-slider-2",
    open: false,

    content: `
    <section
    id="products-slider-2"
    class="carousel slide main-comp "
    data-bs-ride="carousel"
    data-gjs-name="Products Slider 2"
    data-gjs-type="products-slider-2"
    data-gjs-id="products-slider-2"
  >
    <!-- Indicators -->
    <h2
      data-gjs-id="slider2-products-heading"
      id="slider2-products-heading"
      class="text-center d-block bg-transparent w-auto pb-2 mb-5 mt-2"
    >PRODUCTS</h2>
    <div id="slider-2-indicater" class="carousel-indicators bottom-0 mb-0">
    <button type="button" data-bs-target="#products-slider-2" data-bs-slide-to="0" class="active bg-dark py-1" aria-current="true" aria-label="Slide 1"></button>
    </div>  
    <!-- The slideshow -->
    <div class="carousel-inner" id="slider2-prods-container">
      <div class="carousel-item active">
        <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-4 col-4">
            <a href="##" class="text-decoration-none text-center d-block p-2 shadow-sm mx-auto">
              <img src="/images/dummy.jpg" class="img-fluid mx-auto d-block my-2" />
              <h6 class="text-uppercase text-dark d-block fw-bold">
                Product name
              </h6>
              <p class="text-dark my-2">
                Product description will go here under the product name
              </p>
              <strong class="text-uppercase text-danger d-block my-2 fw-bold">
                $99.00
              </strong>
            </a>    
        </div>
        <div class="col-lg-2 col-md-2 col-sm-4 col-4">
            <a href="##" class="text-decoration-none text-center d-block p-2 shadow-sm mx-auto">
              <img src="/images/dummy.jpg" class="img-fluid mx-auto d-block my-2" />
              <h6 class="text-uppercase text-dark d-block fw-bold">
                Product name
              </h6>
              <p class="text-dark my-2">
                Product description will go here under the product name
              </p>
              <strong class="text-uppercase text-danger d-block my-2 fw-bold">
                $99.00
              </strong>
            </a>    
        </div>
        <div class="col-lg-2 col-md-2 col-sm-4 col-4">
            <a href="##" class="text-decoration-none text-center d-block p-2 shadow-sm mx-auto">
              <img src="/images/dummy.jpg" class="img-fluid mx-auto d-block my-2" />
              <h6 class="text-uppercase text-dark d-block fw-bold">
                Product name
              </h6>
              <p class="text-dark my-2">
                Product description will go here under the product name
              </p>
              <strong class="text-uppercase text-danger d-block my-2 fw-bold">
                $99.00
              </strong>
            </a>    
        </div>
        <div class="col-lg-2 col-md-2 col-sm-4 col-4">
            <a href="##" class="text-decoration-none text-center d-block p-2 shadow-sm mx-auto">
              <img src="/images/dummy.jpg" class="img-fluid mx-auto d-block my-2" />
              <h6 class="text-uppercase text-dark d-block fw-bold">
                Product name
              </h6>
              <p class="text-dark my-2">
                Product description will go here under the product name
              </p>
              <strong class="text-uppercase text-danger d-block my-2 fw-bold">
                $99.00
              </strong>
            </a>    
        </div>
        <div class="col-lg-2 col-md-2 col-sm-4 col-4">
            <a href="##" class="text-decoration-none text-center d-block p-2 shadow-sm mx-auto">
              <img src="/images/dummy.jpg" class="img-fluid mx-auto d-block my-2" />
              <h6 class="text-uppercase text-dark d-block fw-bold">
                Product name
              </h6>
              <p class="text-dark my-2">
                Product description will go here under the product name
              </p>
              <strong class="text-uppercase text-danger d-block my-2 fw-bold">
                $99.00
              </strong>
            </a>    
        </div>
        <div class="col-lg-2 col-md-2 col-sm-4 col-4">
            <a href="##" class="text-decoration-none text-center d-block p-2 shadow-sm mx-auto">
              <img src="/images/dummy.jpg" class="img-fluid mx-auto d-block my-2" />
              <h6 class="text-uppercase text-dark d-block fw-bold">
                Product name
              </h6>
              <p class="text-dark my-2">
                Product description will go here under the product name
              </p>
              <strong class="text-uppercase text-danger d-block my-2 fw-bold">
                $99.00
              </strong>
            </a>    
        </div>
        </div>
      </div>
      </div>
    </div>
  
    <!-- Left and right controls -->
    <button id="btnPrev" class="d-none carousel-control-prev text-dark w-auto left-0 border-0" type="button" data-bs-target="#products-slider-2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bg-dark p-3" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button id="btnNxt"  class="d-none carousel-control-next text-dark w-auto right-0 border" type="button" data-bs-target="#products-slider-2" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-dark p-3" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  
</section>
           

    `,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("products-slider-2", {
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
                  id: "6",
                  name: "6",
                },
                {
                  id: "12",
                  name: "12",
                },
                {
                  id: "18",
                  name: "18",
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
  let prodsLimit = 6;
  let sourceInputValue = "";
  let sourceCategory = "...";
  try {
    prodsLimit = e
      .get("traits")
      .where({
        name: "noOfProds",
      })[0]
      .get("value");
  } catch (err) {}
  if (!prodsLimit || prodsLimit == "") prodsLimit = 6;

  try {
    sourceInputValue = e
      .get("traits")
      .where({
        name: "productsDataSource",
      })[0]
      .get("value");
  } catch (err) {}
  if (!sourceInputValue || sourceInputValue == "") sourceInputValue = "any";
  e.addAttributes({ slider1DataSource: sourceInputValue });

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
    if (!sourceCategory || sourceCategory == "") sourceCategory = "...";
    e.addAttributes({ slider1DataCategory: sourceCategory });

    updateSliderHeading(editor, sourceCategory);
    getHomePageProducts(sourceCategory, prodsLimit).then((products) => {
      displayHomeProducts(editor, products);
    });
  } else {
    e.removeTrait("sourceCategoriesAttr");
    e.set("sourceCategoriesAttr", "");

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
      value: "",
      options: catsData,
      changeProp: 1,
    },

    { at: 3 }
  );
};

const displayHomeProducts = (editor, products) => {
  let prods = "";
  let i = 0;
  let j = 0;
  let buttonIndicators = "";

  if (products && products.length > 0) {
  } else {
    products = [];
  }
  try {
    products.map((prod, index) => {
      i++;
      let prodName = "";
      try {
        if (prod.name.length > 40) {
          prodName = prod.name.substring(0, 40);
          prodName = prodName + "...";
        } else {
          prodName = prod.name;
        }
      } catch (err) {}

      if (i == 1) {
        prods += `<div class="carousel-item ${index == 0 ? "active" : ""} ">`;
        prods += `<div class="row">`;
      }
      prods += `         
            <div class="col-lg-2 col-md-2 col-sm-4 col-4">
              
                <a href="##" class="text-decoration-none text-center d-block p-2 shadow-sm mx-auto">
                  <img
                    src=${prod.image}
                    class="img-fluid products-slider2-thumb mx-auto d-block my-2"
                  />
                  <h6 class="text-uppercase text-dark d-block fw-bold">
                    ${prodName}
                  </h6>
                  <p class="text-dark my-2">
                  </p>
                  <strong class="text-uppercase text-danger d-block my-2 fw-bold">
                   $ ${prod.price && prod.price != null ? prod.price : 0}
                  </strong>
                </a>
            </div>

      `;
      if (i == 6) {
        prods += `</div>`;
        prods += `</div>`;

        buttonIndicators += ` 
            <button type="button" data-bs-target="#products-slider-2"
             data-bs-slide-to=${j} class="
             ${j == 0 ? "active" : ""}
             bg-dark py-1" aria-current="true"
              aria-label="Slide ${j + 1}"></button>
        `;
        j++;
      }
      if (i == 6) i = 0;
    });
    const wrapper = editor.getWrapper();
    let el = wrapper.find("#slider2-prods-container")[0];
    el.components(prods.toString());

    el = wrapper.find("#slider-2-indicater")[0];
    el.components(buttonIndicators.toString());

    if (products && products.length > 6) {
      el = wrapper.find("#btnPrev")[0];
      el.removeClass("d-none");
      el = wrapper.find("#btnNxt")[0];
      el.removeClass("d-none");
    } else {
      el = wrapper.find("#btnPrev")[0];
      el.addClass("d-none");
      el = wrapper.find("#btnNxt")[0];
      el.addClass("d-none");
    }
  } catch (err) {
    const wrapper = editor.getWrapper();
    const el = wrapper.find("#slider2-prods-container")[0];
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
    const sliderHeading = wrapper.find("#slider2-products-heading")[0];
    sliderHeading.components(headingStr);
  } catch (err) {}
};
