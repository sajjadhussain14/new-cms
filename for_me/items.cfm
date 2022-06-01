<cfinclude template="includes/header.cfm">
	<!-- **** START LOAD REACT CONTENT HERE ***** -->
	<div id="root"></div>
	<!-- **** END LOAD REACT CONTENT HERE **** -->

<script>
	// GET PAGE SLUNG FROM URLS
	let webURL = window.location;
	webURL = new URL(webURL);
	let pageSlung = webURL.searchParams.get("c");
	urlParts = window.location.pathname.split("/");
	console.log('urlParts',urlParts);
	let category=''
	if (urlParts.length > 0) {
	if (urlParts[1] && urlParts[1] == "c") {
		category = urlParts[2];
	} else {
		category=''
	}
	}
	// DISPLAY PAGE INSIDE CONTEINER WITH ID ROOT
	setTimeout(() => {
        displayCategoryBanner(category, "banner-image-container");
	}, 2000);
  </script>


	
<cfinclude template="includes/footer.cfm">
