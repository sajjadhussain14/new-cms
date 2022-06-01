import { htmlElements } from "../../../components/custom/categories";

export default function imageElement(editor) {
  editor.BlockManager.add("imageElement", {
    label: `               
    <i class="fa fa-image fs-4  p-2" title="Image "></i>
    <div class="gjs-block-label ">Image </div>

`,
    category: htmlElements,
    type: "image",
    open: false,
    content: `         
 <img src='' name='' alt='' class='img-fluid'  />   

`,
  });
}
