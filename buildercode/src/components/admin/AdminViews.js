import { LogOutUser } from "./AdminController";
import { baseName } from "../../config";

export const SidebarAdmin = (props) => {
  let { user } = props;

  return (
    <>
      <nav id="sidebar" className="sidebar-wrapper col-lg-2 col-md-3 col-12">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <a href={baseName + "/"}>DashBoard</a>
            <div id="close-sidebar">
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="sidebar-header">
            <div className="user-pic">
              <img
                className="img-responsive img-rounded"
                src="/images/usericon.png"
                alt="User picture"
              />
            </div>
            <div className="user-info">
              <span className="user-name">
                <strong> {user.admin_user ? user.admin_user : ""}</strong>
              </span>
              <span className="user-role">
                {user.is_super == 1 ? "Super Admin" : "Admin"}
              </span>
              <span className="user-status">
                <i className="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li className="header-menu">
                <span>General</span>
              </li>

              <li className="sidebar-dropdown">
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                  id="menu1"
                >
                  <i className="fa fa-table"></i>
                  <span>Taxonomy</span>
                </a>
                <div
                  className=" collapse  nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu1"
                >
                  <ul>
                    <li>
                      <a href="#">Add</a>
                    </li>
                    <li>
                      <a href="#">Edit</a>
                    </li>
                    <li>
                      <a href="#">Remove</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="sidebar-dropdown">
                <a
                  href="#submenu2"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                  id="menu2"
                >
                  <i className="far fa-gem"></i>
                  <span>Products</span>
                </a>
                <div
                  className=" collapse  nav flex-column ms-1"
                  id="submenu2"
                  data-bs-parent="#menu2"
                >
                  <ul>
                    <li>
                      <a href="#">Add</a>
                    </li>
                    <li>
                      <a href="#">Edit</a>
                    </li>
                    <li>
                      <a href="#">Remove</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <a
                  href="#submenu3"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                  id="menu3"
                >
                  <i className="fa fa-list"></i>
                  <span>Attributes</span>
                </a>
                <div
                  className=" collapse  nav flex-column ms-1"
                  id="submenu3"
                  data-bs-parent="#menu3"
                >
                  <ul>
                    <li>
                      <a href="#">Add</a>
                    </li>
                    <li>
                      <a href="#">Edit</a>
                    </li>
                    <li>
                      <a href="#">Remove</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="sidebar-dropdown">
                <a
                  href="#submenu4"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                  id="menu4"
                >
                  <i className="fa fa-gears"></i>
                  <span>Settings</span>
                </a>
                <div
                  className=" collapse  nav flex-column ms-1"
                  id="submenu4"
                  data-bs-parent="#menu4"
                >
                  <ul>
                    <li>
                      <a href="#">Add</a>
                    </li>
                    <li>
                      <a href="#">Edit</a>
                    </li>
                    <li>
                      <a href="#">Remove</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export const ContentAdmin = () => {
  return (
    <>
      <main className="page-content col-lg-10 col-md-9 col-12 p-0">
        <div className="container p-0">
          <TopActionBar />
          <h2 className="px-3 mt-2">Hi , Welcome Back</h2>

          <div className="row p-3">
            <SearchContent />

            <ReportsOverview />

            <TopSellingProducts />
          </div>

          <FooterAdmin />
        </div>
      </main>
    </>
  );
};

export const SettingsLayout = () => {
  return (
    <>
      <main className="page-content col-lg-10 col-md-9 col-12 p-0">
        <div className="container p-0">
          <TopActionBar />

          <section className="col-12 my-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="header-title mt-2 mb-3">Website Settings</h4>
                <div className="row g-3 ">
                  <GeneralSettings />
                  <HomePageSettings />
                  <CategorySettings />
                  <OthersSettings />
                </div>
              </div>
            </div>
          </section>
          <FooterAdmin />
        </div>
      </main>
    </>
  );
};

const GeneralSettings = () => {
  return (
    <div className=" border g-4 mt-2 p-3  justify-content-center col-4">
      <div className="row ">
        <h6>General Settings </h6>
        <div className="row p-2">
          <div className="col-4">Theme Color:</div>
          <div className="col-4 offset-4 justify-content-end">
            <div class="form-check form-switch ">
              <input
                type="color"
                class="form-control form-control-color"
                id="exampleColorInput"
                value="#563d7c"
                title="Choose your color"
              />
            </div>
          </div>
        </div>

        <div className="row p-2">
          <div className="col-8">Drag Drop for Client</div>
          <div className="col-4 justify-content-end">
            <div class="form-check form-switch ">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
        </div>

        <div className="row p-2">
          <div className="col-8">Allow Out of Stock</div>
          <div className="col-4 justify-content-end">
            <div class="form-check form-switch ">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                defaultChecked
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePageSettings = () => {
  return (
    <div className=" border g-4 mt-2 p-3  justify-content-center col-4">
      <div className="row ">
        <h6>Home Page Settings </h6>

        <div className="row p-2">
          <div className="col-8">Main Banners:</div>
          <div className="col-4  justify-content-end">
            <div class="form-check form-switch ">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                defaultChecked
              />
            </div>
          </div>

          <div className="row p-2">
            <div className="col-8">Mini Banners</div>
            <div className="col-4 justify-content-end">
              <div class="form-check form-switch ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </div>

          <div className="row p-2">
            <div className="col-8">Products Slider</div>
            <div className="col-4 justify-content-end">
              <div class="form-check form-switch ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  defaultChecked
                />
              </div>
            </div>
          </div>

          <div className="row p-2">
            <div className="col-8">Products Grids</div>
            <div className="col-4 justify-content-end">
              <div class="form-check form-switch ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </div>

          <div className="row p-2">
            <div className="col-8">Company Intro</div>
            <div className="col-4  justify-content-end">
              <div class="form-check form-switch ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  defaultChecked
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row p-2">
          <div className="col-8">Brands Slider</div>
          <div className="col-4  justify-content-end">
            <div class="form-check form-switch ">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                defaultChecked
              />
            </div>
          </div>
        </div>

        <div className="row p-2">
          <div className="col-8">Seo Text:</div>
          <div className="col-4  justify-content-end">
            <div class="form-check form-switch ">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategorySettings = () => {
  return (
    <div className=" border g-4 mt-2 p-3  justify-content-center col-4">
      <div className="row">
        <h6>Category Page Settings </h6>

        <div className="row p-2">
          <div className="row p-2 mb-3">
            <div className="col-6">Default Sort Property:</div>
            <div className="col-6 justify-content-end">
              <div class="form-check form-switch ">
                <select class="form-select two" id="sort" aria-label="select">
                  <option value="name(a-z)">Name(A-Z)</option>
                  <option value="name(z-a)">Name(Z-A)</option>
                  <option value="price-high-to-low" selected>
                    Price(High-Low)
                  </option>
                  <option value="price-low-to-high">Price(Low-High)</option>
                  <option value="brands">Brands</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row p-2 mb-3">
          <div className="col-6">Per Page products:</div>
          <div className="col-6 justify-content-end">
            <div class="form-check form-switch ">
              <select class="form-select two" id="sort" aria-label="select">
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="20">20</option>
                <option value="24" selected>
                  24
                </option>

                <option value="price-low-to-high">Price(Low-High)</option>
                <option value="brands">Brands</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row p-2 mb-3">
          <div className="col-6">Availability Default:</div>
          <div className="col-6 justify-content-end">
            <div class="form-check form-switch ">
              <select class="form-select two" id="sort" aria-label="select">
                <option value="all-items" selected>
                  All Items
                </option>
                <option value="in-stock">Stock items</option>
                <option value="out-of-stock">Out of Stock items</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row p-2">
          <div className="col-8">Sort Newest Option:</div>
          <div className="col-4  justify-content-end">
            <div class="form-check form-switch ">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                defaultChecked
              />
            </div>
          </div>
        </div>

        <div className="row p-2">
          <div className="col-8">Sort Brands Option:</div>
          <div className="col-4  justify-content-end">
            <div class="form-check form-switch ">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                defaultChecked
              />
            </div>
          </div>
        </div>

        <div className="row p-2">
          <div className="col-8">Cart Button on category</div>
          <div className="col-4 justify-content-end">
            <div class="form-check form-switch ">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
        </div>

        <div className="row p-2">
          <div className="col-8">Seo Text:</div>
          <div className="col-4  justify-content-end">
            <div class="form-check form-switch ">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                defaultChecked
              />
            </div>
          </div>
        </div>

        <div className="row p-2">
          <div className="col-8">Landing Banner :</div>
          <div className="col-4  justify-content-end">
            <div class="form-check form-switch ">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                defaultChecked
              />
            </div>
          </div>
        </div>

        <div className="row p-2">
          <div className="col-8">Category Banner :</div>
          <div className="col-4  justify-content-end">
            <div class="form-check form-switch ">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TopActionBar = () => {
  return (
    <>
      <div className=" py-2 shadow-sm bg-light row px-3">
        <section className="action-bar col-12 d-flex">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 statistics ">
            <span className="px-2">
              <a href={baseName + "/"}>
                <i className="fas fa-home px-1 text-dark"></i>
                <span className="text-dark">Home</span>
              </a>
            </span>

            <span className="px-2">
              <a href={baseName + "/home"}>
                <i className="fas fa-laptop-code px-1 text-dark"></i>
                <span className="text-dark">Builder</span>
              </a>
            </span>
            <span className="px-2">
              <i className="fa-solid fa-gauge text-dark"></i>
              <a href={"/seo"} className="text-dark">
                SEO
              </a>
            </span>

            <span className="px-2">
              <i className="fa-solid fa-screwdriver-wrench text-dark"></i>{" "}
              <a href={baseName + "/settings"} className="text-dark">
                Settings
              </a>
            </span>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 col-12 justify-content-end text-end  ">
            <a
              href="javascript:void(0)"
              className="px-2"
              onClick={() => {
                LogOutUser();
              }}
            >
              <i className="fa fa-power-off"></i>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

const TopGreeatingsContent = () => {
  return (
    <>
      <h2>Hi , Welcome Back</h2>
    </>
  );
};

const SearchContent = () => {
  return (
    <>
      <section className="sidebar-search col-12">
        <div className="input-group">
          <input
            type="text"
            className="form-control search-menu"
            placeholder="Search..."
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
const ReportsOverview = () => {
  return (
    <>
      <section className="col-lg-3 col-md-3 col-sm-6 col-6 statistics my-3">
        <div className="card widget-flat shadow-sm">
          <div className="card-body">
            <div className="float-end">
              <i className="mdi mdi-account-multiple widget-icon"></i>
            </div>
            <h5
              className="text-muted fw-normal mt-0"
              title="Number of Customers"
            >
              Customers
            </h5>
            <h3 className="mt-3 mb-3">36,254</h3>
            <p className="mb-0 text-muted">
              <span className="text-success me-2">
                <i className="mdi mdi-arrow-up-bold"></i> 5.27%
              </span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </div>
        </div>
      </section>
      <section className="col-lg-3 col-md-3 col-sm-6 col-6 statistics my-3">
        <div className="card widget-flat shadow-sm">
          <div className="card-body">
            <div className="float-end">
              <i className="mdi mdi-cart-plus widget-icon"></i>
            </div>
            <h5 className="text-muted fw-normal mt-0" title="Number of Orders">
              Orders
            </h5>
            <h3 className="mt-3 mb-3">5,543</h3>
            <p className="mb-0 text-muted">
              <span className="text-danger me-2">
                <i className="mdi mdi-arrow-down-bold"></i> 1.08%
              </span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </div>
        </div>
      </section>
      <section className="col-lg-3 col-md-3 col-sm-6 col-6 statistics my-3">
        <div className="card widget-flat shadow-sm">
          <div className="card-body">
            <div className="float-end">
              <i className="mdi mdi-currency-usd widget-icon"></i>
            </div>
            <h5 className="text-muted fw-normal mt-0" title="Average Revenue">
              Revenue
            </h5>
            <h3 className="mt-3 mb-3">$6,254</h3>
            <p className="mb-0 text-muted">
              <span className="text-danger me-2">
                <i className="mdi mdi-arrow-down-bold"></i> 7.00%
              </span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </div>
        </div>
      </section>
      <section className="col-lg-3 col-md-3 col-sm-6 col-6 statistics my-3">
        <div className="card widget-flat shadow-sm">
          <div className="card-body">
            <div className="float-end">
              <i className="mdi mdi-pulse widget-icon"></i>
            </div>
            <h5 className="text-muted fw-normal mt-0" title="Growth">
              Growth
            </h5>
            <h3 className="mt-3 mb-3">+ 30.56%</h3>
            <p className="mb-0 text-muted">
              <span className="text-success me-2">
                <i className="mdi mdi-arrow-up-bold"></i> 4.87%
              </span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const OthersSettings = () => {
  return (
    <div className=" border g-4 mt-2 p-3  justify-content-center col-12">
      <div className="row">
        <h6>Other Settings </h6>
      </div>
    </div>
  );
};

const TopSellingProducts = () => {
  return (
    <>
      <section className="col-12 my-3">
        <div className="card shadow-sm">
          <div className="card-body">
            <h4 className="header-title mt-2 mb-3">Top Selling Products</h4>

            <div className="table-responsive ">
              <table className="table table-centered table-nowrap table-hover mb-0">
                <tbody>
                  <tr>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">
                        ASOS Ridley High Waist
                      </h5>
                      <span className="text-muted font-13">07 April 2018</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">$79.49</h5>
                      <span className="text-muted font-13">Price</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">82</h5>
                      <span className="text-muted font-13">Quantity</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">$6,518.18</h5>
                      <span className="text-muted font-13">Amount</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">
                        Marco Lightweight Shirt
                      </h5>
                      <span className="text-muted font-13">25 March 2018</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">$128.50</h5>
                      <span className="text-muted font-13">Price</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">37</h5>
                      <span className="text-muted font-13">Quantity</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">$4,754.50</h5>
                      <span className="text-muted font-13">Amount</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">
                        Half Sleeve Shirt
                      </h5>
                      <span className="text-muted font-13">17 March 2018</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">$39.99</h5>
                      <span className="text-muted font-13">Price</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">64</h5>
                      <span className="text-muted font-13">Quantity</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">$2,559.36</h5>
                      <span className="text-muted font-13">Amount</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">
                        Lightweight Jacket
                      </h5>
                      <span className="text-muted font-13">12 March 2018</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">$20.00</h5>
                      <span className="text-muted font-13">Price</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">184</h5>
                      <span className="text-muted font-13">Quantity</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">$3,680.00</h5>
                      <span className="text-muted font-13">Amount</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">Marco Shoes</h5>
                      <span className="text-muted font-13">05 March 2018</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">$28.49</h5>
                      <span className="text-muted font-13">Price</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">69</h5>
                      <span className="text-muted font-13">Quantity</span>
                    </td>
                    <td>
                      <h5 className="font-14 my-1 fw-normal">$1,965.81</h5>
                      <span className="text-muted font-13">Amount</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const FooterAdmin = () => {
  return (
    <>
      <footer className="text-center">
        <div className="mb-2">
          <small>© 2022 Celerant</small>
        </div>

        <div></div>
      </footer>
    </>
  );
};
