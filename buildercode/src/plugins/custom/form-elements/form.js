import { formElements } from "../../../components/custom/categories";

export default function form1(editor) {
  editor.BlockManager.add("form-1", {
    label: `          
<i class="bi bi-border-width fs-4 p-2" title="Form Element"></i>
    <div class="gjs-block-label ">Form </div>

`,
    category: formElements,
    type: "form-1",
    open: false,

    content: `                      
<form data-gjs-name"Form" class="builderForm main-comp">
</form>
  <style>
.builderForm{min-height:100px;}
</style>


`,
  });
}
