export const headerNavigation = (blockManager, headerCat) => {
  let compData = {};
  compData = {
    id: "Navigation",
    label: `
    
    <br />
    <img src="/images/icons/headerNavigation.svg" title="Main Banners Style 1" />
    <br />    <br />
    <div class="gjs-block-label">Navigation
    </div>
     
    `,
    category: headerCat,
    order: 6,

    content: `
    <div class="col-12 f-header2-mob py-1">
        <nav class="navbar navbar-expand-lg navbar-light f-header2-mainnav">
            <div class="container-fluid p-0">
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul class="f-header2-navmenu navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="f-header2-nav-li nav-item">
                            <a class="f-header2-dept nav-link" href="##">ACCESSORIES</a>
                            <button  class="d-lg-none border-0 p-0 m-0 bg-transparent f-header2-btndrop" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <i class="f-header-2-adicons fas fa-angle-down"></i>
                            </button>
                            <ul class="f-header2-dropmenu dropdown-menu collapse" id="collapseExample">
                                <li class="f-header2-drop-li">
                                    <a class="f-header2-droplinks dropdown-item" href="##">Typ 1</a>
                                    <button  class="d-lg-none border-0 p-0 m-0 bg-transparent f-header2-btndrop" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample8" aria-expanded="false" aria-controls="collapseExample8">
                                        <i class="f-header-2-adicons fas fa-angle-down"></i>
                                    </button>
                                    <ul class="f-header2-submenu dropdown-submenu collapse list-unstyled" id="collapseExample8">
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 1</a></li>
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 2</a></li>
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 3</a></li>
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 4</a></li>
                                     </ul> 
                                </li>
                                <li class="f-header2-drop-li">
                                    <a class="f-header2-droplinks dropdown-item" href="##">Typ 2 </a>
                                    <button  class="d-lg-none border-0 p-0 m-0 bg-transparent f-header2-btndrop" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample9" aria-expanded="false" aria-controls="collapseExample9">
                                        <i class="f-header-2-adicons fas fa-angle-down"></i>
                                    </button>
                                    <ul class="f-header2-submenu dropdown-submenu collapse list-unstyled" id="collapseExample9">
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 5</a></li>
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 6</a></li>
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 7</a></li>
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 8</a></li>
                                    </ul>
                                </li>
                                <li class="f-header2-drop-li">
                                    <a class="f-header2-droplinks dropdown-item" href="##">Typ 3</a>
                                    <button  class="d-lg-none border-0 p-0 m-0 bg-transparent f-header2-btndrop" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample10" aria-expanded="false" aria-controls="collapseExample10">
                                        <i class="f-header-2-adicons fas fa-angle-down"></i>
                                     </button>
                                    <ul class="f-header2-submenu dropdown-submenu collapse list-unstyled" id="collapseExample10">
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 9</a></li>
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 10</a></li>
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 11</a></li>
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 12</a></li>
                                    </ul>  
                                </li>
                                <li class="f-header2-drop-li">
                                    <a class="f-header2-droplinks dropdown-item" href="##">Typ 4</a>
                                    <button  class="d-lg-none border-0 p-0 m-0 bg-transparent f-header2-btndrop" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample11" aria-expanded="false" aria-controls="collapseExample11">
                                        <i class="f-header-2-adicons fas fa-angle-down"></i>
                                    </button>
                                    <ul class="f-header2-submenu dropdown-submenu collapse list-unstyled" id="collapseExample11">
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 13</a></li>
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 14</a></li>
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 15</a></li>
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 16</a></li>
                                    </ul>    
                                </li>
                                <li class="f-header2-drop-li">
                                    <a class="f-header2-droplinks dropdown-item" href="##">Typ 5</a>
                                    <button  class="d-lg-none border-0 p-0 m-0 bg-transparent f-header2-btndrop" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample12" aria-expanded="false" aria-controls="collapseExample12">
                                        <i class="f-header-2-adicons fas fa-angle-down"></i>
                                    </button>
                                    <ul class="f-header2-submenu dropdown-submenu collapse list-unstyled" id="collapseExample12">
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 17</a></li>
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 18</a></li>
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 19</a></li>
                                            <li><a href="##" class="f-header2-sublinks">Subtyp 20</a></li>                                                    
                                    </ul>                                                
                                </li>     
                            </ul>
                        </li>
                        <li class="f-header2-nav-li nav-item">
                            <a class="f-header2-dept nav-link" href="##">CLEANING & STORAGE</a>
                        </li>
                        <li class="f-header2-nav-li nav-item">
                            <a class="f-header2-dept nav-link" href="##">SAFETY PRODUCTS</a>
                        </li>
                        <li class="f-header2-nav-li nav-item">
                            <a class="f-header2-dept nav-link" href="##">SUPPLIES</a>
                        </li>
                        <li class="f-header2-nav-li nav-item">
                            <a class="f-header2-dept nav-link" href="##">APPAREL</a>
                        </li>
                        <li class="f-header2-nav-li nav-item">
                            <a class="f-header2-dept nav-link" href="##">ARCHERY</a> 
                        </li>
                        <li class="f-header2-nav-li nav-item">
                            <a class="f-header2-dept nav-link" href="##">OPTICS</a> 
                        </li>
                        <li class="f-header2-nav-li nav-item">
                            <a class="f-header2-dept nav-link" href="##">DUTY GEAR</a>
                        </li>
                        <li class="f-header2-nav-li nav-item">
                            <a class="f-header2-dept nav-link" href="##">CAMPING & OUTDOOR</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>


    
        <style>
            
            .f-header2 {font-family: 'Poppins', sans-serif;background: url(https://gogok2a.cumulusbetasites.com/images/header_bg.png) no-repeat top center;	background-size: 100% 100%;width: 100%;}
            .f-header2-mainnav {height: 46px;}
            .f-header2-navmenu{display: flex; justify-content:space-around; width: 100%;} 
            .f-header2-dept{color: #000!important;font-size: 0.70rem!important;width:fit-content;line-height: 46px;font-weight: bold;}
            .f-header-2-adicons {font-size: 14px;color: #C9C9C9;}           
            .f-header2-droplinks{width:100%;font-size: 16px;color: #fff;text-transform: capitalize;display: block;font-weight: 400;padding: .5rem 1rem;line-height: 25px;text-align: center;}
            .f-header2-submenu {position: absolute;top: 0px;background: #000;min-width: 160px;border-radius: 5px;border: 1px solid #000;left: 100%;padding: 0px;}
            .f-header2-sublinks {width:100%;font-size: 16px;color: #fff;text-transform: capitalize;display: block;font-weight: 400;padding: .5rem 1rem;line-height: 25px;text-align: center;}     
           @media(min-width:992px)  
            {
                .f-header2-nav-li:hover .f-header2-dept{color: #771114;transition: ease-in .4s;}
                .f-header2-drop-li:hover .f-header2-droplinks{background-color: #771114; transition: ease-in .4s;}
                .f-header2-drop-li:hover .f-header2-submenu{display: block; padding:0px;}
                .f-header2-drop-li{position: relative;}
                .f-header2-drop-li:hover .f-header2-sublinks{width:100%;font-size: 15px;color: #fff;text-transform: capitalize;display: block;font-weight: 400;padding:.5rem 0;line-height: 25px;text-decoration: none;background: #000;}  
                .f-header2-dropmenu{display: none;}
                .f-header2-submenu{display: none;list-style-type: none;padding: .5rem 1rem;line-height: 25px;;}
                .f-header2-drop-li .f-header2-submenu li:hover .f-header2-sublinks {background-color: #771114;}
                .f-header2-nav-li:hover .f-header2-dropmenu{display: block;position: absolute;top: 40px;background: #000;min-width: 160px;padding: .5rem 0;border-radius: 5px;color: #fff;} 
                  
            }
           @media(max-width:991px)
            {
                .f-header2-navmenu{width: 100%;display: block;padding: 15px;background: #000;}
                .f-header2-nav-li{background: #000;border-bottom: 1px solid #000;padding:0 15px;position: relative;}
                .f-header-2-adicons{float: right;}
                .f-header2-dropmenu{position: relative;top:0;min-width: 100%;background: none;}
                .f-header2-drop-li{border-bottom: 0px;position: relative;}
                .f-header2-btndropdown-submenu{position: relative;top:0;min-width: 100%;left: 0;}
                .f-header2-sub-li{border-bottom:0px;}
                .f-header2-btndrop{position: absolute;right: 15px;top:26px;color: #fff;}
                .f-header2-submenu {position: relative;left: 0;}
                .f-header2-dept{color: #fff!important; font-size:0.95rem!important;}
                .f-header2-droplinks {font-size: 0.95rem!important;text-align: left;}
                .f-header2-mob{top:50px;position: relative;}
                .f-header2-sublinks {font-size: 0.95rem;text-align: left;}
            } 
           @media(max-width:775px)
            {
                .f-header2-mainnav{height:auto;}
            }
           @media(max-width:767px)
            {
                .f-header2-mob{top:auto;}
            }
        </style>

      `,
  };
  blockManager.add("headerNavigation", compData);
};
