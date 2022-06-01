import { contents } from "../../../components/custom/categories";

export default function contact1(editor) {
    editor.BlockManager.add("content-7", {
        label: `               
<i class="bi bi-journal-richtext fs-4  p-2" title="Page 7"></i>
    <div class="gjs-block-label ">Page 7</div>

`,
        category: contents,
        type: "content-7",
        open: false,

        content: `                      
    <section id="content4" class="default-video-content2 main-comp">
        <div class="container">
            <div class="row">
                <div class="col-12 my-4">
                    <h2 class="default-video-content2-heading my-2 text-center">Celerant Design Blocks</h2>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12 col-12 my-4">
                    <iframe width="100%" height="350"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                   </iframe> 
                </div>
                <div class="col-lg-7 col-md-6 col-sm-12 col-12"> 
                    <p class="default-video-content2-text my-3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life 
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                    </p>
                    <button type="button" class="btn btn-primary default-video-content2-btn my-4">Shop Now</button>
                </div>
            </div>
        </div>
    </section>
    <style>
        .default-video-content2{font-family: 'Lato', sans-serif;}
        .default-video-content2-heading{color: #444; font-weight: 600; font-size: 44px;}
        .default-video-content2-text{color: #8892a0;font-size: 1.4rem;font-weight: 400;}
        .default-video-content2-link{color: #329ef7;}
        .default-video-content2-link:hover{text-decoration: underline!important;}
        .default-video-content2-btn{background:#329ef7;border: #329ef7; margin: 0 auto; display: block;} 
    </style>
  

`,
    });
    const defaultType = editor.DomComponents.getType("default");
    const defaultModel = defaultType.model;
    editor.DomComponents.addType("content-7", {
        model: defaultModel.extend({
            init() {},

            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                traits: [{}],
            }),
        }, {
            isComponent: function(el) {
                if (el.tagName == "") {
                    return {
                        type: "",
                    };
                }
            },
        }),
        view: defaultModel.view,
    });
}