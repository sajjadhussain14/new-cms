import { MainBanners } from "../../../components/custom/categories";
import { getDepts, getTyps } from "../../../API";

export default function mainBannersDefault(editor) {
  editor.BlockManager.add("main-banner-default", {
    label: `       
    
    <i class="bi bi-card-image fs-4  p-2" title="Banners Default"></i>
    <div class="gjs-block-label ">Banners Default</div>

`,
    category: MainBanners,
    type: "main-banner-default",
    open: false,

    content: `                      
    <section id="carousel" class="default-main-banners mt-2 main-comp"
    data-gjs-name="Main Banners Default" data-gjs-type="main-banner-default"
    data-gjs-id="main-banner-default"
    id="main-banner-default"

    >
      <div class="container-fluid p-0" >
        <div class="row m-0">
          <div class="col-12 p-0">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div id="btn-indicators" class="carousel-indicators default-main-banners-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                  class="active default-main-banners-indicators-btn" aria-current="true" aria-label="Slide 1"></button>
              </div>
              <div class="carousel-inner" id="main-banners-default-container" data-gjs-id="main-banners-default-container">
                <div class="carousel-item active">
                  <img src="/images/main-banners/1.jpg" class="d-block w-100 img-fluid position-relative default-banner-img" alt="...">
                  <div class="default-main-banners-overlay">

                    <h2 class="default-main-banners-heading">BANNER <p class="default-main-banners-hspan">
                        TEXT</p></h2>
                    <p class="default-main-banners-text">Goes Here</p>
                    <a href="##" class="default-main-banners-btn">SHOP NOW</a>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="/images/main-banners/1.jpg" class="d-block w-100 img-fluid position-relative default-banner-img" alt="...">
                  <div class="default-main-banners-overlay">

                    <h2 class="default-main-banners-heading">BANNER <p class="default-main-banners-hspan">
                        TEXT</p></h2>
                    <p class="default-main-banners-text">Goes Here</p>
                    <a href="##" class="default-main-banners-btn">SHOP NOW</a>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="/images/main-banners/1.jpg" class="d-block w-100 img-fluid position-relative default-banner-img" alt="...">
                  <div class="default-main-banners-overlay">

                    <h2 class="default-main-banners-heading">BANNER <p class="default-main-banners-hspan">
                        TEXT</p></h2>
                    <p class="default-main-banners-text">Goes Here</p>
                    <a href="##" class="default-main-banners-btn">SHOP NOW</a>
                  </div>
                </div>

                </div>
                <button id="prevButton" class="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"
                  data-bs-slide="prev">
                  <span aria-hidden="true">
                    <i class="default-main-banners-icons fas fa-angle-left"></i>
                </button>
                <button class="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"
                  data-bs-slide="next"
                          id="nextButton"
                data-gjs-id="nextButton"

                  >
                  <span aria-hidden="true">
                    <i class="default-main-banners-icons fas fa-angle-right"></i></span>
                </button>

            </div>
          </div>
        </div>
      </div>
    </section>
    <style>
      .default-main-banners {
        font-family: 'Montserrat', sans-serif;
      }

      .default-main-banners-overlay {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0px;
        right: 0px;
        margin-top: 0px;
        margin-right: auto;
        margin-bottom: 0px;
        margin-left: auto;
        text-align: center;
        width: 60vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
 .default-main-banners-overlay:after{
        content:"-";
        display:none;
        position:absolute;
        width:100vw!important;

        top:0;
                background: rgb(0,0,0,.3);
        height: 100%;

      }

      .default-main-banners-heading {
        font-size: 70px;
        color: #E1CC25;
        margin-bottom: 15px;
        line-height: 70px;
        text-transform: uppercase;
        font-weight: bold;
      }

      .default-main-banners-hspan {
        font-size: 70px;
        color: #fff;
        margin-bottom: 0px;
        line-height: 70px;
        text-transform: uppercase;
        font-weight: bold;
        display:inline-block;
      }

      .default-main-banners-text {
        font-size: 27px;
        color: #fff;
        text-transform: capitalize;
        font-weight: 600;
      }

      .default-main-banners-btn {
        display: block;
        border-radius: 5px;
        text-transform: capitalize;
        margin: 0 auto;
        text-decoration: none;
        font-size: 16px;
        color: #000;
        text-align: center;
        width: 134px;
        height: 44px;
        line-height: 44px;
        background: #E1CC25;
        font-weight:600;
      }

      .default-main-banners-btn:hover {
        color: #000;
      }

      .default-main-banners-indicators-btn {
        height: 14px !important;
        width: 14px !important;
        background: transparent !important;
        border-radius: 10px !important;
        margin: 0 2.5px !important;
        border: 2px solid #E1CC25 !important;
      }

     .default-main-banners .active {
        background: #E1CC25 !important;
      }

      .default-main-banners-icons {
        font-size: 80px;
        color: #E1CC25;
      }

      @media(max-width:767px) {
        .default-main-banners-indicators {
          margin-bottom: 1%;
        }

        .default-main-banners-icons {
          font-size: 60px;
        }
       .default-banner-img {height: 240px;object-fit: cover;}
      }

      @media(max-width:575px) {
        .default-main-banners-heading {
          line-height: 24px;
          font-size: 24px;
        }

        .default-main-banners-hspan {
          line-height: 24px;
          font-size: 24px;
        }

        .default-main-banners-text {
          font-size: 20px;
        }

        .default-main-banners-btn {
          height: 30px !important;
          font-size: 14px !important;
          line-height: 30px !important;
        }

        .default-main-banners-indicators-btn {
          bottom: -5%;
        }

        .default-main-banners-icons {
          font-size: 45px;
        }
      }
    </style>


`,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("main-banner-default", {
    model: defaultModel.extend(
      {
        init() {
          this.listenTo(this, "change:noOfBanners", this.getBanners);
        },

        getBanners() {
          let bannersLimit = 4;
          bannersLimit = this.get("traits")
            .where({
              name: "noOfBanners",
            })[0]
            .get("value");
          if (!bannersLimit || bannersLimit == "") bannersLimit = 8;
          getBannersViews(editor, bannersLimit);
        },

        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          traits: [
            {
              label: "Banners",
              name: "noOfBanners",
              id: "noOfBanners",
              type: "select",
              options: [
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

const getBannersViews = (editor, num) => {
  let banners = "";
  let buttonIndicators = "";
  let j = 1;
  let isActive = "";
  for (let i = 1; i <= num; i++) {
    j = i - 1;
    if (i == 1) {
      isActive = "active";
    } else {
      isActive = "";
    }
    banners += `
                      <div class="carousel-item ${isActive}">
                  <img src="/images/main-banners/1.jpg" class="d-block w-100 img-fluid position-relative default-banner-img" alt="...">
                  <div class="default-main-banners-overlay">

                    <h2 class="default-main-banners-heading">BANNER ${i} <span class="default-main-banners-hspan">
                        TEXT</span></h2>
                    <p class="default-main-banners-text">Goes Here</p>
                    <a href="##" class="default-main-banners-btn">SHOP NOW</a>
                  </div>
                </div>

      `;

    buttonIndicators += `
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to=${j}
      class="${isActive} default-main-banners-indicators-btn" aria-current="true" aria-label=Slide${i}>
      </button>

    `;
  }
  let wrapper = editor.getWrapper();
  let el = wrapper.find("#main-banners-default-container")[0];
  el.components(banners);

  el = wrapper.find("#btn-indicators")[0];
  el.components(buttonIndicators);

  if (num == 1) {
    el = wrapper.find("#prevButton")[0];
    el.components("");

    el = wrapper.find("#nextButton")[0];
    el.components("");
  } else {
    el = wrapper.find("#prevButton")[0];
    el.removeClass("d-none");
    el.components(`
                  <span aria-hidden="true">
                    <i class="default-main-banners-icons fas fa-angle-left"></i>
`);

    el = wrapper.find("#nextButton")[0];
    el.removeClass("d-none");

    el.components(`         
                  <span aria-hidden="true" >
                    <i class="default-main-banners-icons fas fa-angle-right"></i></span>
`);
  }
};
