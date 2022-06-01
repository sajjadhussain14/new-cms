import { formElements } from "../../../components/custom/categories";

export default function button1(editor) {
  editor.BlockManager.add("button-1", {
    label: `               
    
    <i class="bi bi-menu-button fs-4 p-2" title="Button Element"></i>
    <div class="gjs-block-label ">Button 1</div>

`,
    category: formElements,
    type: "button-1",
    open: false,

    content: `                      
  <style>
    .dataButton {
        width: 150px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        text-transform: uppercase;
        font-size: 14px;
        color: #fff;
        background-color: blue;
        padding: 0px;
        display: block;
        border: 0px;
    }

</style>
      <button name='' id='' type="submit" class="btn dataButton ">Submit</button>


`,
  });
}
