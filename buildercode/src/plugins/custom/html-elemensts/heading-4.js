import { htmlElements } from "../../../components/custom/categories";

export default function heading4(editor) {
  editor.BlockManager.add("heading-4", {
    label: `                
       <i class="bi bi-list-nested fs-4  p-2" title="Heading 4"></i>
    <div class="gjs-block-label ">H4</div>

`,
    category: htmlElements,
    type: "heading-4",
    open: false,

    content: `         
    
<h4 class="p-2 main-comp">This is Heading Four</h4>

`,
  });
}
