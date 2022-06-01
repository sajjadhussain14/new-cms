import { miniBanners } from "../../../components/custom/categories";
import { getDepts, getTyps } from "../../../API";

export default function miniBanners1(editor) {
  editor.BlockManager.add("mini-banners-1", {
    label: `                
        <i class="bi bi-card-image fs-4  p-2" title="Banners 1"></i>
    <div class="gjs-block-label ">Banners 1</div>

`,
    category: miniBanners,
    type: "mini-banners-1",
    open: false,

    content: `                      
<section data-gjs-name="Mini Banners 1" data-gjs-type="mini-banners-1" data-gjs-id="mini-banners-1" id="mini-banners-1"  class="d-block main-comp" >
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-md-6 com-sm-6 col-12 mb-3">
                <div class="inner position-relative">
                    <a href="">
                        <img class="img-fluid" src="/images/mini-banners/1.jpg" alt="image"/>
                    </a>
                    <div class="carousel-caption d-none d-md-block position-absolute top-50 start-50 translate-middle">
                        <h3 class="display-5 mini-banner-1-heading">heading</h3>
                        <p class="mini-banner-1-text">Sub text goes here</p>
                        <a href="##" class="text-decoration-none text-light btn btn-danger">Link Here</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 com-sm-6 col-12 mb-3">
                <div class="inner position-relative">
                    <a href="">
                        <img class="img-fluid" src="/images/mini-banners/2.jpg" alt="image"/>
                    </a>
                    <div class="carousel-caption d-none d-md-block position-absolute top-50 start-50 translate-middle">
                        <h3 class="display-5 mini-banner-1-heading">heading</h3>
                        <p class="mini-banner-1-text">Sub text goes here</p>
                        <a href="##" class="text-decoration-none text-light btn btn-danger">Link Here</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<style>
.mini-banner-1-heading{text-transform:uppercase;font-weight:600;color:#fff;}
.mini-banner-1-text{font-size:18px; color:#fff;font-weight:500;}
</style>


`,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("main-banners-1", {
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
