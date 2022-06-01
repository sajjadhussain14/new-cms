export const rowDiv = (blockManager, basicElementsCat) => {
  let compData = {};
  compData = {
    id: "row-div",
    label: `
    
<i class="bi bi-square fs-4 p-2" title="<row> Element"></i>
    <div class="gjs-block-label">Row 
    </div>
     
    `,
    category: basicElementsCat,
    content: `
      <div data-gjs-droppable="true" class="row py-3 main-comp " style="min-height:50px;">
      </div>
      `,
  };
  blockManager.add("row-div", compData);
};
