export const footerPayment = (blockManager, footerCat) => {
  let compData = {};
  compData = {
    id: "payment",
    label: `
    
<i class="bi bi-credit-card-2-front fs-4 p-2" title="Footer Payment"></i>
    <div class="gjs-block-label">Footer Payment
    </div>
     
    `,
    category: footerCat,
    content: `
<div class="col-lg-4 col-md-4 col-sm-12 col-12 mt-2 text-center">
                            <i class="fa fa-cc-discover px-2 text-light" aria-hidden="true"></i>
                            <i class="fa fa-cc-mastercard text-light" aria-hidden="true"></i>
                            <i class="fa fa-cc-amex px-2 text-light" aria-hidden="true"></i>
                            <i class="fa fa-cc-visa text-light" aria-hidden="true"></i>
</div>      `,
  };
  blockManager.add("footerPayment", compData);
};
