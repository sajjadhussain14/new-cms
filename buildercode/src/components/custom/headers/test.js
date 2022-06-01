export const test = (blockManager, headercategory, editor) => {
  editor.DomComponents.addType("custom-component", {
    isComponent: (el) => {
      if (el.tagName === "INPUT") {
        // You should explicitly declare the type of your resultant
        // object, otherwise the `default` one will be used
        const result = { type: "my-input-type" };

        return result;
      }
    },
  });

  let compData = {
    id: "header-input-1",
    label: `
        <br />
    <img src="/images/icons/headerStyle1.svg" title="Main Banners Style 1" />
    <br />    <br />
    <div class="gjs-block-label">Test Input</div>
    
    `,
    category: headercategory,
    order: 7,
    content: (
      <div>
        <custom-component>Hello!</custom-component>
      </div>
    ),
  };
  blockManager.add("test-style-1", compData);
};
