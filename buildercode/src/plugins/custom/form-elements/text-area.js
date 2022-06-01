import { formElements } from "../../../components/custom/categories";

export default function textArea(editor) {
  editor.BlockManager.add("text-area", {
    label: `               
    <i class="bi bi-textarea-resize fs-4 p-2" title="Text Area"></i>
    <div class="gjs-block-label">Text Area</div>

`,
    category: formElements,
    type: "text-area",
    open: false,

    content: `                      
<style>
    label.inputlabel{font-size:14px;color:#222;text-transform: capitalize;}
    input.builderinputfull{font-size:14px;height:40px;border:1px solid #444;line-height: 40px;padding:0 15px;text-transform: capitalize;color: #222;width: 100%;}
</style>
  <div class="form-group p-2">
  <label for="exampleFormControlTextarea1" class="form-label"> Label Text</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>


`,
  });
}
