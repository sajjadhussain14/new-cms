export const footerLinks = (blockManager, footerCat) => {
  let compData = {};
  compData = {
    id: "footerLink",
    label: `
    
<i class="bi bi-link fs-4  p-2" title="Links"></i>   
    <div class="gjs-block-label">footer Links
    </div>
     
    `,
    category: footerCat,
    content: `

<div class="col-lg-3 col-md-6 col-sm-12 col-12">
        <h2 class="default-footer-heading" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Customer Service</h2>
        <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <a href="##" class="default-footer-links"><i class="fa fa-angle-double-right"></i> your account</a>
            <a href="##" class="default-footer-links"><i class="fa fa-angle-double-right"></i> Contact Us</a>
            <a href="##" class="default-footer-links"><i class="fa fa-angle-double-right"></i> Gift Cards</a>
        </div>                        
    </div> 

        <style>
     .default-footer-heading{border: none;font-weight: 600; color: #fff;font-size: 15px;margin-bottom: 20px;text-transform: uppercase;box-shadow: none;background-color: transparent;margin-top: 20px;position: relative;}
        .default-footer-links{color: #fff;font-size: 14px;text-decoration: none;display: block;margin-bottom: 10px;text-transform: capitalize; font-weight: 400;}
        .default-footer-links:hover{color: #9E9E9E;}
        @media(min-width:768px)
        {
            footer .collapse{display: block!important;}
            footer .collapsing {height:auto;overflow:visible;transition: height .35s ease;}
        }
        @media(max-width:767px)
        {
            .default-footer-heading::after{content: "+";position: absolute;color:#fff;font-size: 30px;font-weight:300;display: block;top: 50%;transform: translateY(-50%)  rotate(90deg);right: 15px;}
            .col-lg-3.col-md-6.col-sm-12.col-12:last-of-type .default-footer-heading::after{content: "";position: absolute;color:#fff;font-size: 15px;font-weight:300;display: block;top: 50%;transform: translateY(-50%)  rotate(90deg);right: 15px;}
        }
</style>

      `,
  };
  blockManager.add("footerLinks", compData);
};
