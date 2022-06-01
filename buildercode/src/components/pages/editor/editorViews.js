import { PageHandle, WidgetHandle, bannerHandle } from "./editorController";
import { DelPage, DelWidget, DelBanner } from "../../../API";
import {
  appURL,
  nodeExpressURL,
  infoURL,
  widgetURL,
  bannerURL,
} from "../../../config";

export const ManagePages = (
  editor,
  showModal,
  hideModal,
  currentPage,
  setCurrentPage,
  allPages,
  selectPage,
  setAllPages,
  setIsWidget
) => {
  return (
    <div
      class="modal fade "
      id="pagesModal"
      tabindex="-1"
      aria-labelledby="pagesModalLabel"
      aria-hidden="true"
    >
      <div
        id="pagesDialog"
        class="modal-dialog modal-fullscreen modal-dialog-centered w-50 mx-auto"
      >
        <div id="pagesContent" class="modal-content">
          <div class="modal-header py-1">
            <h5 class="modal-title py-1" id="psgesModalLabel">
              Page Manager
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body py-1">
            <div class="form-container d-flex justify-content-center align-items-center pt-4">
              <label for="recipient-name" class="col-form-label me-0">
                Page Name:
              </label>

              <input
                type="text"
                class="form-control w-50 ms-1 me-5"
                id="pageName"
              />
              <button
                type="button"
                class="btn bg-newbg text-dark ms-5 me-1"
                data-bs-dismiss="modal"
                onClick={() => {
                  clearCreatePage();
                }}
              >
                Clear
              </button>
              <button
                onClick={() => {
                  PageHandle(setAllPages);
                }}
                type="button"
                class="btn bg-newbg text-dark"
              >
                Save
              </button>
            </div>
            <span id="actionMsg" className="text-success p-2"></span>
          </div>
          <section id="topNavChoose" class="border border-2">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-12 mb-sm-3">
                  <p className=" mb-0 px-2 py-1 text-center h4 text-dark shadow-md">
                    Pages List
                  </p>
                  <table class="table table-striped pages-container">
                    <thead>
                      <tr class="bg-newbg">
                        <th scope="col">#</th>
                        <th scope="col">Page Name</th>
                        <th scope="col">Page Slung</th>

                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        <th scope="col">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allPages && allPages.length > 0
                        ? allPages.map((page) => {
                            let pname = "";
                            let pageSlung = "";
                            let pageOrgName = "";
                            try {
                              pname = page.page_name;
                            } catch (err) {
                              pname = page.name;
                            }
                            if (!pname || pname == "") {
                              pname = page.name;
                            }
                            pname = pname.trim();
                            pageOrgName = pname;
                            pageSlung = pageOrgName.toLocaleLowerCase();
                            try {
                              // replace all spaces to -
                              pname = pname.replace(/-/g, " ");
                            } catch (err) {}
                            let response = "";

                            return (
                              <tr>
                                <th scope="row">1</th>
                                <td>{pname}</td>
                                <td>{pageSlung}</td>

                                <td>
                                  <a
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    type="button"
                                    href="#"
                                    onClick={(e) => {
                                      EditPage(
                                        e,
                                        pname,
                                        setCurrentPage,
                                        "no",
                                        setIsWidget
                                      );
                                    }}
                                  >
                                    <i class="fa fa-edit pr-2"></i>
                                  </a>
                                </td>
                                <td>
                                  {pname.toLocaleLowerCase() == "home" ? (
                                    <span className="text-secondary disabled">
                                      <i class="fa fa-trash"></i>
                                    </span>
                                  ) : (
                                    <a
                                      href="#"
                                      onClick={(e) => {
                                        DelPage(
                                          e,
                                          pageOrgName,
                                          setAllPages
                                        ).then((data) => {
                                          response = data;
                                          document
                                            .getElementById("actionMsg")
                                            .classList.remove("d-block");
                                          try {
                                            document
                                              .getElementById("actionMsg")
                                              .classList.remove("d-none");
                                          } catch (err) {}
                                          document.getElementById(
                                            "actionMsg"
                                          ).innerHTML = response.msg;
                                          setTimeout(() => {
                                            document
                                              .getElementById("actionMsg")
                                              .classList.add("d-none");
                                          }, 2000);
                                        });
                                      }}
                                    >
                                      <i class="fa fa-trash pr-2"></i>
                                    </a>
                                  )}
                                </td>
                                <td>
                                  {pname.toLocaleLowerCase() == "home" ? (
                                    <a href={appURL} target="_blank">
                                      <i class="fa fa-eye"></i>
                                    </a>
                                  ) : (
                                    <a
                                      href={appURL + infoURL + pageSlung}
                                      target="_blank"
                                    >
                                      <i class="fa fa-eye pr-2"></i>
                                    </a>
                                  )}
                                </td>
                              </tr>
                            );
                          })
                        : ""}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export const ManageCategoryBanners = (
  editor,
  showModal,
  hideModal,
  currentPage,
  setCurrentPage,
  allBanners,
  selectPage,
  setAllBanners,
  setIsWidget
) => {
  return (
    <div
      class="modal fade "
      id="bannersModal"
      tabindex="-1"
      aria-labelledby="bannersModalLabel"
      aria-hidden="true"
    >
      <div
        id="bannersDialog"
        class="modal-dialog modal-fullscreen modal-dialog-centered w-75 mx-auto"
      >
        <div id="pagesContent" class="modal-content bannerPopUp">
          <div class="modal-header py-1">
            <h5 class="modal-title py-1" id="bannersModalLabel">
              Category Banners Manager
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body py-1">
            <div class="form-container d-flex justify-content-center align-items-center pt-4">
              <label for="recipient-name" class="col-form-label me-0">
                Categoty Name:
              </label>

              <input
                type="text"
                class="form-control w-50 ms-1 me-5"
                id="bannerName"
              />
              <button
                type="button"
                class="btn bg-newbg text-dark ms-5 me-1"
                data-bs-dismiss="modal"
                onClick={() => {
                  clearCreatePage();
                }}
              >
                Clear
              </button>
              <button
                onClick={() => {
                  bannerHandle(setAllBanners);
                }}
                type="button"
                class="btn bg-newbg text-dark"
              >
                Save
              </button>
            </div>
            <span id="actionMsg3" className="text-success p-2"></span>
          </div>

          <section id="topNavChoose" class="border border-2">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-12 mb-sm-3">
                  <p className=" mb-0 px-2 py-1 text-center h4 text-dark shadow-md">
                    Banners List
                  </p>
                  <section id="bannerTiles">
                    <div class="container">
                      <div class="row">
                        {allBanners && allBanners.length > 0
                          ? allBanners.map((banner, index) => {
                              let bname = "";
                              let bannerSlung = "";
                              let bannerOrgName = "";
                              try {
                                bname = banner.banner_name;
                              } catch (err) {
                                bname = banner.name;
                              }
                              if (!bname || bname == "") {
                                bname = banner.name;
                              }
                              bname = bname.trim();
                              bannerOrgName = bname;
                              bannerSlung = bannerOrgName.toLocaleLowerCase();
                              try {
                                // replace all spaces to -
                                bname = bname.replace(/-/g, " ");
                              } catch (err) {}
                              let response = "";

                              return (
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                  <div class="card">
                                    <div class="card-image">
                                      <div class="wrap"></div>
                                    </div>
                                    <div
                                      data-tooltip={bname}
                                      class="card-content bg-light text-dark"
                                    >
                                      <span
                                        type="button"
                                        class="btn  
                                   shadow-none  w-100     
                                        "
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        data-tooltip={bname}
                                        id={"banner" + index}
                                      >
                                        <i class="fa fa-ellipsis-v float-right w-100 text-end"></i>
                                      </span>
                                      <ul
                                        class="dropdown-menu"
                                        aria-labelledby={"banner" + index}
                                      >
                                        <li>
                                          <a
                                            class="dropdown-item"
                                            href={"javascript:void(0)"}
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            type="button"
                                            onClick={(e) => {
                                              EditPage(
                                                e,
                                                bname,
                                                setCurrentPage,
                                                "banner",
                                                setIsWidget
                                              );
                                            }}
                                          >
                                            <i class="fa fa-edit"></i>Edit
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            class="dropdown-item"
                                            href={"javascript:void(0)"}
                                            onClick={(e) => {
                                              DelBanner(
                                                e,
                                                bannerOrgName,
                                                setAllBanners
                                              ).then((data) => {
                                                response = data;
                                                document
                                                  .getElementById("actionMsg3")
                                                  .classList.remove("d-block");
                                                try {
                                                  document
                                                    .getElementById(
                                                      "actionMsg3"
                                                    )
                                                    .classList.remove("d-none");
                                                } catch (err) {}
                                                document.getElementById(
                                                  "actionMsg3"
                                                ).innerHTML = response.msg;
                                                setTimeout(() => {
                                                  document
                                                    .getElementById(
                                                      "actionMsg3"
                                                    )
                                                    .classList.add("d-none");
                                                }, 2000);
                                              });
                                            }}
                                          >
                                            <i class="fa fa-trash"></i>Delete
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            class="dropdown-item"
                                            href={
                                              appURL + bannerURL + bannerSlung
                                            }
                                            target="_blank"
                                          >
                                            <i class="fa fa-eye"></i>View
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <span class="p-2 d-flex card-title">
                                      <strong> {bname}</strong>
                                    </span>

                                    <span class="p-2 d-flex bannerurl">
                                      Slug: {bannerSlung}
                                    </span>
                                  </div>
                                </div>
                              );
                            })
                          : ""}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export const ManageWidgets = (
  editor,
  showModal,
  hideModal,
  currentPage,
  setCurrentPage,
  allWidgets,
  selectPage,
  setAllWidgets,
  setIsWidget
) => {
  return (
    <div
      class="modal fade "
      id="widgetsModal"
      tabindex="-1"
      aria-labelledby="widgetsModalLabel"
      aria-hidden="true"
    >
      <div
        id="widgetsDialog"
        class="modal-dialog modal-fullscreen modal-dialog-centered w-75 mx-auto"
      >
        <div id="pagesContent" class="modal-content widgetPopUp">
          <div class="modal-header py-1">
            <h5 class="modal-title py-1" id="widgetsModalLabel">
              Widget Manager
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body py-1">
            <div class="form-container d-flex justify-content-center align-items-center pt-4">
              <label for="recipient-name" class="col-form-label me-0">
                Widget Name:
              </label>

              <input
                type="text"
                class="form-control w-50 ms-1 me-5"
                id="widgetName"
              />
              <button
                type="button"
                class="btn bg-newbg text-dark ms-5 me-1"
                data-bs-dismiss="modal"
                onClick={() => {
                  clearCreatePage();
                }}
              >
                Clear
              </button>
              <button
                onClick={() => {
                  WidgetHandle(setAllWidgets);
                }}
                type="button"
                class="btn bg-newbg text-dark"
              >
                Save
              </button>
            </div>
            <span id="actionMsg2" className="text-success p-2"></span>
          </div>

          <span class="bg-light d-block p-3">
            You Can display any Widget on any page calling below hooks
            <br />
            <strong>getWidget('widget Slung')</strong>
          </span>

          <section id="topNavChoose" class="border border-2">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-12 mb-sm-3">
                  <p className=" mb-0 px-2 py-1 text-center h4 text-dark shadow-md">
                    Widgets List
                  </p>
                  <section id="widgetTiles">
                    <div class="container">
                      <div class="row">
                        {allWidgets && allWidgets.length > 0
                          ? allWidgets.map((widget, index) => {
                              let wname = "";
                              let widgetSlung = "";
                              let widgetOrgName = "";
                              try {
                                wname = widget.widget_name;
                              } catch (err) {
                                wname = widget.name;
                              }
                              if (!wname || wname == "") {
                                wname = widget.name;
                              }
                              wname = wname.trim();
                              widgetOrgName = wname;
                              widgetSlung = widgetOrgName.toLocaleLowerCase();
                              try {
                                // replace all spaces to -
                                wname = wname.replace(/-/g, " ");
                              } catch (err) {}
                              let response = "";

                              return (
                                <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                                  <div class="card">
                                    <div class="card-image">
                                      <div class="wrap"></div>
                                    </div>
                                    <div
                                      data-tooltip={wname}
                                      class="card-content bg-light text-dark"
                                    >
                                      <span
                                        type="button"
                                        class="btn  
                                   shadow-none  w-100     
                                        "
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        data-tooltip={wname}
                                        id={"widget" + index}
                                      >
                                        <i class="fa fa-ellipsis-v float-right w-100 text-end"></i>
                                      </span>
                                      <ul
                                        class="dropdown-menu"
                                        aria-labelledby={"widget" + index}
                                      >
                                        <li>
                                          <a
                                            class="dropdown-item"
                                            href={"javascript:void(0)"}
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            type="button"
                                            onClick={(e) => {
                                              EditPage(
                                                e,
                                                wname,
                                                setCurrentPage,
                                                "yes",
                                                setIsWidget
                                              );
                                            }}
                                          >
                                            <i class="fa fa-edit"></i>Edit
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            class="dropdown-item"
                                            href={"javascript:void(0)"}
                                            onClick={(e) => {
                                              DelWidget(
                                                e,
                                                widgetOrgName,
                                                setAllWidgets
                                              ).then((data) => {
                                                response = data;
                                                document
                                                  .getElementById("actionMsg2")
                                                  .classList.remove("d-block");
                                                try {
                                                  document
                                                    .getElementById(
                                                      "actionMsg2"
                                                    )
                                                    .classList.remove("d-none");
                                                } catch (err) {}
                                                document.getElementById(
                                                  "actionMsg"
                                                ).innerHTML = response.msg;
                                                setTimeout(() => {
                                                  document
                                                    .getElementById(
                                                      "actionMsg2"
                                                    )
                                                    .classList.add("d-none");
                                                }, 2000);
                                              });
                                            }}
                                          >
                                            <i class="fa fa-trash"></i>Delete
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            class="dropdown-item"
                                            href={
                                              appURL + widgetURL + widgetSlung
                                            }
                                            target="_blank"
                                          >
                                            <i class="fa fa-eye"></i>View
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <span class="p-2 d-flex card-title">
                                      <strong> {wname}</strong>
                                    </span>

                                    <span class="p-2 d-flex widgeturl">
                                      Slug: {widgetSlung}
                                    </span>
                                  </div>
                                </div>
                              );
                            })
                          : ""}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
const clearCreatePage = () => {
  document.getElementById("pageName").value = "";
};
const EditPage = (e, name, setCurrentPage, widgetValue, setIsWidget) => {
  setCurrentPage(name);
  setIsWidget(widgetValue);
};
