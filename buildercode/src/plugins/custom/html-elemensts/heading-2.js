import { htmlElements } from "../../../components/custom/categories";

export default function heading2(editor) {
  editor.BlockManager.add("heading-2", {
    label: `            
       <i class="bi bi-list-nested fs-4  p-2" title="Heading 2"></i>
    <div class="gjs-block-label">H2</div>

`,
    category: htmlElements,
    type: "heading-2",
    open: false,

    content: `         
    
<h2 class="p-2 main-comp">This is Heading Two</h2>

`,
  });
}
