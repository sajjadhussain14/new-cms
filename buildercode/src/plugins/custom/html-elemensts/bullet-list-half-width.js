import { htmlElements } from "../../../components/custom/categories";

export default function bulletListhalfwidth(editor) {
  editor.BlockManager.add("bullet-list-half-width", {
    label: `              
        <i class="bi bi-list-ul fs-4  p-2" title="Use Row before it"></i>
    <div class="gjs-block-label " title="Use Row before it">Bullet List Half </div>


`,
    category: htmlElements,
    type: "bullet-list-half-width",
    open: false,

    content: `         
    
<ul data-gjs-name="Half Width Bullet Lists" class="bulletList-half   col-lg-6 col-md-6 col-sm-12">
<li class="bulletList-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text</li>
<li class="bulletList-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text</li>

<li class="bulletList-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text</li>

<li class="bulletList-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text</li>

<li class="bulletList-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text</li>
<li class="bulletList-li">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text</li>

</ul>
<style>
    .bulletList-half{   padding:15px;padding-left:30px}
    .bulletList-li{font-size:15px;color:#333;padding:5px;}
</style>

`,
  });
}
