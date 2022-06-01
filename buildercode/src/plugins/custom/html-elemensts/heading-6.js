import { htmlElements } from "../../../components/custom/categories";

export default function heading6(editor) {
  editor.BlockManager.add("heading-6", {
    label: `                
    
       <i class="bi bi-list-nested fs-4  p-2" title="Heading 6"></i>
    <div class="gjs-block-label ">H6</div>

`,
    category: htmlElements,
    type: "heading-6",
    open: false,

    content: `         
    
<h6 class="p-2 main-comp">This is Heading Six</h6>

`,
  });
}
