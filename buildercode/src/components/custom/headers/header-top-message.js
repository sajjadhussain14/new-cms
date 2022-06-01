export const headerTopMessage = (blockManager, headerCat) => {
  let compData = {};
  let editModeOff = `data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-hoverable="false"`;
  let editModeOn = `data-gjs-selectable="true" data-gjs-highlightable="true" data-gjs-hoverable="true"`;

  let dropModeOn = `data-gjs-droppable="true"`;
  let dropModeOff = `data-gjs-droppable="false"`;

  compData = {
    id: "TopMessage",
    label: `
    
<i class="bi bi-type fs-4  p-2"></i>

<div class="gjs-block-label">Top Message
    </div>
     
    `,
    category: headerCat,
    order: 5,

    content: `
    <p ${dropModeOff} class="txt mb-0 px-3 ">Put your text message or information here</p>
        <style>
    .txt {color:#000000}
    </style>

      `,
  };
  blockManager.add("headerTopMessage", compData);
};
