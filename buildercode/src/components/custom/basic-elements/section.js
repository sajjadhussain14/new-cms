export const section = (blockManager, basicElementsCat) => {
  let compData = {};
  compData = {
    id: "oneColumns",
    label: `
    
<i class="fa fa-square fs-4 p-2" title="<section> with <row>"></i>
    <div class="gjs-block-label">Section
    </div>
     
    `,
    category: basicElementsCat,
    content: `
      <section data-gjs-droppable="false" id="oneColumn" >
        <div data-gjs-droppable="false" class="container-fluid">
          <div data-gjs-droppable="true" class="row py-3 main-comp" style="min-height:75px;">
          </div>
        </div>
      </section>

      `,
  };

  blockManager.add("oneColumns", compData);
};
