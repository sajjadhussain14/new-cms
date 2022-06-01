export const footerPlaceholder = (blockManager, footerCat) => {
  let compData = {};
  compData = {
    id: "footerPlaceholder",
    label: `
    
<i class="bi bi-menu-app-fill fs-4  p-2" title="Footer Placeholder"></i>
    <div class="gjs-block-label">Footer Placeholder
    </div>
     
    `,
    category: footerCat,
    content: `
<footer id="full-footer3" class="default-footer " >
        <div id="footerinner" class="f-footer3-innerfooter">
            <div class="container-fluid">
        <div class="row py-5" style="min-height:75px">
          <hr class="d-none">
                </div>
            </div>
        </div>
    </footer> 
    <style>
        .default-footer{font-family: 'Montserrat', sans-serif;background: #282828;} 
</style>

      `,
  };
  blockManager.add("footerPlaceholder", compData);
};
