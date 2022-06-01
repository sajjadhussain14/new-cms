import { sliders } from "../../../components/custom/categories";

export default function brandsSlider1(editor) {
  editor.BlockManager.add("brands-slider-1", {
    label: `      
    
<i class="bi bi-sliders fs-4  p-2"></i>
    <div class="gjs-block-label "> Brands Slider 1</div>

`,
    category: sliders,
    type: "brands-slider-1",
    open: false,

    content: `
      <section
        id="brands-slider-1"
        class="carousel slide main-comp "
        data-bs-ride="carousel"
    data-gjs-name="brands slider 1"
    data-gjs-type="brands-slider-1"
    data-gjs-id="brands-slider-1"
      >
      <h2
      data-gjs-id="slider1-products-heading"
      id="slider1-products-heading"
      class="text-center default-brand-slider-text d-block bg-transparent w-auto pb-2 mb-5 mt-2"
    >BRANDS</h2>
    <div id="brands-slider-1-indicater" class="carousel-indicators bottom-0 mb-0">
    <button type="button" data-bs-target="#brands-slider-1" data-bs-slide-to="0" class="active bg-dark py-1" aria-current="true" aria-label="Slide 1"></button>
    </div>  

    <div class="carousel-inner" id="brandsContainer">
      <div class="carousel-item active">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-sm-3 col-3">
            <a href="##"><img src="/images/brand.png" class="default-brand-slider-img img-fluid d-block mx-auto"/></a>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-3 col-3">
            <a href="##"><img src="/images/brand.png" class="default-brand-slider-img img-fluid d-block mx-auto"/></a>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-3 col-3">
            <a href="##"><img src="/images/brand.png" class="default-brand-slider-img img-fluid d-block mx-auto"/></a>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-3 col-3">
            <a href="##"><img src="/images/brand.png" class="default-brand-slider-img img-fluid d-block mx-auto"/></a>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-3 col-3">
            <a href="##"><img src="/images/brand.png" class="default-brand-slider-img img-fluid d-block mx-auto"/></a>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-3 col-3">
            <a href="##"><img src="/images/brand.png" class="default-brand-slider-img img-fluid d-block mx-auto"/></a>
          </div>
        </div>
        </div>
        <div class="carousel-item">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-sm-3 col-3">
            <a href="##"><img src="/images/brand.png" class="default-brand-slider-img img-fluid d-block mx-auto"/></a>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-3 col-3">
            <a href="##"><img src="/images/brand.png" class="default-brand-slider-img img-fluid d-block mx-auto"/></a>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-3 col-3">
            <a href="##"><img src="/images/brand.png" class="default-brand-slider-img img-fluid d-block mx-auto"/></a>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-3 col-3">
            <a href="##"><img src="/images/brand.png" class="default-brand-slider-img img-fluid d-block mx-auto"/></a>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-3 col-3">
            <a href="##"><img src="/images/brand.png" class="default-brand-slider-img img-fluid d-block mx-auto"/></a>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-3 col-3">
            <a href="##"><img src="/images/brand.png" class="default-brand-slider-img img-fluid d-block mx-auto"/></a>
          </div>
        </div>
      </div>
    </div>

  <button id="btnPrev" class="d-none carousel-control-prev text-dark w-auto left-0 border-0" type="button" data-bs-target="#brands-slider-1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bg-dark p-3" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button id="btnNxt" class="d-none carousel-control-next text-dark w-auto right-0 border" type="button" data-bs-target="#brands-slider-1" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-dark p-3" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
     
    </section>

    `,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("brands-slider-1", {
    model: defaultModel.extend(
      {
        init() {
          this.listenTo(this, "change:brandQty", this.getBrandsQty);
        },
        getBrandsQty() {
          let brandsLimit = 4;
          brandsLimit = this.get("traits")
            .where({
              name: "brandQty",
            })[0]
            .get("value");
          if (!brandsLimit || brandsLimit == "") brandsLimit = 4;
          getBrandsViews(editor, brandsLimit);
        },

        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          traits: [
            {
              label: "Brands",
              name: "brandQty",
              id: "brandQty",
              type: "select",
              options: [
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
          if (el.tagName == "nds-slider-1") {
            return {
              type: "nds-slider-1",
            };
          }
        },
      }
    ),
    view: defaultModel.view,
  });
}

const getBrandsViews = (editor, num) => {
  let prods = "";
  let i = 0;
  let k = 0;
  let buttonIndicators = "";

  if (num && num > 0) {
  } else {
    const wrapper = editor.getWrapper();
    const el = wrapper.find("#brandsContainer")[0];
    el.components("No brands Quantity Set");
  }
  try {
    for (let j = 1; j <= num; j++) {
      i++;

      if (i == 1) {
        prods += `<div class="carousel-item ${j == 1 ? "active" : ""} ">`;
        prods += `<div class="row">`;
      }
      prods += `                      
           <div class="col-lg-2 col-md-2 col-sm-3 col-3">
                <a href="##">
                  <img src="/images/brand.png" class="default-brand-slider-img img-fluid d-block mx-auto"/></a>
                </a>
            </div>
 

      `;
      if (i == 6) {
        prods += `</div>`;
        prods += `</div>`;

        buttonIndicators += ` 
    <button type="button" data-bs-target="#brands-slider-1"
     data-bs-slide-to=${k} class=" ${k == 0 ? "active" : ""}
 bg-dark py-1" aria-current="true" 
     aria-label="Slide ${k + 1}"></button>
        `;
        k++;
      }
      if (i == 6) i = 0;
    }
    const wrapper = editor.getWrapper();
    let el = wrapper.find("#brandsContainer")[0];
    el.components(prods.toString());
    el = wrapper.find("#brands-slider-1-indicater")[0];
    el.components(buttonIndicators.toString());

    if (num && num > 6) {
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
    console.log(err);
    const wrapper = editor.getWrapper();
    const el = wrapper.find("#brandsContainer")[0];
    el.components("No brands Found");
  }
};
