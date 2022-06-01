export const headerLinks = (blockManager, headerCat) => {
    let compData = {};

    let editModeOff = `data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-hoverable="false"`;
    let editModeOn = `data-gjs-selectable="true" data-gjs-highlightable="true" data-gjs-hoverable="true"`;

    let dropModeOn = `data-gjs-droppable="true"`;
    let dropModeOff = `data-gjs-droppable="false"`;

    compData = {
        id: "Links",
        label: `
    
<i class="bi bi-link fs-4  p-2" title="Links"></i>   
 <div class="gjs-block-label">Links
    </div>
     
    `,
        category: headerCat,
        order: 4,

        content: `
<div ${editModeOff} ${dropModeOff} class="col-lg-3 col-md-12 col-sm-12 col-12 f-header2-usercart py-2">
    
    <a  ${dropModeOff} href="##" class="f-header2-user"> <i class=" fa fa-user"></i>  Log In</a>
    <a ${editModeOff} ${dropModeOff} href="##" class="f-header2-bag"><i class=" fa fa-shopping-cart"></i><span class="f-header2-cvalue">(0)</span></a>
</div>

<style>
    .f-header2-usercart {text-align: right; line-height: 120px;} 
    .f-header2-user{color: #000;font-size: 12px;text-transform: capitalize;  text-decoration: none;font-weight: bold;}   
    .f-header2-user:hover {color:#000;}
    .f-header2-ucicon{color:#000;font-size: 25px;margin-right: 6px;}   
    .f-header2-bag{position: relative;margin-left: 20px;color: #000;font-size: 12px;text-transform: capitalize;  text-decoration: none;font-weight: bold;}  
    .f-header2-bag:hover{color:#000;}
    .f-header2-cvalue {position: absolute;left: 0;right: 0;margin: auto;font-family: 'Livvic',sans-serif;color: #000;font-size: 10px;top: -15px;width: 14px;height: 14px;line-height: 11px; text-align: center;}


    @media(max-width:991px)
        {
            .f-header2-usercart {line-height: 0px;}

        

        }
</style>


`,
    };
    blockManager.add("headerLinks", compData);
};