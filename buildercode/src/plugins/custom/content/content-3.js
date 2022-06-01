import { contents } from "../../../components/custom/categories";

export default function contact1(editor) {
  editor.BlockManager.add("content-3", {
    label: `              
    <i class="bi bi-journal-richtext fs-4  p-2" title="Page 3"></i>
    <div class="gjs-block-label ">Page 3</div>

`,
    category: contents,
    type: "content-3",
    open: false,

    content: `                      
    <section id="content" class="default-content2 main-comp">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12 text-center mx-auto">
                    <h2 class="default-content2-heading my-2">Celerant Design Blocks</h2>
                    <p class="default-content2-text my-4">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life 
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type 
                      specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </p>
                    <img src="/images/content/1.png" alt="Image" class="img-fluid w-100 mx-auto">
                   
                </div>
            </div>
        </div>
    </section>
    <style>
        .default-content2{font-family: 'Lato', sans-serif;}
        .default-content2-heading{color: #444; font-weight: 600; font-size: 44px;}
        .default-content2-text{color: #8892a0;font-size: 1.4rem;font-weight: 400;}
        .default-content2-link{color: #329ef7;}
        .default-content2-link:hover{text-decoration: underline!important;}
    </style>
  

`,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("content-3", {
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
