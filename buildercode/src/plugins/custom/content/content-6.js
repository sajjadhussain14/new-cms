import { contents } from "../../../components/custom/categories";

export default function contact1(editor) {
    editor.BlockManager.add("content-6", {
        label: `               
     <i class="bi bi-journal-richtext fs-4  p-2" title="Page 6"></i>
    <div class="gjs-block-label ">Page 6</div>

`,
        category: contents,
        type: "content-6",
        open: false,

        content: `                      
    <section id="content3" class="default-video-content1 main-comp">
        <div class="container">
            <div class="row">
                <div class="col-12 my-4">
                    <h2 class="default-video-content1-heading my-2 text-center">Celerant Design Blocks</h2>
                </div>
                <div class="col-lg-7 col-md-6 col-sm-12 col-12 my-4"> 
                    <p class="default-video-content1-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type 
                      specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <button type="button" class="btn btn-primary default-video-content1-btn mt-4">Shop Now</button>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12 col-12 text-end my-4">
                    <iframe width="100%" height="350"
                     src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>   
                </div>
            </div>
        </div>
    </section>
    <style>
        .default-video-content1{font-family: 'Lato', sans-serif;}
        .default-video-content1-heading{color: #444; font-weight: 600; font-size: 44px;}
        .default-video-content1-text{color: #8892a0;font-size: 1.4rem;font-weight: 400;}
        .default-video-content1-btn{background:#329ef7;border: #329ef7; margin: 0 auto; display: block;} 
    </style>
  

`,
    });
    const defaultType = editor.DomComponents.getType("default");
    const defaultModel = defaultType.model;
    editor.DomComponents.addType("content-6", {
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