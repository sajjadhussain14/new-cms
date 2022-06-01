import { fullFooter } from "../../../../components/custom/categories";
import { getDepts } from "../../../../API";

export default function fullFooter2(editor) {
  editor.BlockManager.add("full-footer-2", {
    label: `   
         <i  class="bi bi-card-heading fs-4 p-2" title="Full Footer 2"></i>

    <div class="gjs-block-label">Footer 2
    </div>
`,
    category: fullFooter,
    type: "full-footer-2",
    open: false,

    content: `  
        <footer class=" footer bg-white pt-4 ffooter1 main-comp mt-1"
        
            data-gjs-name="Full Footer 2" data-gjs-type="full-footer-2" data-gjs-id="full-footer-2" id="full-footer-2">

        <div class="container">
            <div class="row row-cols-1 row-cols-lg-4 justify-content-left">                
                <div class="col-lg-4 ">
                    <div class="ffooter1-widget">
                        <div class="">
                        <span class="ffooter1-widget-p">
                                 <img class="d-block mb-4 w-50" src="./images/logo.png">
                        </span>    
                                 <p class="ffooter1-widget-p">

                                 XYZ’s powerful custom enterprise eCommerce solutions seamlessly integrate with your stores, 
                                 in real-time and on a single database, enabling omnichannel promotions, marketing and fulfillment.
                            </p>                                                            
                            <div class="mt-1 d-flex">
                                <a href="" class="ffooter1-social-a px-1 fs-4"><i class="fa fa-facebook"></i></a>
                                <a href="" class="ffooter1-social-a px-1 fs-4"><i class="fa fa-twitter"></i></a>
                                <a href="" class="ffooter1-social-a px-1 fs-4"><i class="fa fa-instagram"></i></a>
                                <a href="" class="ffooter1-social-a px-1 fs-4"><i class="fa fa-youtube"></i></a>
                                <a href="" class="ffooter1-social-a px-1 fs-4"><i class="fa fa-pinterest"></i></a>                        
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="col-lg-2 ">
                    <div class="ffooter1-widget">
                        <h3 class="ffooter1-widget-title ">Quick Links <i class="plus-minus d-inline-block d-lg-none float-end fa fa-plus"></i></h3>
                        <div class="ffooter1-widget-expandable">
                            <a class="ffooter1-widget-a" href="##">About</a>
                            <a class="ffooter1-widget-a" href="##">Contact</a>
                            <a class="ffooter1-widget-a" href="##">Blog</a>
                            <a class="ffooter1-widget-a" href="##">FAQ</a>                            
                        </div>                                
                    </div>
                </div>
                <div class="col-lg-2 ">
                    <div class="ffooter1-widget">
                        <h3 class="ffooter1-widget-title ">Account <i class="plus-minus d-inline-block d-lg-none float-end fa fa-plus"></i></h3>
                        <div class="ffooter1-widget-expandable">
                            <a class="ffooter1-widget-a" href="##">My Account</a>
                            <a class="ffooter1-widget-a" href="##">Orders Tracking</a>
                            <a class="ffooter1-widget-a" href="##">Checkout</a>
                            <a class="ffooter1-widget-a" href="##">Wishlist</a>                            
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">                    
                    <div class="text-left">
                        <div class="ffooter1-widget ffooter1-subscribe">
                            <h3 class="ffooter1-widget-title">Newsletter</h3>
                            <form class="ffooter1-subscribe-form" name="searchForm" action="/toolset/emailsignup.cfm" method="post">					
                                <input class="ffooter1-subscribe-input" type="text" name="emailSubscription" id="searchKeyword" placeholder="Email address" value="">
                                <button type="submit" class="ffooter1-subscribe-button">Subscribe</button>
                                
                            </form>                            
                        </div>
                    </div>
                    
                </div>      
            </div>

            <div class="row row-cols-1">
                <div class="col ffooter1-bottom-p text-center mt-3 pt-3 border-top border-dark">
                    <p>&copy; 2021 All rights reserved | ecommerce site by XYZ Pvt Ltd.</p>                    
                </div>

            </div>
        </div>
      </footer>
<style>
    .ffooter1-social-a{
        background:none;
        color:#A0A0A0;
        margin: 10px 15px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
    .ffooter1-subscribe-form{
        background:#fff;
        padding: 2px;
        border-radius: 2rem;
        border:1px solid #A0A0A0;
    }
    .ffooter1-subscribe-input{
        background:#fff;
        color:#A0A0A0;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: 300;
        line-height: 40px;
        width: 57%;
        max-width:436px;
        height: 40px;
        border: 0;
        outline: 0;
        border-radius: 25px;
        padding-left: 15px;
    }
    .ffooter1-subscribe-button{
        background:#D01D32;
        color:#fff;
        font-family: 'Roboto Slab', sans-serif;
        font-size: .8rem;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        position: relative;
        height: 40px;
        width: 40%;
        border-radius: 25px;
        border:0;
        float: right;
    }

    .ffooter1-widget-title {
        font-size:18px;
        line-height: 21.59px;
        color:#111111;
        text-transform:uppercase;
        font-weight: 300;
        font-family: 'Roboto', sans-serif;
        margin-bottom:15px;
    }
    .ffooter1-widget-a{
        font-size: 15px;
        color:#666666!important;
        font-weight:300;
        text-transform: capitalize;
        text-decoration: none;
        line-height: 30px;
        display: block;
        font-family: 'Roboto', sans-serif;
        transition: ease-in 0.8s;
    }
    .ffooter1-widget-p{
        font-size: 15px;
        color:#666666!important;
        font-weight:300;
        text-transform: capitalize;
        text-decoration: none;
        line-height: 30px;
        display: block;
        font-family: 'Roboto', sans-serif;
        transition: ease-in 0.8s;
        text-align: left;
    }
    .ffooter1-bottom-p{
        color:#111111;
        font-family: 'Roboto', sans-serif;
        font-size: .8rem;
        font-weight: 300;
        text-transform: capitalize;
        margin-right: 20px;        
    }
   

      
    @media (max-width: 991px) {
        .ffooter1-widget {
            margin-bottom: 1.3rem;
        }
        .ffooter1-widget-expandable {
            display: none;
            transition: ease-in 0.8s;
        }
        .ffooter1-subscribe-input {
            width: 59%;
        }
        .ffooter1-subscribe-button
        {
            width: 39%;
        }
    }

    </style>


`,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("footer-categories", {
    model: defaultModel.extend(
      {
        init() {
          this.listenTo(this, "change:noOfCategories", this.getnoOfCategories);
          this.listenTo(this, "change:noOfLinks", this.getInfoLinks);
        },

        getnoOfCategories() {
          let catLimit = 8;
          let deptRecs = [];
          catLimit = this.get("traits")
            .where({
              name: "noOfCategories",
            })[0]
            .get("value");
          if (!catLimit || catLimit == "") catLimit = 8;
          getCatDepts(catLimit)
            .then((depts) => {
              getMenuViews(depts, editor);
            })
            .catch((err) => {});
        },

        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          traits: [
            {
              label: "Categories",
              name: "noOfCategories",
              id: "noOfCategories",
              type: "select",
              options: [
                {
                  id: "0",
                  name: "None",
                },

                {
                  id: "1",
                  name: "1",
                },
                {
                  id: "2",
                  name: "2",
                },
                {
                  id: "3",
                  name: "3",
                },
                {
                  id: "4",
                  name: "4",
                },
                {
                  id: "5",
                  name: "5",
                },
                {
                  id: "6",
                  name: "6",
                },
                {
                  id: "7",
                  name: "7",
                },
                {
                  id: "8",
                  name: "8",
                },
                {
                  id: "9",
                  name: "9",
                },
                {
                  id: "10",
                  name: "10",
                },
              ],
              changeProp: 1,
            },
          ],
        }),
      },
      {
        isComponent: function (el) {
          if (el.tagName == "header") {
            return {
              type: "header",
            };
          }
        },
      }
    ),
    view: defaultModel.view,
  });
}

async function getCatDepts(limit) {
  let depts = [];
  if (!limit || limit == "") limit = 8;
  // fetch data from a url endpoint
  await getDepts(limit)
    .then((data) => {
      if (!data || data == "") {
        data = [];
      }
      depts = [...data];
    })
    .catch((err) => console.log(err));
  return depts;
}

const getMenuViews = (depts, editor) => {
  let deptLinks =
    depts && depts.length > 0
      ? depts.map((dept, index) => {
          return (
            <a
              class="text-light text-capitalize d-block text-decoration-none mb-2"
              href={dept.URL}
            >
              {" "}
              {dept.DEPT}{" "}
            </a>
          );
        })
      : "<li> &nbsp;	&nbsp;	&nbsp;	</li>";

  const wrapper = editor.getWrapper();
  const el = wrapper.find("#footer-categories")[0];
  // el.append(LinksGoups);
  el.components(deptLinks);

  return deptLinks;
};
