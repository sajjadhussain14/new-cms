import { htmlElements } from "../../../components/custom/categories";

export default function heading5(editor) {
  editor.BlockManager.add("heading-5", {
    label: `               
       <i class="bi bi-list-nested fs-4  p-2" title="Heading 5"></i>
    <div class="gjs-block-label ">H5</div>

`,
    category: htmlElements,
    type: "heading-5",
    open: false,

    content: `         
    
<h5 class="p-2 main-comp">This is Heading Five</h5>

`,
  });
}
