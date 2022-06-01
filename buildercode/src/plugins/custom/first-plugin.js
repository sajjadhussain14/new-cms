export default function myPlugin(editor) {
  editor.BlockManager.add("Header Style 2", {
    label: "Header Style 2",
    category: { id: "header", label: "Header", open: false, order: 1 },
    type: "Header Style 2",
    open: false,

    content: `      <header class="main-comp bg-dark "
       data-gjs-name="Header Style 1 Component" data-gjs-type="Header Style 2">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 py-1 text-left top mb-lg-0 mb-md-0 mb-sm-1">
              <p class="text-light mb-0">
                Monday - Friday 10AM - 8PM, Saturday 10AM - 6PM +XXX-XXX-XXXX
              </p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 logo mb-lg-0 mb-md-0 mb-sm-3">
              <a href="/">
                <img
                  alt=""
                  src="http://template1icumulus-com.ntc5-p2stl.ezhostingserver.com/ccms/default/assets/Image/icon-american-flag.png"
                  class="img-fluid w-100 "
                />
              </a>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12 search align-items-center d-flex">
              <div class="inner flex-fill">
                <form
                  role="search"
                  action="/search"
                  method="post"
                  name="myForm"
                  required=""
                  class="position-relative d-flex align-items-center bg-light"
                >
<input name="Search" placeholder="Search " type="text" class="w-100 bg-light text-dark border-0 pl-lg-3 pl-md-3 pl-sm-0 pl-xs-0"/>
        <button type="submit" class="position-absolute border-0 p-0 m-0 top-0 h-100 pe-2 start-100 bg-light"><i class="fas fa-search"></i></button>                </form>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-12 mt-lg-0 mt-md-0 mt-sm-0 mt-xs-2 links d-flex align-items-center justify-content-around">
              <a href="/login.cfm" class="text-light text-decoration-none">
                <i class="fas fa-user text-light pe-2"></i>My Account
              </a>
              <a
                href="/cart.cfm"
                class="text-light text-decoration-none position-relative"
                id="header-cart"
              >
                <i class="fas fa-shopping-cart text-light pe-2 d-block"></i>
                <span class="text-danger position-absolute top-0 start-50 translate-middle">
                  (0)
                </span>
              </a>
            </div>
            <div class="col-12 navigation mt-lg-0 mt-md-0 mt-sm-2">
              <nav  class="navbar navbar-expand-lg navbar-light bg-transparent">
                <div class="container-fluid p-0 bg-transparent">
                  <button
                    class="navbar-toggler bg-secondary border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon text-light"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse d-block"
                    id="navbarTogglerDemo02"
                  >
                  
                    <ul class="inner-comp d-flex  list-unstyled text-light me-auto mb-2 mb-lg-0  w-100 align-items-center justify-content-start flex-grow-1"
                     data-gjs-name="Main Menu Component" data-gjs-type="Main Menu Component"
                    >
            <div id="dynamic-links" class=" d-flex justify-space-between flex-direction-row">
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle text-light"
                          href="#"
                          id="navbarScrollingDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Link
                        </a>
                        <ul
                          class="dropdown-menu bg-secondary"
                          aria-labelledby="navbarScrollingDropdown"
                        >
                          <li>
                            <a class="dropdown-item text-dark" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item text-dark" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item text-dark" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-light" href="#">
                          Link
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-light" href="#">
                          Link
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-light" href="#">
                          Link
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-light" href="#">
                          Link
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-light" href="#">
                          Link
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-light" href="#">
                          Link
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-light" href="#">
                          Link
                        </a>
                      </li>
                      </div>

                                  <div id="infoLinks" class=" d-flex justify-space-between flex-direction-row">

                      </div>

                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

`,
  });
  const defaultType = editor.DomComponents.getType("default");
  const defaultModel = defaultType.model;
  editor.DomComponents.addType("Header Style 2", {
    model: defaultModel.extend(
      {
        init() {
          this.listenTo(this, "change:noOfCategories", this.getnoOfCategories);
          this.listenTo(this, "change:noOfLinks", this.getInfoLinks);
        },

        getnoOfCategories() {
          console.log(
            this.get("traits").where({ name: "noOfCategories" })[0].get("value")
          );
        },

        getInfoLinks(e) {
          let countLinks = 0;

          countLinks = this.get("traits")
            .where({ name: "noOfLinks" })[0]
            .get("value");
          if (!countLinks || countLinks < 1) {
            countLinks = 0;
          }
          let canvasDoc = editor.Canvas.getDocument();
          let LinksGoups = "";
          let linksCounyter = 0;
          for (let i = 0; i < countLinks; i++) {
            linksCounyter++;
            LinksGoups += `
            <li id="li-info-link${linksCounyter}" data-gjs-type="default" draggable="true" data-highlightable="1" class="nav-item"><a id="a-info-link${linksCounyter}" data-gjs-type="link" draggable="true" data-highlightable="1" href="#" class="nav-link text-light gjs-hovered">
                          Link
                        </a></li>
         `;
          }

          const wrapper = editor.getWrapper();
          const el = wrapper.find("#infoLinks")[0];
          // el.append(LinksGoups);
          el.components(LinksGoups);
          e.addTrait(
            {
              name: "agage",
              type: "mynewtyp",
              id: "mynewtyp",
              placeholder: "write here",
              attributes: { style: "display: block" },
            },
            { at: 2 }
          );
          const sel = editor.getSelected(); // get the currect selected text component
          console.log(sel.toHTML());
          editor.trigger("change:selectedComponent");

          editor.TraitManager.getTraitsViewer().render();
        },
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          traits: [
            {
              label: "Categories",
              name: "noOfCategories",
              id: "noOfCategories",
              type: "select",
              options: [
                { id: "1", name: "1" },
                { id: "2", name: "2" },
                { id: "3", name: "3" },
                { id: "4", name: "4" },
                { id: "5", name: "5" },
                { id: "6", name: "6" },
                { id: "7", name: "7" },
                { id: "8", name: "8" },
                { id: "9", name: "9" },
                { id: "10", name: "10" },
              ],
              changeProp: 1,
            },
            {
              label: "Links",
              name: "noOfLinks",
              id: "noOfLinks",
              type: "select",
              options: [
                { id: "1", name: "1" },
                { id: "2", name: "2" },
                { id: "3", name: "3" },
                { id: "4", name: "4" },
              ],
              changeProp: 1,
            },
          ],
        }),
      },
      {
        isComponent: function (el) {
          if (el.tagName == "text") {
            return { type: "text" };
          }
        },
      }
    ),
    view: defaultModel.view,
  });
}
