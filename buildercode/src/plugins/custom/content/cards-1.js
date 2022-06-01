import { contents } from "../../../components/custom/categories";

export default function card1(editor) {
  editor.BlockManager.add("cards-1", {
    label: `               
<i class="bi bi-wallet2 fs-4  p-2" title="Cards Layout"></i>
    <div class="gjs-block-label ">Card 1</div>

`,
    category: contents,
    type: "cards-1",
    open: false,

    content: `
    <section data-gjs-name="Cards" class="d-block main-comp">        
          <div class="row  " >
              
<div data-gjs-name="Cards Layout" class="card col-lg-3 col-md-6 col-sm-12 col-12 my-2  ">
<div class="cardinner">
  <img class="card-img-top" src="" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a href="#" class="cardbutton">Go somewhere</a>
  </div>
</div>
</div>


<div data-gjs-name="Cards Layout" class="card col-lg-3 col-md-6 col-sm-12 col-12 my-2">
<div class="cardinner">
  <img class="card-img-top" src="" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a href="#" class="cardbutton">Go somewhere</a>
  </div>
</div>
</div>




<div data-gjs-name="Cards Layout" class="card col-lg-3 col-md-6 col-sm-12 col-12 my-2">
<div class="cardinner">
  <img class="card-img-top" src="" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a href="#" class="cardbutton">Go somewhere</a>
  </div>
</div>
</div>



<div data-gjs-name="Cards Layout" class="card col-lg-3 col-md-6 col-sm-12 col-12 my-2">
<div class="cardinner">
  <img class="card-img-top" src="" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a href="#" class="cardbutton">Go somewhere</a>
  </div>
</div>
</div>





          </div>

 </section>
          
<style>
.cardinner{box-shadow: 0px 3px 4px grey;padding:10px;}
  .card {


    border:0px!important;
    margin:30px 0;
    display:block
  }

  .card-img-top {
    width: 100%;
    max-width: max-content;
    margin: 0 auto;
    display: block;
  }

  .card-body {
    padding: 15px 0;
  }

  .card-title {
    color: #333;
    font-size: 22px;
    text-align: left;
    text-transform: capitalize;
    margin: 10px 0;
  }

  .card-text {
    color: #555;
    font-size: 16px;
    text-align: left;
    text-transform: capitalize;
    margin: 10px 0;
    line-height: 20px;
  }

  .cardbutton {
    width: 150px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    color: #fff;
    background: darkred;
    padding: 0px;
    display: block;
    margin: 10px auto;
    text-decoration: none;
  }

</style>

`,
  });
}
