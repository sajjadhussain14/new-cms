import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IsUserLogedIn } from "./components/AdminController";
import "./components/admin/css/admin.css";

export default function Admin() {
  const [user, setUser] = useState("");

  let navigate = useNavigate();

  useEffect(() => {}, []);

  const LogOutUser = () => {
    sessionStorage.clear("loginInfo");
    navigate("/");
  };
  IsUserLogedIn();

  const SidebarAdmin = () => {
    return (
      <>
        <nav id="sidebar" class="sidebar-wrapper col-lg-2 col-md-3 col-12">
          <div class="sidebar-content">
            <div class="sidebar-brand">
              <a href="#">DashBoard</a>
              <div id="close-sidebar">
                <i class="fas fa-times"></i>
              </div>
            </div>
            <div class="sidebar-header">
              <div class="user-pic">
                <img
                  class="img-responsive img-rounded"
                  src="/images/usericon.png"
                  alt="User picture"
                />
              </div>
              <div class="user-info">
                <span class="user-name">
                  <strong> {user.admin_user ? user.admin_user : ""}</strong>
                </span>
                <span class="user-role">
                  {user.is_super == 1 ? "Super Admin" : "Admin"}
                </span>
                <span class="user-status">
                  <i class="fa fa-circle"></i>
                  <span>Online</span>
                </span>
              </div>
            </div>
            <div class="sidebar-menu">
              <ul>
                <li class="header-menu">
                  <span>General</span>
                </li>

                <li class="sidebar-dropdown">
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle"
                    id="menu1"
                  >
                    <i class="fa fa-table"></i>
                    <span>Taxonomy</span>
                  </a>
                  <div
                    class=" collapse  nav flex-column ms-1"
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

                <li class="sidebar-dropdown">
                  <a
                    href="#submenu2"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle"
                    id="menu2"
                  >
                    <i class="far fa-gem"></i>
                    <span>Products</span>
                  </a>
                  <div
                    class=" collapse  nav flex-column ms-1"
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
                <li class="sidebar-dropdown">
                  <a
                    href="#submenu3"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle"
                    id="menu3"
                  >
                    <i class="fa fa-list"></i>
                    <span>Attributes</span>
                  </a>
                  <div
                    class=" collapse  nav flex-column ms-1"
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

                <li class="sidebar-dropdown">
                  <a
                    href="#submenu4"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle"
                    id="menu4"
                  >
                    <i class="fa fa-gears"></i>
                    <span>Settings</span>
                  </a>
                  <div
                    class=" collapse  nav flex-column ms-1"
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

  const TopActionBar = () => {
    return (
      <>
        <div class=" py-2 shadow-sm bg-light row px-3">
          <section class="action-bar col-12 d-flex">
            <div class="col-lg-6 col-md-6 col-sm-6 col-12 statistics ">
              <span>
                <Link to="/home">
                  <i class="fas fa-laptop-code px-1 text-dark"></i>
                  <span class="text-dark">Builder</span>
                </Link>
              </span>
              <span className="px-2">
                <i class="fas fa-gear px-2 "></i>
                <Link to="/seo" class="text-dark">
                  SEO
                </Link>
              </span>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-12 justify-content-end text-end  ">
              <Link to="" className="px-2">
                <i class="fa fa-cog"></i>
                <span class="badge-sonar"></span>
              </Link>
              <Link
                to="javascript:void()"
                className="px-2"
                onClick={() => {
                  LogOutUser();
                }}
              >
                <i class="fa fa-power-off"></i>
              </Link>
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
        <section class="sidebar-search col-12">
          <div class="input-group">
            <input
              type="text"
              class="form-control search-menu"
              placeholder="Search..."
            />
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="fa fa-search" aria-hidden="true"></i>
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
        <section class="col-lg-3 col-md-3 col-sm-6 col-6 statistics my-3">
          <div class="card widget-flat shadow-sm">
            <div class="card-body">
              <div class="float-end">
                <i class="mdi mdi-account-multiple widget-icon"></i>
              </div>
              <h5 class="text-muted fw-normal mt-0" title="Number of Customers">
                Customers
              </h5>
              <h3 class="mt-3 mb-3">36,254</h3>
              <p class="mb-0 text-muted">
                <span class="text-success me-2">
                  <i class="mdi mdi-arrow-up-bold"></i> 5.27%
                </span>
                <span class="text-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </section>
        <section class="col-lg-3 col-md-3 col-sm-6 col-6 statistics my-3">
          <div class="card widget-flat shadow-sm">
            <div class="card-body">
              <div class="float-end">
                <i class="mdi mdi-cart-plus widget-icon"></i>
              </div>
              <h5 class="text-muted fw-normal mt-0" title="Number of Orders">
                Orders
              </h5>
              <h3 class="mt-3 mb-3">5,543</h3>
              <p class="mb-0 text-muted">
                <span class="text-danger me-2">
                  <i class="mdi mdi-arrow-down-bold"></i> 1.08%
                </span>
                <span class="text-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </section>
        <section class="col-lg-3 col-md-3 col-sm-6 col-6 statistics my-3">
          <div class="card widget-flat shadow-sm">
            <div class="card-body">
              <div class="float-end">
                <i class="mdi mdi-currency-usd widget-icon"></i>
              </div>
              <h5 class="text-muted fw-normal mt-0" title="Average Revenue">
                Revenue
              </h5>
              <h3 class="mt-3 mb-3">$6,254</h3>
              <p class="mb-0 text-muted">
                <span class="text-danger me-2">
                  <i class="mdi mdi-arrow-down-bold"></i> 7.00%
                </span>
                <span class="text-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </section>
        <section class="col-lg-3 col-md-3 col-sm-6 col-6 statistics my-3">
          <div class="card widget-flat shadow-sm">
            <div class="card-body">
              <div class="float-end">
                <i class="mdi mdi-pulse widget-icon"></i>
              </div>
              <h5 class="text-muted fw-normal mt-0" title="Growth">
                Growth
              </h5>
              <h3 class="mt-3 mb-3">+ 30.56%</h3>
              <p class="mb-0 text-muted">
                <span class="text-success me-2">
                  <i class="mdi mdi-arrow-up-bold"></i> 4.87%
                </span>
                <span class="text-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </section>
      </>
    );
  };

  const TopSellingProducts = () => {
    return (
      <>
        <section class="col-12 my-3">
          <div class="card shadow-sm">
            <div class="card-body">
              <h4 class="header-title mt-2 mb-3">Top Selling Products</h4>

              <div class="table-responsive ">
                <table class="table table-centered table-nowrap table-hover mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">
                          ASOS Ridley High Waist
                        </h5>
                        <span class="text-muted font-13">07 April 2018</span>
                      </td>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">$79.49</h5>
                        <span class="text-muted font-13">Price</span>
                      </td>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">82</h5>
                        <span class="text-muted font-13">Quantity</span>
                      </td>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">$6,518.18</h5>
                        <span class="text-muted font-13">Amount</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">
                          Marco Lightweight Shirt
                        </h5>
                        <span class="text-muted font-13">25 March 2018</span>
                      </td>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">$128.50</h5>
                        <span class="text-muted font-13">Price</span>
                      </td>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">37</h5>
                        <span class="text-muted font-13">Quantity</span>
                      </td>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">$4,754.50</h5>
                        <span class="text-muted font-13">Amount</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">
                          Half Sleeve Shirt
                        </h5>
                        <span class="text-muted font-13">17 March 2018</span>
                      </td>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">$39.99</h5>
                        <span class="text-muted font-13">Price</span>
                      </td>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">64</h5>
                        <span class="text-muted font-13">Quantity</span>
                      </td>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">$2,559.36</h5>
                        <span class="text-muted font-13">Amount</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">
                          Lightweight Jacket
                        </h5>
                        <span class="text-muted font-13">12 March 2018</span>
                      </td>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">$20.00</h5>
                        <span class="text-muted font-13">Price</span>
                      </td>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">184</h5>
                        <span class="text-muted font-13">Quantity</span>
                      </td>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">$3,680.00</h5>
                        <span class="text-muted font-13">Amount</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">Marco Shoes</h5>
                        <span class="text-muted font-13">05 March 2018</span>
                      </td>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">$28.49</h5>
                        <span class="text-muted font-13">Price</span>
                      </td>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">69</h5>
                        <span class="text-muted font-13">Quantity</span>
                      </td>
                      <td>
                        <h5 class="font-14 my-1 fw-normal">$1,965.81</h5>
                        <span class="text-muted font-13">Amount</span>
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

  const ContentAdmin = () => {
    return (
      <>
        <main class="page-content col-lg-10 col-md-9 col-12 p-0">
          <div class="container p-0">
            <TopActionBar />
            <h2 class="px-3 mt-2">Hi , Welcome Back</h2>

            <div class="row p-3">
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

  const FooterAdmin = () => {
    return (
      <>
        <footer class="text-center">
          <div class="mb-2">
            <small>© 2022 Celerant</small>
          </div>

          <div></div>
        </footer>
      </>
    );
  };

  return (
    <>
      <div class="container-fluid">
        <div class="page-wrapper chiller-theme toggled row">
          <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
            <i class="fas fa-bars"></i>
          </a>
          <SidebarAdmin />

          <ContentAdmin />
        </div>
      </div>
    </>
  );
}
