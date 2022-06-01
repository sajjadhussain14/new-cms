export const colDiv = (blockManager, basicElementsCat) => {
  let compData = {};
  compData = {
    id: "col-div",
    label: `
    
<i class="bi bi-app fs-4 p-2" title="<column> Element"></i>
    <div class="gjs-block-label">Column
    </div>
     
    `,
    category: basicElementsCat,
    content: `
      <div data-gjs-droppable="true" class="col inner-comp" style="min-height:50px;">
      </div>
      `,
  };
  blockManager.add("col-div", compData);
};
