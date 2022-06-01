export const footerCopyright = (blockManager, footerCat) => {
  let compData = {};
  compData = {
    id: "copyright",
    label: `
    <span class="fs-4 p-2" title="Footer Copyright">© </span>
    <div class="gjs-block-label">Footer Copyright
    </div>
     
    `,
    category: footerCat,
    content: `
    <div class="col-lg-4 col-md-6 col-sm-12 col-12 my-3 py-2  mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2">
    <p class="text-light text-center">&copy; 2021 All Rights Reserved React Template For Celerent</p>
  </div>
      `,
  };
  blockManager.add("footerCopyright", compData);
};
