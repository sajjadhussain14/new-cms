import { miniBanners } from "../../../components/custom/categories";
import { getDepts, getTyps } from "../../../API";

export default function miniBanners1(editor) {
  editor.BlockManager.add("mini-banners-5", {
    label: `                
        <i class="bi bi-card-image fs-4  p-2" title="Banners 5"></i>
    <div class="gjs-block-label ">Banners 5</div>

`,
    category: miniBanners,
    type: "mini-banners-5",
    open: false,

    content: `                      
        <section  class="mini-banners-5 d-block main-comp"
        data-gjs-name="Mini Banners 5" data-gjs-type="mini-banners-5" data-gjs-id="mini-banners-5" id="mini-banners-5"
        
        >
            <div class="container-fluid p-0">
                <div class="row m-0">
                    <div
                        class="col-lg-6 col-md-12 col-sm-12 col-12 position-relative mini-banners-5-firstMainBanner mini-banners-5-p-a">
                        <span  class="mini-banners-5-p-a-a">
                            <img src="/images/mini-banners/m4.jpg"
                                class="img-fluid h-100 mini-banners-5-img" alt="Women Fashion">
                            <div class="mini-banners-5-firstBanner">
                                <h2 class="mini-banners-5-firstBanner-h2">Women’s fashion</h2>
                                <p class="mini-banners-5-p">We believe that if you look good, you feel good. And when
                                    you
                                    feel good you can do
                                    good for others around you.</p>
                                <strong class="mini-banners-5-link">
                              <a href="#" class="text-decoration-none">
                                SHOP NOW
                             </a>   
                                </strong>
                            </div>
                        </span>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12 fourBanner mini-banners-5-p-a">
                        <div class="row">
                            <div
                                class="col-lg-6 col-md-6 col-sm-12 col-12 position-relative mini-banners-5-banner mini-banners-5-p-b">
                                <span class="mini-banners-5-p-a-a mini-banners-5-p-b-a">
                                    <img src="/images/mini-banners/m4.jpg"
                                        class="img-fluid mini-banners-5-img" alt="Men fashion">
                                    <div class="mini-banners-5-subBanner">
                                        <h3 class="mini-banners-5-subBanner-h3">Men's fashion</h3>
                                        <p class="mini-banners-5-p">look good, feel good</p>
                                        <strong class="mini-banners-5-link">
                                         <a href="#" class="text-decoration-none">
                                             SHOP NOW
                                        </a>
                                        </strong>
                                    </div>
                                </span>
                            </div>
                            <div
                                class="col-lg-6 col-md-6 col-sm-12 col-12 position-relative mini-banners-5-banner mini-banners-5-p-b">
                                <span class="mini-banners-5-p-b-a">
                                    <img src="/images/mini-banners/m4.jpg"
                                        class="img-fluid mini-banners-5-img" alt="Kids Fashion">
                                    <div class="mini-banners-5-subBanner">
                                        <h3 class="mini-banners-5-subBanner-h3">Kid's fashion</h3>
                                        <p class="mini-banners-5-p">look good, feel good</p>
                                        <strong class="mini-banners-5-link">
                                         <a href="#" class="text-decoration-none">
                                        SHOP NOW
                                        </a>
                                        </strong>
                                    </div>
                                </span>
                            </div>
                            <div
                                class="col-lg-6 col-md-6 col-sm-12 col-12 position-relative mini-banners-5-banner mini-banners-5-p-b">
                                <span class="mini-banners-5-p-b-a">
                                    <img src="/images/mini-banners/m4.jpg"
                                        class="img-fluid mini-banners-5-img" alt="Cosmetics">
                                    <div class="mini-banners-5-subBanner">
                                        <h3 class="mini-banners-5-subBanner-h3">Costemics</h3>
                                        <p class="mini-banners-5-p">look good, feel good</p>
                                        <strong class="mini-banners-5-link">
                                        <a href="#" class="text-decoration-none">
                                        SHOP NOW
                                        </a>
                                        </strong>
                                    </div>
                                </span>
                            </div>
                            <div
                                class="col-lg-6 col-md-6 col-sm-12 col-12 position-relative mini-banners-5-banner mini-banners-5-p-b ">
                                <span class="mini-banners-5-p-b-a">
                                    <img src="/images/mini-banners/m4.jpg"
                                        class="img-fluid mini-banners-5-img" alt="Accessories">
                                    <div class="mini-banners-5-subBanner">
                                        <h3 class="mini-banners-5-subBanner-h3">Accessories</h3>
                                        <p class="mini-banners-5-p">look good, feel good</p>
                                        <strong class="mini-banners-5-link">
                                        <a href="#" class="text-decoration-none">
                                        SHOP NOW
                                        </a>
                                        </strong>
                                    </div>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
<style>
.mini-banners-5 {
                font-family: "Montserrat", sans-serif;
                overflow: hidden;
            }

            .mini-banners-5-img {
                width: 100%;
                transition: ease-in .5s;
            }

            .mini-banners-5-img:hover {
                transform: scale(1.1);
            }

            .mini-banners-5-firstMainBanner {
                margin-bottom: 7.5px;
            }

            .mini-banners-5-firstBanner {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 45px;
                right: 0px;
                width: 80%;
                padding: 15px;
            }

            .mini-banners-5-firstBanner-h2 {
                font-family: 'Cookie', cursive;
                color: #111111;
            }

            .mini-banners-5-p {
                font-size: 14px;
                font-family: 'Montserrat', sans-serif;
                color: #666666;
                font-weight: 400;
                line-height: 24px;
            }

            .mini-banners-5-link {
                text-decoration: none;
                font-size: 14px;
                color: #111111;
                text-transform: uppercase;
                font-weight: 600;
                border-bottom: 1px solid red !important;
                display: inline-block;
                width: auto;
            }

            .mini-banners-5-subBanner {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 28px;
                right: 0px;
                width: 80%;
                padding: 15px;
            }

            .mini-banners-5-subBanner-h3 {
                font-size: 24px;
                color: #111111;
                font-weight: 700;
            }

            .mini-banners-5-banner {
                margin-bottom: 7.5px;
            }

            .mini-banners-5-p-a {
                padding: 0 7.5px;
            }

            .mini-banners-5-p-a-a {
                overflow: hidden;
                position: relative;
                display: block;
                border: 0px !important;
                height: 100%;
            }

            .mini-banners-5-p-b {
                padding: 0 5px;
            }

            .mini-banners-5-p-b-a {
                overflow: hidden;
                position: relative;
                display: block;
                border: 0px !important;
                height: 100%;
            }
<style>

`,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("mini-banners-5", {
    model: defaultModel.extend(
      {
        init() {},

        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          traits: [{}],
        }),
      },
      {
        isComponent: function (el) {
          if (el.tagName == "") {
            return {
              type: "",
            };
          }
        },
      }
    ),
    view: defaultModel.view,
  });
}
