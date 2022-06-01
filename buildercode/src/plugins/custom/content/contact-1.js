import { contents } from "../../../components/custom/categories";

export default function contact1(editor) {
  editor.BlockManager.add("contact-form-1", {
    label: `               
<i class="bi bi-journal-richtext fs-4  p-2" title="Page 1"></i>
    <div class="gjs-block-label ">Contact Form1</div>

`,
    category: contents,
    type: "contact-form-1",
    open: false,

    content: `                      
      <section id="contact" class="default-contact main-comp">
          <div class="container">
              <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                      <h2>Contact Us</h2>
                      <p class="default-contact-text mb-4">
                      
                      
                      
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type
 specimen book. It has survived not only five centuries, but also the leap into 
 electronic typesetting, remaining essentially unchanged. 
                      
                      
                      </p>
                        <strong class="d-block">Email: <a href="malto: hello@website.com" class="text-decoration-none default-contact-ep-linkl"> hello@website.com</a></strong>
                        <span class="default-contact-text">Phone: <a href="tel:+44 123 123 1232" class="default-contact-ep-link text-decoration-none">+44 123 123 1232</a></span>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-12"> 
                    <div class="row">
                    <form name="" action="" method="">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                            <input type="text" class="form-control" placeholder="First name">
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                            <input type="text" class="form-control" placeholder="Last name">
                        </div>
                        <div class="col-12 mt-4">
                            <input type="email" class="form-control" placeholder="Enter Email">
                        </div>
                        <div class="col-12 mt-4">
                            <input type="text" class="form-control" placeholder="Subject">
                        </div>
                        <div class="col-12 mt-4">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="How can we help?"></textarea>
                        </div>
                        <div class="col-12 mt-4">
                            <button type="submit" class="btn btn-primary default-contact-btn">Submit</button>
                        </div>
                    </form>
    
                    </div>
                  </div>
              </div>
          </div>
      </section>

              <style>
            .default-contact-text{color: #8892a0; font-size: 1.4rem; font-weight: 400;}
            .default-contact-ep-link{color: #329ef7;} 
            .default-contact-btn{background:#329ef7;border: #329ef7;} 
           
            </style>

  

`,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("contact-form-1", {
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
