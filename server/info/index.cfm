
<cfinclude template="/includes/header.cfm"  />
	<div id="root">
	</div>
<cfinclude template="/includes/footer.cfm"  />

<script>
	// GET PAGE SLUNG FROM URLS
	let webURL = window.location;
	webURL = new URL(webURL);
	let pageSlung = webURL.searchParams.get("info");


	urlParts = window.location.pathname.split("/");
	console.log('urlParts',urlParts);
let infopageName=''
if (urlParts.length > 0) {
  if (urlParts[1] && urlParts[1] == "info") {
	infopageName = urlParts[2];
  } else {
	infopageName=''
  }
}

	// DISPLAY PAGE INSIDE CONTEINER WITH ID ROOT

	setTimeout(() => {
		displayInfoPage(infopageName, "root");
	}, 1000);
  </script>

