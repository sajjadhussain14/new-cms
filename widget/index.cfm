
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
let widgetName=''
if (urlParts.length > 0) {
  if (urlParts[1] && urlParts[1] == "info") {
	widgetName = urlParts[2];
  } else {
	widgetName=''
  }
}

	// DISPLAY PAGE INSIDE CONTEINER WITH ID ROOT

	setTimeout(() => {
		displayWidget(widgetName, "root");
	}, 1000);
  </script>

