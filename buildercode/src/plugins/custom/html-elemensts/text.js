import { htmlElements } from "../../../components/custom/categories";

export default function TextElement(editor) {
  editor.BlockManager.add("TextElement", {
    label: `               
    <i class="fa fa-text fs-4  p-2" title="Text" ></i>
    <div class="gjs-block-label ">Text</div>

`,
    category: htmlElements,
    type: "text",
    open: false,
    content: `         

    <p class="w-100" >Type your Text here </p>

`,
  });
}
