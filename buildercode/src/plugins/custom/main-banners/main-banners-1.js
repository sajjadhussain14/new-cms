import { MainBanners } from "../../../components/custom/categories";
import { getDepts, getTyps } from "../../../API";

export default function mainBanners1(editor) {
  editor.BlockManager.add("main-banner-1", {
    label: `
        <i class="bi bi-card-image fs-4  p-2" title="Banners 1"></i>
    <div class="gjs-block-label ">Banners 1</div>

`,
    category: MainBanners,
    type: "main-banner-1",
    open: false,

    content: `                      
    <section id="carousel" class="main-banners1 main-comp"
        data-gjs-name="Main Banners 1" data-gjs-type="main-banner-1"
    data-gjs-id="main-banner-1"
    id="main-banner-1"

    >
        <div class="container-fluid p-0">
            <div class="row m-0">
                <div class="col-12 p-0">
                    <div id="mainBanners1CarouselControls" class="carousel slide" data-bs-ride="carousel">
                        <div id="main-banner-1-btn-indicators" class="carousel-indicators default-main-banners-indicators d-none">
                            <button type="button" data-bs-target="#mainBanners1CarouselControls" data-bs-slide-to="0" class="active default-main-banners-indicators-btn" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#mainBanners1CarouselControls" data-bs-slide-to="1" class="default-main-banners-indicators-btn" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#mainBanners1CarouselControls" data-bs-slide-to="2" class="default-main-banners-indicators-btn" aria-label="Slide 3"></button>
                          </div>
                        <div id="main-banners-1-container" class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="/images/main-banners/1.jpg" class="d-block w-100 img-fluid position-relative main-banners1-img" alt="Slider one">
                            <div class="main-banners1-overlay"> 
                                <h2 class="main-banners1-heading">BANNER TEXT</h2>
                                <p class="main-banners1-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>   
                                <a href="##" class="main-banners1-btn">SHOP NOW</a>
                            </div>
                          </div>
                        </div>
                        <button id="prevButton" class="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon d-none" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button id="nextButton" class="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                          <span class="carousel-control-next-icon d-none" aria-hidden="false"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                </div>
            </div>
        </div>
    </section>
          <style>
        .main-banners1{font-family: 'Montserrat', sans-serif;}
        .main-banners1-overlay{position: absolute;top: 50%; transform: translateY(-50%); left: 100px;margin: 0 auto;text-align: left;width:40%;} 
        .main-banners1-heading{font-size: 70px;color: #fff; margin-bottom: 15px;line-height: 70px;text-transform: uppercase; font-weight: bold;}
        .main-banners1-text{font-size: 27px;color: #fff;text-transform: capitalize;font-weight: 400;}
        .main-banners1-btn{display: inline-block;border-radius: 5px;text-transform: capitalize;margin: 0 auto;text-decoration: none;font-size: 17px;color: #000;text-align: center;width: 134px;height: 44px;line-height: 44px;background:#c5c5c5;font-weight:600;}
        .main-banners1-btn:hover{color: #000;}
        @media(max-width:991px)
        {
            .main-banners1-overlay{left: 60px!important;width:80%;}
            .main-banners1-heading{line-height: 50px;font-size: 50px;}
            .main-banners1-text{font-size: 17px;}
            .main-banners1-btn{height: 30px!important;font-size: 14px!important;line-height: 30px!important;}       
        }
        @media(max-width:767px)
        {
            .main-banners1-img{height: 240px;object-fit: cover;}
            .main-banners1-heading{line-height: 40px;font-size: 40px;}
            .main-banners1-text{font-size: 14px;}
        }
         @media(max-width:575px)
         {
            .main-banners1-overlay{left: 40px!important;}
            .main-banners1-heading{line-height: 30px;font-size: 30px;}
            .main-banners1-btn{width: 104px;}
         }
    </style>


`,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("main-banner-1", {
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
                            <img src="/images/main-banners/1.jpg" class="d-block w-100 img-fluid position-relative main-banners1-img" alt="Slider one">
                            <div class="main-banners1-overlay">
                           
                                <h2 class="main-banners1-heading">BANNER ${i} TEXT</h2>
                                <p class="main-banners1-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>   
                                <a href="##" class="main-banners1-btn">SHOP NOW</a>
                            </div>
                          </div>
      `;

    buttonIndicators += `

    <button type="button" data-bs-target="#mainBanners1CarouselControls" 
    data-bs-slide-to=${j} class="${isActive} default-main-banners-indicators-btn"
     aria-current="true" aria-label="Slide ${i}"></button>


    `;
  }
  let wrapper = editor.getWrapper();
  let el = wrapper.find("#main-banners-1-container")[0];
  // el.append(LinksGoups);
  el.components(banners);

  el = wrapper.find("#main-banner-1-btn-indicators")[0];
  el.removeClass("d-none");
  el.components(buttonIndicators);

  if (num == 1) {
    el = wrapper.find("#prevButton")[0];
    el.components("");

    el = wrapper.find("#nextButton")[0];
    el.components("");
  } else {
    el = wrapper.find("#prevButton")[0];
    el.components(`
                          <span class="carousel-control-prev-icon d-none" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
`);

    el = wrapper.find("#nextButton")[0];
    el.components(`         
                          <span class="carousel-control-next-icon d-none" aria-hidden="false"></span>
                          <span class="visually-hidden">Next</span>
`);
  }
};
