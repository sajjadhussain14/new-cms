import { htmlElements } from "../../../components/custom/categories";

export default function numberListFullWidth(editor) {
  editor.BlockManager.add("number-list-full-width", {
    label: `               
      <i class="bi bi-list-ol fs-4  p-2" title="Number List Full Width"></i>
    <div class="gjs-block-label ">Number List Full</div>

`,
    category: htmlElements,
    type: "number-list-full-width",
    open: false,

    content: `                      
<ol class="numberList-full  w-100 main-comp">
    <li class="numberList-full-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum is simply dummy text. Lorem
        Ipsum is simply dummy text</li>
            <li class="numberList-full-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum is simply dummy text. Lorem
        Ipsum is simply dummy text</li>
    <li class="numberList-full-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum is simply dummy text. Lorem
        Ipsum is simply dummy text</li>
    <li class="numberList-full-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum is simply dummy text. Lorem
        Ipsum is simply dummy text</li>
    <li class="numberList-full-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum is simply dummy text. Lorem
        Ipsum is simply dummy text</li>

</ol> 

<style>
    .numberList-full{padding:25px !important;}
    li.numberList-full-li{font-size:15px;color:#333;padding:5px;}
</style>


`,
  });
}
