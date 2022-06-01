export const headerForm = (blockManager, headerCat) => {
  let compData = {};

  let editModeOff = `data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-hoverable="false"
data-gjs-droppable="false"`;
  let dropModeOff = `data-gjs-droppable="false"`;

  compData = {
    id: "Form",
    label: `
    
<i class="bi bi-input-cursor fs-4  p-2"></i>
    <div class="gjs-block-label">Form Input
    </div>
     
    `,
    category: headerCat,
    order: 3,

    content: `
<div ${dropModeOff} class="col-lg-3 col-md-3 col-sm-12 col-12 text-sm-center text-lg-left text-md-left text-center f-header2-sbar py-2">
    <form  class="f-header2-innerform advanced-search mx-sm-auto mx-auto mb-sm-2 inner-comp" name="searchForm" action="" method="post">
            <input ${editModeOff} class="f-header2-input" type="text" name="searchKeyword" id="searchKeyword" value="" placeholder="Search here">
            <button ${editModeOff} class="f-header2-btn btn-search"><i class="fa fa-search"></i></button></button>
    </form>
</div>

<style>
    .f-header2-sbar{height: 80px;display: flex;justify-content: center;align-items: center;}
    .f-header2-innerform {position: relative;}
    .f-header2-input {color: #000;height: 36px;font-family: 'Montserrat', sans-serif;font-size: 13px;padding-left: 15px;background: transparent;width: 100%;border: solid 1px #AEAEAE;border-radius: 30px;max-width: 100%;}
    .f-header2-btn {border: none;background: transparent;height: 36px;width: 36px;position: absolute;right: 3px;top: 0;box-shadow: none;}
    .f-header2-sicon{color: #AFAFAF;}
    @media(max-width:775px)
           {
    .f-header2-sbar {line-height: 0px;}
           }
</style>


`,
  };
  blockManager.add("headerForm", compData);
};
