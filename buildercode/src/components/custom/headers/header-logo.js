export const headerLogo = (blockManager, headerCat) => {
  let editModeOff = `data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-hoverable="false"
data-gjs-droppable="false"`;
  let dropModeOff = `data-gjs-droppable="false"`;

  let compData = {};
  compData = {
    id: "logo",
    label: `

   <i class="bi bi-image fs-4  p-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Header Logo"></i>     
       <div class="gjs-block-label ">Header Logo    </div>

   
   `,
    category: headerCat,
    order: 2,

    content: `
<div ${dropModeOff} class="col-lg-6 col-md-6 col-sm-12 col-12 text-center py-2">
    <a  ${editModeOff}  href="/">
        <img ${editModeOff} src="./images/logo.png" class="f-header2-logo img-fluid w-100" alt="MainLogo">
    </a>
</div>

<style>
    .f-header2-logo{ width: 100%;max-width: 200px; max-height: 100px;object-fit: contain;}
</style>


`,
  };

  blockManager.add("headerLogo", compData);
};
