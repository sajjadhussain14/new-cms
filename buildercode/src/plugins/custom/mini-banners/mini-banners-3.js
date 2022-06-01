import { miniBanners } from "../../../components/custom/categories";
import { getDepts, getTyps } from "../../../API";

export default function miniBanners3(editor) {
  editor.BlockManager.add("mini-banners-3", {
    label: `               
        <i class="bi bi-card-image fs-4  p-2" title="Banners 3"></i>
    <div class="gjs-block-label ">Banners 3</div>

`,
    category: miniBanners,
    type: "mini-banners-3",
    open: false,

    content: `                      
      <section data-gjs-name="Mini Banners 3" data-gjs-type="mini-banners-3" data-gjs-id="mini-banners-3" id="mini-banners-3" class="d-block main-comp">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-3">
              <div class="row">
                <div class="col-12 mb-3">
                  <a href="">
                    <img
                      class="img-fluid"
                      src="/images/mini-banners/m1.jpg"
                      alt="image"
                    />
                  </a>
                </div>
                <div class="col-12 mb-3">
                  <a href="">
                    <img
                      class="img-fluid"
                      src="/images/mini-banners/m2.jpg"
                      alt="image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 col-12">
              <a href="">
                <img
                  class="img-fluid"
                  src="/images/mini-banners/m3.jpg"
                  alt="image"
                />
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
