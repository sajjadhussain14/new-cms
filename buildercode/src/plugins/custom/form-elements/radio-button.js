import { formElements } from "../../../components/custom/categories";

export default function radioButton(editor) {
  editor.BlockManager.add("radio-button", {
    label: `               
    <i class="bi bi-ui-radios fs-4 p-2" title="Radio Button"></i>
    <div class="gjs-block-label">Radio Button</div>

`,
    category: formElements,
    type: "radio-button",
    open: false,

    content: `                      
<div class="form-check">
  <input class="form-check-input" type="radio" name="" id="">
  <label class="form-check-label" for="">
    Default radio
</div>


`,
  });
}
