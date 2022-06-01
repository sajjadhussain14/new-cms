export const footerLogo = (blockManager, footerCat) => {
  let compData = {};
  compData = {
    id: "footerLogo",
    label: `
    
   <i class="bi bi-image fs-4  p-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Footer Logo"></i>     

    <div class="gjs-block-label">Footer Logo
    </div>
     
    `,
    category: footerCat,
    content: `
    <div class="col-lg-3 col-md-3 col-sm-12 logo mb-lg-0 mb-md-0 mb-sm-3">
    <a href="/"><img alt="" src="./images/logo.png" class="img-fluid w-100 tex-light"></a>
  </div>
      `,
  };
  blockManager.add("footerLogo", compData);
};
