export const footerSocial = (blockManager, footerCat) => {
  let compData = {};
  compData = {
    id: "footerSocial",
    label: `
    
<i class="bi bi-emoji-smile fs-4 p-2"></i>
    <div class="gjs-block-label">Footer Social
    </div>
     
    `,
    category: footerCat,
    content: `
    <div class="col-lg-3 col-md-3 col-sm-6 col-12  mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2">
    <h5 class="text-light text-uppercase font-weight-bold mb-3">heading 4</h5>
    <p class="text-light mb-3">Join our newsletter program to stay updated with all the latest updates , sales and promotions!</p>
    <form class="position-relative">
      <input class="text-capitalize text-light bg-transparent py-3 border-0" type="email" placeholder="Enter your e-mail address">
      <button class="text-light bg-danger text-uppercase border-0 position-absolute py-2 px-4 top-50 end-0 translate-middle-y">Subscribe</button>
    </form>
    <div class="social d-flex justify-content-between align-items-center">
      <a href="##" class="text-decoration-none">
        <i class="fab fa-facebook text-light"></i>
      </a>
      <a href="##" class="text-decoration-none">
        <i class="fab fa-twitter text-light"></i>
      </a>
      <a href="##" class="text-decoration-none">
        <i class="fab fa-linkedin text-light"></i>
      </a>
      <a href="##" class="text-decoration-none">
        <i class="fab fa-youtube text-light"></i>
      </a>
      <a href="##"class="text-decoration-none">
        <i class="fab fa-pinterest text-light"></i>
      </a>
      <a href="##" class="text-decoration-none">
        <i class="fab fa-vimeo text-light"></i>
      </a>
    </div>
   </div>
      `,
  };
  blockManager.add("footerSocial", compData);
};
