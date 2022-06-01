import { prodGrids } from "../../../components/custom/categories";
import { getDepts, getHomePageProducts } from "../../../API";

export default function productsGrid1(editor) {
  editor.BlockManager.add("products-grid-1", {
    label: `        
<i class="bi bi-grid-3x3-gap fs-4  p-2" title="Products Grid 1"></i>
    <div class="gjs-block-label ">Grid 1</div>

  `,
    category: prodGrids,
    type: "products-grid-1",
    open: false,

    content: `
      <section id="products-grid-1" class="prodgrid1 main-comp"

        data-gjs-name="products Grid 1"
        data-gjs-type="products-grid-1"
        data-gjs-id="products-grid-1"

      >
            <div class="container">
              <div class="row"> 
                <div class="col-lg-6 col-md-4 col-sm-12 col-12 prodgrid1-mainhead">
                  <h2 id="grid1-products-heading1" class="prodgrid1-mainhead-h2">Product</h2>
                </div>
                <div class="col-lg-6 col-md-8 col-sm-12 col-12 prodgrid1-links d-flex justify-content-between align-items-center">
                </div>
              </div>
              <div class="row products-holder" id="prodsGrid1Container"> 
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12 prodgrid1-grid position-relative">
                    <div class="prodgrid1-btn mb-lg-4">
                    <img src="/images/dummy.jpg" class="prodgrid1-thumb img-fluid w-100" alt="tweed blazer">
                    <span class="prodgrid1-grid-span d-inline-block">
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-expand-alt"></i></a>
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-shopping-bag"></i></a>
                    </span>
                    </div>
                    <em class="prodgrid1-grid-em">New</em>
                    <p class="prodgrid1-grid-p">Buttons Tweed blazed</p>
                    <div class="d-flex justify-content-center">
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                    </div>
                    <strong class="prodgrid1-grid-strong text-center d-block">$ 59.0</strong>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12 prodgrid1-grid position-relative">
                    <div class="prodgrid1-btn mb-lg-4">
                    <img src="/images/dummy.jpg" class="img-fluid w-100" alt="tweed blazer">
                    <span class="prodgrid1-grid-span d-inline-block">
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-expand-alt"></i></a>
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-shopping-bag"></i></a>
                    </span>
                    </div>
                    <em class="prodgrid1-grid-em">New</em>
                    <p class="prodgrid1-grid-p">Buttons Tweed blazed</p>
                    <div class="d-flex justify-content-center">
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                    </div>
                    <strong class="prodgrid1-grid-strong text-center d-block">$ 59.0</strong>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12 prodgrid1-grid position-relative">
                    <div class="prodgrid1-btn mb-lg-4">
                    <img src="/images/dummy.jpg" class="img-fluid w-100" alt="tweed blazer">
                    <span class="prodgrid1-grid-span d-inline-block">
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-expand-alt"></i></a>
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-shopping-bag"></i></a>
                    </span>
                    </div>
                    <em class="prodgrid1-grid-em">New</em>
                    <p class="prodgrid1-grid-p">Buttons Tweed blazed</p>
                    <div class="d-flex justify-content-center">
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                    </div>
                    <strong class="prodgrid1-grid-strong text-center d-block">$ 59.0</strong>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12 prodgrid1-grid position-relative">
                    <div class="prodgrid1-btn mb-lg-4">
                    <img src="/images/dummy.jpg" class="img-fluid w-100" alt="tweed blazer">
                    <span class="prodgrid1-grid-span d-inline-block">
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-expand-alt"></i></a>
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-shopping-bag"></i></a>
                    </span>
                    </div>
                    <em class="prodgrid1-grid-em">New</em>
                    <p class="prodgrid1-grid-p">Buttons Tweed blazed</p>
                    <div class="d-flex justify-content-center">
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                    </div>
                    <strong class="prodgrid1-grid-strong text-center d-block">$ 59.0</strong>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12 prodgrid1-grid position-relative">
                    <div class="prodgrid1-btn mb-lg-4">
                    <img src="/images/dummy.jpg" class="img-fluid w-100" alt="tweed blazer">
                    <span class="prodgrid1-grid-span d-inline-block">
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-expand-alt"></i></a>
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-shopping-bag"></i></a>
                    </span>
                    </div>
                    <em class="prodgrid1-grid-em">New</em>
                    <p class="prodgrid1-grid-p">Buttons Tweed blazed</p>
                    <div class="d-flex justify-content-center">
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                    </div>
                    <strong class="prodgrid1-grid-strong text-center d-block">$ 59.0</strong>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12 prodgrid1-grid position-relative">
                    <div class="prodgrid1-btn mb-lg-4">
                    <img src="/images/dummy.jpg" class="img-fluid w-100" alt="tweed blazer">
                    <span class="prodgrid1-grid-span d-inline-block">
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-expand-alt"></i></a>
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-shopping-bag"></i></a>
                    </span>
                    </div>
                    <em class="prodgrid1-grid-em">New</em>
                    <p class="prodgrid1-grid-p">Buttons Tweed blazed</p>
                    <div class="d-flex justify-content-center">
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                    </div>
                    <strong class="prodgrid1-grid-strong text-center d-block">$ 59.0</strong>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12 prodgrid1-grid position-relative">
                    <div class="prodgrid1-btn mb-lg-4">
                    <img src="/images/dummy.jpg" class="img-fluid w-100" alt="tweed blazer">
                    <span class="prodgrid1-grid-span d-inline-block">
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-expand-alt"></i></a>
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-shopping-bag"></i></a>
                    </span>
                    </div>
                    <em class="prodgrid1-grid-em">New</em>
                    <p class="prodgrid1-grid-p">Buttons Tweed blazed</p>
                    <div class="d-flex justify-content-center">
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                    </div>
                    <strong class="prodgrid1-grid-strong text-center d-block">$ 59.0</strong>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12 prodgrid1-grid position-relative">
                    <div class="prodgrid1-btn mb-lg-4">
                    <img src="/images/dummy.jpg" class="img-fluid w-100" alt="tweed blazer">
                    <span class="prodgrid1-grid-span d-inline-block">
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-expand-alt"></i></a>
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-shopping-bag"></i></a>
                    </span>
                    </div>
                    <em class="prodgrid1-grid-em">New</em>
                    <p class="prodgrid1-grid-p">Buttons Tweed blazed</p>
                    <div class="d-flex justify-content-center">
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                    </div>
                    <strong class="prodgrid1-grid-strong text-center d-block">$ 59.0</strong>
                  </div>
              </div>
           </div>
          </div>  
       </section>
           <style>
       .prodgrid1 {font-family: 'Montserrat', sans-serif;}
       .prodgrid1-mainhead-h2{font-size: 24px; color: #111;font-weight: 600;text-transform: uppercase; margin: 30px 0px;position: relative;}
       .prodgrid1-mainhead-h2::after {content: "-";position: absolute;bottom: 0px;left: 0px;width: 74px;display: block;border-bottom: 2px solid red;font-size: 0px;}
       .prodgrid1-links-a{text-decoration: none;font-size: 14px; color: #111;position: relative; cursor: pointer;}
       .prodgrid1-links-active::after {position: absolute;left: 0;bottom: -4px;height: 2px;width: 100%;background: #ca1515;content: "";}
       .prodgrid1-grid:hover span {bottom: 15%;} 
       .prodgrid1-thumb {max-width:270px;}
       .prodgrid1-grid-em {position: absolute; top: 10px; left: 22px;color: #fff; border: 1px solid #36a300; background: #36a300; display: inline-block;font-size: 12px; padding: 2px 8px;font-weight: 500;text-transform: uppercase;font-style: unset}
       .prodgrid1-grid-span {position: absolute;left: 0;bottom: -150px;right:0;margin:0 auto;bottom: -150px;transition: ease-in .6s;text-align: center;}
       .prodgrid1-grid-span-a-i {font-size: 18px;color: #111111;height: 45px;width: 45px;background: #ffffff;line-height: 45px;text-align: center;border-radius: 50%;margin-right: 5px;}
       .prodgrid1-grid-span-a-i:hover{animation:ease-in .2s rotate;background:#ca1515;color:#fff;}
      @keyframes rotate {
                          0%   {transform: rotate(0deg);}
                          25%  {transform: rotate(90deg);}
                          50%  {transform: rotate(180deg);}
                          75%  {transform: rotate(270deg);}
                          100% {transform: rotate(360deg);}
                        }
       .prodgrid1-grid-p {font-size: 14px;color: #111111; text-decoration: none;text-align: center;line-height: 16px;line-height: 27px;margin-bottom: 0px;}
       .prodgrid1-grid-i {font-size: 10px;color: #e3c01c;}
       .prodgrid1-grid-strong {font-weight: 600;line-height: 40px;font-size: 16px;}
       .prodgrid1-btn {position: relative;overflow: hidden;}
      @media(max-width:991px)
      {
         .prodgrid1-links {margin-bottom: 20px;}
      }
      
    </style>
    `,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("products-grid-1", {
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
          let prodsLimit = 4;
          prodsLimit = this.get("traits")
            .where({
              name: "noOfProds",
            })[0]
            .get("value");
          if (!prodsLimit || prodsLimit == "") prodsLimit = 4;
          e.addAttributes({ prodGrid1QTY: prodsLimit });

          try {
            let prodsLimit = 4;
            prodsLimit = this.get("traits")
              .where({
                name: "noOfProds",
              })[0]
              .get("value");
            if (!prodsLimit || prodsLimit == "") prodsLimit = 4;

            let sourceInputValue = "";
            sourceInputValue = this.get("traits")
              .where({
                name: "productsDataSource",
              })[0]
              .get("value");
            if (!sourceInputValue || sourceInputValue == "")
              sourceInputValue = "";
            e.addAttributes({ prodsGrid1DSource: sourceInputValue });

            if (sourceInputValue == "categories") {
              // START UPDATE SLIDER HEADING
              updateSliderHeading(editor, sourceInputValue);
              // END UPDATE SLIDER HEADING

              getDepts(20).then((cats) => {
                addCategories(e, cats);
              });
            } else {
              e.removeTrait("sourceCategoriesAttr");

              // START UPDATE SLIDER HEADING
              if (sourceInputValue && sourceInputValue != "") {
                updateSliderHeading(editor, sourceInputValue);
              }
              // END UPDATE SLIDER HEADING
              if (sourceInputValue && sourceInputValue != "") {
                getHomePageProducts(sourceInputValue, prodsLimit).then(
                  (products) => {
                    displayHomeProducts(editor, products);
                  }
                );
              }
            }
          } catch (err) {}
        },

        getsliderprodSource(e) {
          let catOptions = [];

          let prodsLimit = 4;
          prodsLimit = this.get("traits")
            .where({
              name: "noOfProds",
            })[0]
            .get("value");
          if (!prodsLimit || prodsLimit == "") prodsLimit = 4;

          let sourceInputValue = "";
          sourceInputValue = this.get("traits")
            .where({
              name: "productsDataSource",
            })[0]
            .get("value");
          if (!sourceInputValue || sourceInputValue == "")
            sourceInputValue = "";
          e.addAttributes({ prodsGrid1DSource: sourceInputValue });

          if (sourceInputValue == "categories") {
            // START UPDATE SLIDER HEADING
            updateSliderHeading(editor, sourceInputValue);
            // END UPDATE SLIDER HEADING

            getDepts(20).then((cats) => {
              addCategories(e, cats);
            });
          } else {
            e.removeTrait("sourceCategoriesAttr");

            // START UPDATE SLIDER HEADING
            updateSliderHeading(editor, sourceInputValue);
            // END UPDATE SLIDER HEADING

            getHomePageProducts(sourceInputValue, prodsLimit).then(
              (products) => {
                displayHomeProducts(editor, products);
              }
            );
          }
        },

        getsliderCatProds(e) {
          let prodsLimit = 4;
          prodsLimit = this.get("traits")
            .where({
              name: "noOfProds",
            })[0]
            .get("value");
          if (!prodsLimit || prodsLimit == "") prodsLimit = 4;

          let sourceInputValue = "";
          sourceInputValue = this.get("traits")
            .where({
              name: "productsDataSource",
            })[0]
            .get("value");
          if (!sourceInputValue || sourceInputValue == "")
            sourceInputValue = "any";

          let sourceCategory = this.get("traits")
            .where({
              name: "sourceCategoriesAttr",
            })[0]
            .get("value");
          if (!sourceCategory || sourceCategory == "") sourceCategory = "";
          e.addAttributes({ prodGrid1dataCategory: sourceCategory });

          updateSliderHeading(editor, sourceCategory);
          getHomePageProducts(sourceCategory, prodsLimit).then((products) => {
            displayHomeProducts(editor, products);
          });
        },

        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          traits: [
            {
              label: "Products",
              name: "noOfProds",
              id: "noOfProds",
              type: "select",
              options: [
                {
                  id: "4",
                  name: "4",
                },
                {
                  id: "8",
                  name: "8",
                },
                {
                  id: "12",
                  name: "12",
                },
              ],
              changeProp: 1,
            },

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
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12 prodgrid1-grid position-relative">
                    <div class="prodgrid1-btn mb-lg-4">
                    <img src=${
                      prod.image
                    } class="img-fluid w-100 prodgrid1-thumb" alt="tweed blazer">
                    <span class="prodgrid1-grid-span d-inline-block">
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-expand-alt"></i></a>
                      <a href="##"><i class="prodgrid1-grid-span-a-i fas fa-shopping-bag"></i></a>
                    </span>
                    </div>
                    ${
                      prod.date > 2019 ? (
                        <em class="prodgrid1-grid-em">New</em>
                      ) : (
                        ""
                      )
                    }
                    

                    <p class="prodgrid1-grid-p">${prod.name}</p>
                    <div class="d-flex justify-content-center">
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                      <i class="prodgrid1-grid-i fa fa-star"></i>
                    </div>
                    <strong class="prodgrid1-grid-strong text-center d-block">$ 
                    ${prod.price}</strong>
                  </div>

      `;
    });
    const wrapper = editor.getWrapper();
    const el = wrapper.find("#prodsGrid1Container")[0];
    el.components(prods.toString());
  } catch (err) {
    const wrapper = editor.getWrapper();
    const el = wrapper.find("#prodsGrid1Container")[0];
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
    const sliderHeading = wrapper.find("#grid1-products-heading1")[0];
    sliderHeading.components(headingStr);
  } catch (err) {}
};
