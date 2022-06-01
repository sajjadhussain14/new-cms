import { htmlElements } from "../../../components/custom/categories";

export default function heading3(editor) {
  editor.BlockManager.add("heading-3", {
    label: `               
       <i class="bi bi-list-nested fs-4  p-2" title="Heading 3"></i>
    <div class="gjs-block-label ">H3</div>

`,
    category: htmlElements,
    type: "heading-3",
    open: false,

    content: `         
    
<h3 class="p-2 main-comp">This is Heading Three</h3>

`,
  });
}
