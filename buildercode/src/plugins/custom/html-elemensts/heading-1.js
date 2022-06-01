import { htmlElements } from "../../../components/custom/categories";

export default function heading1(editor) {
  editor.BlockManager.add("heading-1", {
    label: `              
   <i class="bi bi-list-nested fs-4  p-2" title="Heading 1"></i>
    <div class="gjs-block-label ">H1</div>

`,
    category: htmlElements,
    type: "heading-1",
    open: false,

    content: `         
    
<h1 class="p-2 main-comp">This is Heading One</h1>

`,
  });
}
