import { contents } from "../../../components/custom/categories";

export default function contact1(editor) {
  editor.BlockManager.add("content-1", {
    label: `          
    <i class="bi bi-journal-richtext fs-4  p-2" title="Page 1"></i>
    <div class="gjs-block-label ">Page 1</div>

`,
    category: contents,
    type: "content-1",
    open: false,

    content: `                      
        <section id="content" class="default-content1 main-comp">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-8 col-md-10 col-sm-11 col-12 text-center mx-auto">
                        <h2 class="default-content1-heading my-4">Celerant Design Blocks</h2>
                        <img src="/images/content/1.png"
                            alt="Image" class="img-fluid w-50 mx-auto">
                        <p class="default-content1-text my-3">

                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.

                        </p>
                    </div>
                </div>
            </div>
        </section>

        <style>
            .default-content1 {
                font-family: 'Lato', sans-serif;
            }

            .default-content1-heading {
                color: #444;
                font-weight: 600;
                font-size: 44px;
            }

            .default-content1-text {
                color: #8892a0;
                font-size: 1.4rem;
                font-weight: 400;
                padding: 15px;
            }

            .default-content1-link {
                color: #329ef7;
            }

            .default-content1-link:hover {
                text-decoration: underline !important;
            }

        </style>

  

`,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("content-1", {
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
