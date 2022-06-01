import { contents } from "../../../components/custom/categories";
import { getDepts, getTyps } from "../../../API";

export default function companyIntro1(editor) {
  editor.BlockManager.add("company-intro-default", {
    label: `               
    <i class="bi bi-journal-text fs-4  p-2" title="Company Intro 2"></i>
    <div class="gjs-block-label ">Company Into Default</div>

`,
    category: contents,
    type: "company-intro-default",
    open: false,

    content: `                      
  <section id="company-intro-default"  data-gjs-name="Company Intro Default" data-gjs-type="company-intro-default" data-gjs-id="company-intro-default" class="default-company-intro main-comp">
       <div class="container-fluid">
            <div class="row">
                
                <div class="col-lg-5 col-md-5 col-sm-12 col-12 default-company-intro-content">
                    <h2 class="default-company-intro-heading" >Welcome to <u> Company Name </u></h2>
                    <p class="default-company-intro-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div class="col-lg-7 col-md-7 col-sm-12 col-12 d-flex justify-content-center align-items-center ">
               <img class="img-fluid " src="https://www.celerant.com/wp-content/uploads/Stratus_Image_REG-768x442.jpg" alt="Into Image" />
               
                </div>
            </div>
        </div>
    </section>

      <style>
        .default-company-intro{background: url("http://celerantcms-com.server-icumulusdataserver9-vps.vps.ezhostingserver.com/testsite/server/uploads/static/company-intro1.jpg") 0% 0% no-repeat padding-box; background-size: 100% 100%;font-family: 'Montserrat', sans-serif;padding: 50px 15px;}
        .default-company-intro-content{padding: 20px;}
        .default-company-intro-heading{font-weight: bold; font-size: 23px;color: #fff;line-height: 51px;text-transform: uppercase;display: block;}
        .default-company-intro-text{font-weight: 400; font-size: 16px;color: #fff;display: block;line-height: 22px;margin-bottom: 5%;}
        @media(max-width:767px)
        {
            .default-company-intro{background-size: cover;} 
        }
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
