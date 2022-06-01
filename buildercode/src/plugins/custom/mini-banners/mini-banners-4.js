import { miniBanners } from "../../../components/custom/categories";
import { getDepts, getTyps } from "../../../API";

export default function miniBanners4(editor) {
  editor.BlockManager.add("mini-banners-4", {
    label: `               
        <i class="bi bi-card-image fs-4  p-2" title="Banners 4"></i>
    <div class="gjs-block-label ">Banners 4</div>

`,
    category: miniBanners,
    type: "mini-banners-4",
    open: false,

    content: `                      
<section data-gjs-name="Mini Banners 4" data-gjs-type="mini-banners-4" data-gjs-id="mini-banners-4" id="mini-banners-4" class="d-block main-comp">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-3 com-sm-6 col-12 mb-3">
                <a href="">
                    <img class="img-fluid" src="/images/mini-banners/1.jpg" alt="image"/>
                </a>
            </div>
            <div class="col-lg-3 col-md-3 com-sm-6 col-12 mb-3">
                <a href="">
                    <img class="img-fluid" src="/images/mini-banners/2.jpg" alt="image"/>
                </a>
            </div>
            <div class="col-lg-3 col-md-3 com-sm-6 col-12 mb-3">
                <a href="">
                    <img class="img-fluid" src="/images/mini-banners/5.jpg" alt="image"/>
                </a>
            </div>
            <div class="col-lg-3 col-md-3 com-sm-6 col-12 mb-3">
                <a href="">
                    <img class="img-fluid" src="/images/mini-banners/4.jpg" alt="image"/>
                </a>
            </div>
        </div>
    </div>
</section>
;


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
