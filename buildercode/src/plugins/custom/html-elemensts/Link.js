import { htmlElements } from "../../../components/custom/categories";

export default function linkElement(editor) {
  editor.BlockManager.add("linkElement", {
    label: `               
    <i class="fa fa-link fs-4  p-2" title="Link"></i>
    <div class="gjs-block-label ">Link</div>

`,
    category: htmlElements,
    type: "link",
    open: false,
    content: `         

    <a href="" class="text-decoration-none " >Link Text </a>

`,
  });
}
