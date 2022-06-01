export const headerPlaceholder = (blockManager, headerCat) => {
  let compData = {};

  let editModeOff = `data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-hoverable="false"`;
  let editModeOn = `data-gjs-selectable="true" data-gjs-highlightable="true" data-gjs-hoverable="true"`;

  let dropModeOn = `data-gjs-droppable="true"`;
  let dropModeOff = `data-gjs-droppable="false"`;

  compData = {
    id: "headerPlaceholder",
    label: `
    
<i class="bi bi-menu-app-fill fs-4  p-2"></i>
<div class="gjs-block-label">Header Placeholder
    </div>
     
    `,
    category: headerCat,
    order: 1,
    content: `
<header ${dropModeOff} id="full-header-2" class="f-header2 main-comp"
    data-gjs-type="Header Placeholder" data-gjs-name="Build Header 1" 

>
    <div ${dropModeOff} ${editModeOff} id="headerTop" class="mb-lg-4 f-header2-topbar">
        <div ${editModeOff} ${dropModeOff} class="container-fluid p-0">
            <div ${editModeOff} ${dropModeOn}  class="row m-0 d-flex align-items-center" style="min-height:90px">

            </div>
        </div>
    </div>
</header>

<style>
    .f-header2 {
        font-family: 'Poppins', sans-serif;
        background: url(http://celerantcms-com.server-icumulusdataserver9-vps.vps.ezhostingserver.com/testsite/server/uploads/static/header1-main-placeholder.png) no-repeat top center;
        background-size: 100% 100%;
        width: 100%;
    }

    .f-header2-topbar {
        height: auto;
    }

</style>

      `,
  };
  blockManager.add("headerPlaceholder", compData);
};
