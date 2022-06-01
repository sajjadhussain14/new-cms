import { contents } from "../../../components/custom/categories";

export default function companyIntro1(editor) {
  editor.BlockManager.add("company-intro-1", {
    label: `               
<i class="bi bi-journal-text fs-4  p-2" title="Company Intro 1"></i>
    <div class="gjs-block-label ">Company Into 1</div>

`,

    category: contents,
    type: "company-intro-1",
    open: false,

    content: `                      
    
  <section id="company-intro-1"  data-gjs-name="Company Intro 1" data-gjs-type="company-intro-1" data-gjs-id="company-intro-1" class="mb-3 bg-light main-comp">
	<div class="container-fluid py-2">
		<div class="row py-5">
			<div class="col-lg-5 col-md-5 col-sm-12 col-12 text"> 
                <strong class="text-dark text-uppercase d-block mb-4">Welcome to Your website</strong>
                <p class="text-dark">lorem ipsum bedi utar shino lorem ipsum bedi utar shino lorem ipsum bedi utar shino lorem ipsum bedi utar shino 
                lorem ipsum bedi utar shino lorem ipsum bedi utar shino lorem ipsum bedi utar shino lorem ipsum bedi utar shino </p>		
                <a class="btn btn-danger text-light d-inline-block mx-auto mb-md-4 mb-4" >View more</a>
			</div>
			<div class="col-lg-7 col-md-7 col-sm-12 col-12 video">
				<div class="embed-responsive embed-responsive-16by9 iframeouter">
<iframe style="width:auto;height:50vh;" src="https://www.youtube.com/embed/13kVkda2RHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            
				</div>
				
			</div>
		</div>
	</div>
</section>
<style>#textvideo{
    background: url("http://celerantcms-com.server-icumulusdataserver9-vps.vps.ezhostingserver.com/testsite/server/uploads/static/company-intro1.jpg")no-repeat;
    background-size: cover;}</style>

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
