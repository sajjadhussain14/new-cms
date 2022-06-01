import { htmlElements } from "../../../components/custom/categories";

export default function numberListhalfwidth(editor) {
  editor.BlockManager.add("number-list-half-width", {
    label: `               
   
   <i class="bi bi-list-ol fs-4  p-2" title="Use Row before it"></i>
    <div class="gjs-block-label ">Number List Half</div>

`,
    category: htmlElements,
    type: "number-list-half-width",
    open: false,

    content: `         
    
<ol data-gjs-name="Half Width number Lists" class="numberList-half   col-lg-6 col-md-6 col-sm-12">
<li class="numberList-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text</li>
<li class="numberList-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text</li>

<li class="numberList-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text</li>

<li class="numberList-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text</li>

<li class="numberList-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text</li>
<li class="numberList-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text</li>

</ul>
<style>
    .numberList-half{   padding:15px;padding-left:30px}
    .numberList-li{font-size:15px;color:#333;padding:5px;}
</style>

`,
  });
}
