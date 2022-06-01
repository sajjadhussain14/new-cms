import { miniBanners } from "../../../components/custom/categories";
import { getDepts, getTyps } from "../../../API";

export default function miniBanners1(editor) {
  editor.BlockManager.add("mini-banners-default", {
    label: `    
    <i class="bi bi-card-image fs-4  p-2" title="Banners Default"></i>
    <div class="gjs-block-label ">Banners Default</div>


`,
    category: miniBanners,
    type: "mini-banners-default",
    open: false,

    content: `                      
        <section id="mainBanner" class="default-minibanners main-comp"
        data-gjs-name="Mini Banners Default" data-gjs-type="mini-banners-default" data-gjs-id="mini-banners-default" id="mini-banners-default"
        >
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12 col-12 position-relative my-2">
                    <a href="##">
                        <img src="/images/mini-banners/1.jpg" alt="First-Banner" class="img-fluid w-100">
                        <div class="default-minibanners-overlay">
                            <h3 class="default-minibanners-heading">Placeholder header</h3>
                            <p class="default-minibanners-text">your text goes here</p>
                            <strong class="default-minibanners-btn">Shop Now</strong>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-12 position-relative my-2">
                    <a href="##">
                        <img src="/images/mini-banners/2.jpg" alt="First-Banner" class="img-fluid w-100">
                        <div class="default-minibanners-overlay">
                            <h3 class="default-minibanners-heading">Placeholder header</h3>
                            <p class="default-minibanners-text">your text goes here</p>
                            <strong class="default-minibanners-btn">Shop Now</strong>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-12 position-relative my-2">
                    <a href="##">
                        <img src="/images/mini-banners/5.jpg" alt="First-Banner" class="img-fluid w-100">
                        <div class="default-minibanners-overlay">
                            <h3 class="default-minibanners-heading">Placeholder header</h3>
                            <p class="default-minibanners-text">ammunition</p>
                            <strong class="default-minibanners-btn">Shop Now</strong>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <style>
        .container{    max-width: 1310px;}
        .default-minibanners{font-family: 'Montserrat', sans-serif;}
        .default-minibanners-overlay{position: absolute;top: 0%;right: 0;margin: 0 15px;height: 100%;padding-right: 10px;}
        .default-minibanners-heading{font-size: 18px;color: #fff;text-transform: uppercase;display: block;line-height: 40px;text-align: right; font-weight: bold;margin-bottom: 0px;}
        .default-minibanners-btn{position: absolute;right: 45px;bottom: 10%;display: block;border-radius: 5px;text-transform: capitalize;margin: 0 auto;text-decoration: none;font-size: 18px;color: #000;text-align: center;width: 134px;height: 44px;line-height: 44px;background:#c5c5c5;font-weight:400;}
        .default-minibanners-text{font-weight: bold;font-size: 16px;color: #fff;text-transform: uppercase;display: block;margin-top: 0px;text-align: right;}
        @media (max-width: 991px)
        {
            .default-minibanners-heading{font-size: 25px;line-height: normal;}
            .default-minibanners-text{font-size: 14px;}
        }
    </style>

`,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("mini-banners-default", {
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
