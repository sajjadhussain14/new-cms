import { formElements } from "../../../components/custom/categories";

export default function selectBox1(editor) {
  editor.BlockManager.add("select-box-1", {
    label: `              
     <i class="bi bi-menu-button-wide fs-4 p-2" title="Select Box"></i>
    <div class="gjs-block-label">Select Box 1</div>

`,
    category: formElements,
    type: "select-box-1",
    open: false,

    content: `                      
<div class="form-group p-2">
    <label class="selectlabel">Select Element</label>
    <select id="" class="form-control select-full">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
        <option>Option 5</option>
    </select>
</div>
<style>
    label.selectlabel {
        font-size: 14px;
        color: #222;
        text-transform: capitalize;
    }

    select.select-full {
        font-size: 14px;
        height: 40px;
        border: 1px solid #444;
        line-height: 40px;
        padding: 0 15px;
        text-transform: capitalize;
        color: #222;
        width: 100%;
    }

</style>

`,
  });
}
