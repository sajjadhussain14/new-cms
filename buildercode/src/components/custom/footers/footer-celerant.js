export const footerCelerant = (blockManager, footerCat) => {
  let compData = {};
  compData = {
    id: "celerant",
    label: `
    
<i class="bi bi-blockquote-right fs-4 p-2" title="Footer Celerant"></i>
    <div class="gjs-block-label">Footer Celerant
    </div>
     
    `,
    category: footerCat,
    content: `
    <div class="col-lg-4 col-md-4 col-sm-12 col-12 ">
    <p class="text-light text-capitalize text-sm-center text-md-end text-lg-end">ecommerce site by 
      <a href="https://www.celerant.com/cumulus-retail/" class="text-decoration-none">
        <img alt="Cumulus retail logo" src="http://template1icumulus-com.ntc5-p2stl.ezhostingserver.com/images/cumulus_logo.svg" class="img-fluid w-25">
      </a>
    </p>
  </div>
      `,
  };
  blockManager.add("footerCelerant", compData);
};
