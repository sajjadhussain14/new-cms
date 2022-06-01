import { contents } from "../../../components/custom/categories";

export default function contact1(editor) {
  editor.BlockManager.add("content-5", {
    label: `               
<i class="bi bi-journal-richtext fs-4  p-2" title="Page 5"></i>
    <div class="gjs-block-label ">Page 5</div>

`,
    category: contents,
    type: "content-5",
    open: false,

    content: `                      
    <section id="content4" class="default-content4 main-comp">
        <div class="container">
            <div class="row">
                <div class="col-12 my-4">
                    <h2 class="default-content4-heading my-2 text-center">Celerant Design Blocks</h2>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12 col-12 my-4">
                    <img src="/images/content/1.png" alt="Image" class="img-fluid w-100">
                   
                </div>
                <div class="col-lg-7 col-md-6 col-sm-12 col-12"> 
                    <p class="default-content4-text my-3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life 
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type 
                      specimen book.  </p>
                    <button type="button" class="btn btn-primary default-content4-btn mt-4">Shop Now</button>
                </div>
            </div>
        </div>
    </section>
    <style>
        .default-content4{font-family: 'Lato', sans-serif;}
        .default-content4-heading{color: #444; font-weight: 600; font-size: 44px;}
        .default-content4-text{color: #8892a0;font-size: 1.4rem;font-weight: 400;}
        .default-content4-link{color: #329ef7;}
        .default-content4-link:hover{text-decoration: underline!important;}
        .default-content4-btn{background:brown;border: #329ef7; margin: 0 auto; display: block;font-size:20px} 
    </style>
  

`,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("content-5", {
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
