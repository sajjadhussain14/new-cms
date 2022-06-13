const generatePriview = () => {
  // GET PAGE URL
  let protocol = window.location.protocol;
  let host = window.location.host;
  let pathname = window.location.pathname;
  pathname = pathname.split("/").join(" > ");
  let search = window.location.search;

  // TRIM URL LATER PART
  let laterPart = pathname + search;
  if (laterPart.length > 23) {
    laterPart = laterPart.substring(0, 23);
    laterPart = laterPart + "...";
  }

  // DISPLAY LATEST SNIPPET TITLE
  let title = document.getElementById("meta-title").value;
  if (title.length > 60) {
    title = title.substring(0, 60);
    title = title + "...";
  }
  if (title == "") {
    document.getElementById("snippet-title").innerHTML =
      "This is how the Page Title appears in search results but if it is too long ...";
  } else {
    document.getElementById("snippet-title").innerHTML = title;
  }

  // DISPLAY LATEST SNIPPET DESCRIPTION DATE
  var today = new Date();

  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  document.getElementById("snippet-desc-date").innerHTML = date + " - ";

  // DISPLAY LATEST SNIPPET DESCRIPTION
  let desc = document.getElementById("meta-description").value;
  if (desc.length > 160) {
    desc = desc.substring(0, 160);
    desc = desc + "...";
  }
  if (desc == "") {
    document.getElementById("snippet-desc").innerHTML = ` 
          This is the page description. Despite the meta description element's content, the text here
          depends on the search query
          and is rarely longer than 160 ...
`;
  } else {
    document.getElementById("snippet-desc").innerHTML = desc;
  }

  var newURL = protocol + "//" + host + "/" + laterPart;

  document.getElementById("currentURL").innerHTML = "";
};

const focusKeywordReport = (id, targetID, text) => {
  if (id == "richText-editor") {
    try {
      if (
        document.getElementsByClassName(id)[0].innerHTML.includes("highlight")
      ) {
        document.getElementById(targetID).innerHTML = `
                <i class="fa fa-check"></i> <strong> Focus Keyword</strong>
                            is in <strong>${text}</strong>.
                            `;
      } else {
        document.getElementById(targetID).innerHTML = ` 
            
            <i class="fa fa-times"></i> <strong> Focus Keyword</strong>
                            is <strong>Missing</strong> in <strong>${text}</strong>.
            
            `;
      }
    } catch (err) {}
  } else {
    if (document.getElementById(id).innerHTML.includes("highlight")) {
      document.getElementById(targetID).innerHTML = `
                <i class="fa fa-check"></i> <strong> Focus Keyword</strong>
                            is in <strong>${text}</strong>.
                            `;
    } else {
      document.getElementById(targetID).innerHTML = ` 
            
            <i class="fa fa-times"></i> <strong> Focus Keyword</strong>
                            is <strong>Missing</strong> in <strong>${text}</strong>.
            
            `;
    }
  }
};

const recheckFocuskeyword = (id) => {
  var text = document.getElementById("focus-key-word").value;

  $("#meta-title2").highlite({
    text: text,
  });

  $("#meta-description2").highlite({
    text: text,
  });

  $("#metakeywords2").highlite({
    text: text,
  });

  $("#seo-heading2").highlite({
    text: text,
  });

  $(".richText-editor").highlite({
    text: text,
  });

  checkFocusKeywordSeo();
};

let totalSeoScore = 0;

let titleSeoScore = 0;
let descSeoScore = 0;
let keywordSeoScore = 0;
let headingSeoScore = 0;
let textSeoScore = 0;
let focusKeywordSeoScore = 0;
let focusKeywordFoundSeoScore = 0;

DrawSeoGraph();

$(function () {
  $("#focus-key-word").on("blur search change keyup", function () {
    var text = this.value;
    $("#meta-title2").highlite({
      text: text,
    });

    $("#meta-description2").highlite({
      text: text,
    });

    $("#metakeywords2").highlite({
      text: text,
    });

    $("#seo-heading2").highlite({
      text: text,
    });

    $(".richText-editor").highlite({
      text: text,
    });

    checkFocusKeywordSeo();
  });
});

const checkTitleSeo = () => {
  let title = document.getElementById("meta-title2").innerHTML;
  let pureTitleText = convertHtmlToText(title);
  document.getElementById("meta-title").value = document
    .getElementById("meta-title")
    .value.trim();
  document.getElementById("meta-title").value = pureTitleText;

  let seoTitleLen = 0;
  let color = "none";
  let titleText = "";
  let host = "dummy.com/";
  titleText = document.getElementById("meta-title").value;

  titleText = titleText.trimStart();
  titleText = titleText.trimEnd();
  seoTitleLen = titleText.length;

  document.getElementById("title-length").innerHTML = seoTitleLen;

  if (!seoTitleLen) seoTitleLen = 0;
  document.getElementById("title-seo-bar").style.width = seoTitleLen + "%";
  if (seoTitleLen <= 0) {
    color = "red";
    document.getElementById("title-report").innerHTML = `
                <i class="fa fa-times"></i>
 <strong>SEO Title</strong> length is <strong>0</strong> characters. It Must be between <strong>30 to 60</strong>.
                `;
  } else if (seoTitleLen > 0 && seoTitleLen <= 14) {
    color = "red";
    document.getElementById("title-report").innerHTML = `
                <i class="fa fa-times"></i>
 <strong>SEO Title</strong> length is <strong>${seoTitleLen}</strong> characters. It Must be between <strong>30 to 60</strong>.
                `;
  } else if (seoTitleLen >= 15 && seoTitleLen <= 29) {
    color = "orange";
    document.getElementById("title-report").innerHTML = `
                <i class="fa fa-exclamation-triangle"></i>
 <strong>SEO Title</strong> length is <strong>${seoTitleLen}</strong> characters. It Must be between <strong>30 to 60</strong>.
                `;
  } else if (seoTitleLen >= 30 && seoTitleLen <= 60) {
    color = "green";
    document.getElementById("title-report").innerHTML = `
                <i class="fa fa-check"></i>
 <strong>SEO Title</strong> length is <strong>${seoTitleLen}</strong> characters. It is in between <strong>30 to 60</strong>.
                `;
  } else if (seoTitleLen >= 61 && seoTitleLen <= 79) {
    color = "orange";
    document.getElementById("title-report").innerHTML = `
                <i class="fa fa-times"></i>
 <strong>SEO Title</strong> length is <strong>${seoTitleLen}</strong> characters. It Must be between <strong>30 to 60</strong>.
                `;
  } else if (seoTitleLen > 80) {
    color = "red";
    document.getElementById("title-report").innerHTML = `
                <i class="fa fa-times"></i>
 <strong>SEO Title</strong> length is <strong>${seoTitleLen}</strong> characters. It Must be between <strong>30 to 60</strong>.
                `;
  }

  document.getElementById("title-seo-bar").style.backgroundColor = color;
  let seoUrl = host + getCleanUrl(titleText);
  // document.getElementById('snip-url').innerHTML = seoUrl
  titleSeoScore = 0;
  // console.log(color);
  if (color == "green") {
    titleSeoScore = 15;
  } else if (color == "orange") {
    titleSeoScore = 7;
  } else if (color == "red") {
    titleSeoScore = 0;
  } else {
    titleSeoScore = 0;
  }

  DrawSeoGraph();
  generatePriview();
};

const checkHeadingSeo = () => {
  let heading = document.getElementById("seo-heading2").innerHTML;
  let pureTitleText = convertHtmlToText(heading);
  document.getElementById("seo-heading").value = pureTitleText;

  let seoHeadingLen = 0;
  let color = "none";
  let headingText = "";
  let host = "";
  headingText = document.getElementById("seo-heading").value;

  headingText = headingText.trimStart();
  headingText = headingText.trimEnd();
  seoTitleLen = headingText.length;
  seoHeadingLen = headingText.length;

  document.getElementById("heading-length").innerHTML = seoHeadingLen;

  if (!headingText) headingText = 0;
  document.getElementById("heading-seo-bar").style.width = seoHeadingLen + "%";
  if (seoHeadingLen <= 0) {
    color = "red";
    document.getElementById("heading-report").innerHTML = `
                <i class="fa fa-times"></i>
 <strong>Page Heading</strong> length is <strong>${seoHeadingLen}</strong> characters. 
                `;
  }
  if (seoHeadingLen > 0 && seoHeadingLen <= 14) {
    color = "green";
    document.getElementById("heading-report").innerHTML = `
                <i class="fa fa-check"></i>
 <strong>Page Heading</strong> length is <strong>${seoHeadingLen}</strong> characters.
                `;
  } else if (seoHeadingLen >= 15 && seoHeadingLen <= 29) {
    color = "green";

    document.getElementById("heading-report").innerHTML = `
                <i class="fa fa-check"></i>
 <strong>Page Heading</strong> length is <strong>${seoHeadingLen}</strong> characters.
                `;
  } else if (seoHeadingLen >= 30 && seoHeadingLen <= 60) {
    color = "green";
    document.getElementById("heading-report").innerHTML = `
                <i class="fa fa-check"></i>
 <strong>Page Heading</strong> length is <strong>${seoHeadingLen}</strong> characters.
                `;
  } else if (seoHeadingLen >= 61 && seoHeadingLen <= 79) {
    color = "green";
    document.getElementById("heading-report").innerHTML = `
                <i class="fa fa-check"></i>
 <strong>Page Heading</strong> length is <strong>${seoHeadingLen}</strong> characters.
                `;
  } else if (seoHeadingLen > 80) {
    color = "green";
    document.getElementById("heading-report").innerHTML = `
                <i class="fa fa-check"></i>
 <strong>Page Heading</strong> length is <strong>${seoHeadingLen}</strong> characters. 
                `;
  }

  document.getElementById("heading-seo-bar").style.backgroundColor = color;
  let seoUrl = host + getCleanUrl(headingText);
  // document.getElementById('snip-url').innerHTML = seoUrl
  headingSeoScore = 0;
  if (color == "green") {
    headingSeoScore = 10;
  } else if (color == "orange") {
    headingSeoScore = 5;
  } else if (color == "red") {
    headingSeoScore = 0;
  } else {
    headingSeoScore = 0;
  }
  DrawSeoGraph();
};

const checkDescriptionSeo = () => {
  let description = document.getElementById("meta-description2").innerHTML;
  let pureDescriptionText = convertHtmlToText(description);
  document.getElementById("meta-description").value = pureDescriptionText;
  let seoDescptionLen = 0;
  let color = "none";
  let descriptionText = "";
  descriptionText = document.getElementById("meta-description").value;

  descriptionText = descriptionText.trimStart();
  descriptionText = descriptionText.trimEnd();

  seoDescptionLen = descriptionText.length;

  document.getElementById("desc-length").innerHTML = seoDescptionLen;

  if (!seoDescptionLen) seoDescptionLen = 0;
  document.getElementById("description-seo-bar").style.width =
    seoDescptionLen / 2 + "%";

  if (seoDescptionLen <= 0) {
    color = "red";
    document.getElementById("desc-report").innerHTML = `
                <i class="fa fa-times"></i>
 <strong>SEO Description</strong> length is <strong>${seoDescptionLen}</strong> characters. It Must be between <strong>100 to 156</strong>.
                `;
  } else if (seoDescptionLen > 0 && seoDescptionLen <= 39) {
    color = "red";

    document.getElementById("desc-report").innerHTML = `
                <i class="fa fa-times"></i>
 <strong>SEO Description</strong> length is <strong>${seoDescptionLen}</strong> characters. It Must be between <strong>100 to 156</strong>.
                `;
  } else if (seoDescptionLen >= 40 && seoDescptionLen <= 99) {
    color = "orange";
    document.getElementById("desc-report").innerHTML = `
                <i class="fa fa-exclamation-triangle"></i>
 <strong>SEO Description</strong> length is <strong>${seoDescptionLen}</strong> characters. It Must be between <strong>100 to 156</strong>.
                `;
  } else if (seoDescptionLen >= 100 && seoDescptionLen <= 156) {
    color = "green";
    document.getElementById("desc-report").innerHTML = `
                <i class="fa fa-check"></i>
 <strong>SEO Description</strong> length is <strong>${seoDescptionLen}</strong> characters. It is in between <strong>100 to 156</strong>.
                `;
  } else if (seoDescptionLen >= 157 && seoDescptionLen <= 179) {
    color = "orange";
    document.getElementById("desc-report").innerHTML = `
                <i class="fa fa-exclamation-triangle"></i>
 <strong>SEO Description</strong> length is <strong>${seoDescptionLen}</strong> characters. It Must be between <strong>100 to 156</strong>.
                `;
  } else if (seoDescptionLen > 180) {
    color = "red";

    document.getElementById("desc-report").innerHTML = `
                <i class="fa fa-times"></i>
 <strong>SEO Description</strong> length is <strong>${seoDescptionLen}</strong> characters. It Must be between <strong>100 to 156</strong>.
                `;
  }

  document.getElementById("description-seo-bar").style.backgroundColor = color;
  // document.getElementById('snip-description').innerHTML = descriptionText
  if (color == "green") {
    descSeoScore = 15;
  } else if (color == "orange") {
    descSeoScore = 7;
  } else if (color == "red") {
    descSeoScore = 0;
  } else {
    descSeoScore = 0;
  }
  DrawSeoGraph();
  generatePriview();
};

const checkTextSeo = () => {
  let seoTextLen = 0;
  let color = "none";
  let textSeo = "";
  textSeo = document.getElementById("editor1").value;
  seoTextLen = document.getElementById("editor1").value.length;
  document.getElementById("text-length").innerHTML = seoTextLen;

  if (!seoTextLen) seoTextLen = 0;
  document.getElementById("text-seo-bar").style.width = seoTextLen / 2 + "%";
  if (seoTextLen <= 0) {
    color = "red";
    document.getElementById("text-report").innerHTML = `
                <i class="fa fa-times"></i>
 <strong>Page Text</strong> length is <strong>${seoTextLen}</strong>. It Must be greater than <strong>299</strong>.
                `;
  }
  if (seoTextLen > 0 && seoTextLen <= 299) {
    color = "orange";
    document.getElementById("text-report").innerHTML = `
                <i class="fa fa-exclamation-triangle"></i>
 <strong>Page Text</strong> length is <strong>${seoTextLen}</strong>. It Must be greater than <strong>299</strong>.
                `;
  } else if (seoTextLen >= 300) {
    color = "green";
    document.getElementById("text-report").innerHTML = `
                <i class="fa fa-check"></i>
 <strong>Page Text</strong> length is <strong>${seoTextLen}</strong>. It is good for <strong>SEO</strong>.
                `;
    document.getElementById("text-seo-bar").style.backgroundColor = color;
    // document.getElementById('snip-description').innerHTML = descriptionText
  }
  if (color == "green") {
    textSeoScore = 10;
  } else if (color == "orange") {
    textSeoScore = 5;
  } else if (color == "red") {
    textSeoScore = 0;
  } else {
    textSeoScore = 0;
  }
  DrawSeoGraph();
};

const checkKeywordsSeo = () => {
  let keywords = document.getElementById("metakeywords2").innerHTML;
  let pureKeywords = convertHtmlToText(keywords);
  document.getElementById("metakeywords").value = pureKeywords;

  let seoKeywordLen = 0;
  let color = "none";
  let keywordsText = "";
  let host = "";

  keywordSeoScore = 0;
  keywords = document.getElementById("metakeywords").value;

  keywords = keywords.replace(/\s\s+/g, " ");
  keywords = keywords.replace(" ", "");
  keywords = keywords.replace(/\s/g, "");

  let keywordsArrayTemp = keywords.split(",");
  var keywordsArray = keywordsArrayTemp.filter(function (e) {
    return e !== "";
  });
  // console.log(keywordsArray);
  if (!keywordsArray) keywordsArray = [];

  seoKeywordLen = keywords.length;

  document.getElementById("keywords-length").innerHTML = keywordsArray.length;

  if (!seoKeywordLen) seoKeywordLen = 0;
  document.getElementById("keywords-seo-bar").style.width =
    seoKeywordLen / 2 + "%";

  if (keywordsArray.length <= 0) {
    color = "red";

    document.getElementById("keywords-report").innerHTML = `
                <i class="fa fa-times"></i>
                <strong> Meta Keywords</strong> are <strong>${keywordsArray.length}</strong>. There Must be <strong>5</strong> Keywords.
                `;
  } else if (keywordsArray.length == 1) {
    color = "red";
    document.getElementById("keywords-report").innerHTML = `
                <i class="fa fa-times"></i>
                <strong> Meta Keywords</strong> are <strong>${keywordsArray.length}</strong>. There Must be <strong>5</strong> Keywords.
                `;
  } else if (keywordsArray.length > 1 && keywordsArray.length <= 3) {
    color = "orange";

    document.getElementById("keywords-report").innerHTML = `
                <i class="fa fa-exclamation-triangle"></i>
                <strong> Meta Keywords</strong> are <strong>${keywordsArray.length}</strong>. There Must be <strong>5</strong> Keywords.
                `;
  } else if (keywordsArray.length > 3 && keywordsArray.length <= 6) {
    color = "green";
    document.getElementById("keywords-report").innerHTML = `
                <i class="fa fa-check"></i>
                <strong> Meta Keywords</strong> are <strong>${keywordsArray.length}</strong>. It is <strong>Good</strong> for SEO.
                `;
  } else if (keywordsArray.length > 6 && keywordsArray.length <= 10) {
    color = "orange";

    document.getElementById("keywords-report").innerHTML = `
                <i class="fa fa-exclamation-triangle"></i>
                <strong> Meta Keywords</strong> are <strong>${keywordsArray.length}</strong>. There Must be <strong>5</strong> Keywords.
                `;

    if (keywordsArray.length > 8 && keywordsArray.length < 11) {
    }
  } else if (keywordsArray.length > 10) {
    color = "red";

    document.getElementById("keywords-report").innerHTML = `
                <i class="fa fa-times"></i>
                <strong> Meta Keywords</strong> are <strong>${keywordsArray.length}</strong>. There Must be <strong>5</strong> Keywords.
                `;
  }

  document.getElementById("keywords-seo-bar").style.backgroundColor = color;
  // document.getElementById('snip-url').innerHTML = seoUrl

  if (color == "green") {
    keywordSeoScore = 15;
  } else if (color == "orange") {
    keywordSeoScore = 7;
  } else if (color == "red") {
    keywordSeoScore = 0;
  } else {
    keywordSeoScore = 0;
  }

  DrawSeoGraph();
};

const focusKeywordLengthCheck = () => {
  let focusText = document.getElementById("focus-key-word").value;

  focusText = focusText.replace(/\s\s+/g, " ");
  focusText = focusText.replace(" ", "");
  focusText = focusText.replace(/\s/g, "");

  let keywordsArrayTemp = focusText.split(",");
  var keywordsArray = keywordsArrayTemp.filter(function (e) {
    return e !== "";
  });
  keywordsArray = keywordsArray.filter(function (e) {
    return e !== " ";
  });

  if (!keywordsArray) keywordsArray = [];
  focusKeywordSeoScore = 0;

  if (keywordsArray <= 0) {
    document.getElementById("focus-keyword-report").innerHTML = `
                <i class="fa fa-times"></i>
                    <strong>Focus Keyword</strong> is <strong>Missing</strong>.There Must be <strong>1</strong> Focus Keyword.
                `;
    focusKeywordSeoScore = 0;
  } else if (keywordsArray.length == 1) {
    document.getElementById("focus-keyword-report").innerHTML = `
                <i class="fa fa-check"></i>
                 There is <strong>1</strong> Focus Keyword.It is good for <strong>SEO</strong>.
                `;
    focusKeywordSeoScore = 10;
  } else if (keywordsArray.length > 1) {
    document.getElementById("focus-keyword-report").innerHTML = `
                <i class="fa fa-times"></i>
                 There are <strong>${keywordsArray.length}</strong> Focus Keywords .It Must be <strong>1</strong> Keyword.
                `;

    focusKeywordSeoScore = 0;
  }
  DrawSeoGraph();
};

const checkFocusKeywordSeo = () => {
  let focusKeywords = document.getElementById("focus-key-word").value;

  let focusKeywordsLen = 0;
  let color = "none";
  let focusKeywordsText = "";
  let host = "";

  focusKeywords = focusKeywords.replace(/\s\s+/g, " ");
  focusKeywords = focusKeywords.replace(" ", "");
  focusKeywords = focusKeywords.replace(/\s/g, "");

  focusKeywordsLen = focusKeywords.length;
  if (!focusKeywordsLen) focusKeywordsLen = 0;
  document.getElementById("focus-seo-bar").style.width =
    focusKeywordsLen / 2 + "%";

  setTimeout(() => {
    let score = 0;
    let text = "highlight";
    let matches = 0;
    focusKeywordFoundSeoScore = 0;
    if (document.getElementById("meta-title2").innerHTML.includes(text)) {
      score = score + 4;
      matches++;
    }
    if (document.getElementById("meta-description2").innerHTML.includes(text)) {
      score = score + 4;
      matches++;
    }
    if (document.getElementById("metakeywords2").innerHTML.includes(text)) {
      score = score + 4;
      matches++;
    }
    if (document.getElementById("seo-heading2").innerHTML.includes(text)) {
      score = score + 4;
      matches++;
    }
    if (
      document
        .getElementsByClassName("richText-editor")[0]
        .innerHTML.includes(text)
    ) {
      score = score + 4;
      matches++;
    }

    if (score <= 3) {
      color = "red";
    } else if (score > 3 && score <= 6) {
      color = "orange";
    } else if (score > 6) {
      color = "green";
    } else {
      score = 0;
    }

    focusKeywordFoundSeoScore = matches * 5;
    document.getElementById("focus-length").innerHTML = matches;

    document.getElementById("focus-seo-bar").style.backgroundColor = color;
    // document.getElementById('snip-url').innerHTML = seoUrl
    DrawSeoGraph();
  }, 1000);
};

const getCleanUrl = (str) => {
  try {
    str = str.replace(/ /g, "-");
  } catch (err) {}

  try {
    str = str.replace(/[^a-zA-Z0-9-]/g, "");
  } catch (err) {}

  if (!str) str = "";
  str = str.toLowerCase();
  return str;
};

/* Draw Seo Graph */
function DrawSeoGraph() {
  totalSeoScore = 0;

  totalSeoScore =
    titleSeoScore +
    descSeoScore +
    keywordSeoScore +
    headingSeoScore +
    textSeoScore +
    focusKeywordSeoScore +
    focusKeywordFoundSeoScore;

  var inputTextValue = totalSeoScore;

  // start display values
  document.getElementById("seo-score-report").innerHTML = totalSeoScore;
  document.getElementById("seo-score-report").style.color = "red";
  // end display values

  var ProgressBar = document.getElementById("progress");
  var sliderVal = document.getElementById("slidervalue");
  if (inputTextValue > -1 && inputTextValue < 49) {
    ProgressBar.style.strokeDashoffset =
      -754 + -5.65 * parseInt(inputTextValue) + "px";
    ProgressBar.style.strokeDashoffset;
    ProgressBar.style.stroke = "red";
    sliderVal.innerText = inputTextValue;
    sliderVal.style.color = "red";

    // start display values
    document.getElementById("seo-grade-report").innerHTML = "F";
    document.getElementById("seo-grade-report").style.color = "red";
    document.getElementById("seo-score-report").style.color = "red";

    // end display values
  } else if (inputTextValue >= 50 && inputTextValue < 89) {
    ProgressBar.style.strokeDashoffset =
      -754 + -5.65 * parseInt(inputTextValue) + "px";
    ProgressBar.style.stroke = "orange";
    sliderVal.innerText = inputTextValue;
    sliderVal.style.color = "orange";

    // start display values
    document.getElementById("seo-grade-report").innerHTML = "B";
    document.getElementById("seo-grade-report").style.color = "orange";
    document.getElementById("seo-score-report").style.color = "orange";

    // end display values
  } else if (inputTextValue >= 90 && inputTextValue < 101) {
    ProgressBar.style.strokeDashoffset =
      -754 + -5.65 * parseInt(inputTextValue) + "px";
    ProgressBar.style.stroke = "darkgreen";
    sliderVal.innerText = inputTextValue;
    sliderVal.style.color = "darkgreen";

    // start display values
    document.getElementById("seo-grade-report").innerHTML = "A";
    document.getElementById("seo-grade-report").style.color = "green";
    document.getElementById("seo-score-report").style.color = "green";

    // end display values
  } else {
  }

  focusKeywordReport("meta-title2", "focus-in-title", "SEO Title");
  focusKeywordReport("meta-description2", "focus-in-desc", "SEO Description");
  focusKeywordReport("metakeywords2", "focus-in-keywords", "Meta Keywords");
  focusKeywordReport("seo-heading2", "focus-in-heading", "Page Heading");
  focusKeywordReport("richText-editor", "focus-in-text", "Page Text");
}

const convertHtmlToText = (impureString) => {
  //-- remove BR tags and replace them with line break
  impureString = impureString.replace(/<br>/gi, "");
  impureString = impureString.replace(/<br\s\/>/gi, "");
  impureString = impureString.replace(/<br\/>/gi, "");

  //-- remove P and A tags but preserve what's inside of them
  impureString = impureString.replace(/<p.*>/gi, "");
  impureString = impureString.replace(
    /<a.*href="(.*?)".*>(.*?)<\/a>/gi,
    " $2 ($1)"
  );

  //-- remove all inside SCRIPT and STYLE tags
  impureString = impureString.replace(
    /<script.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/script>/gi,
    ""
  );
  impureString = impureString.replace(
    /<style.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/style>/gi,
    ""
  );
  //-- remove all else
  impureString = impureString.replace(/<(?:.|\s)*?>/g, "");

  //-- get rid of more than 2 multiple line breaks:
  impureString = impureString.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/gim, "\n\n");

  //-- get rid of more than 2 spaces:
  impureString = impureString.replace(/ +(?= )/g, "");

  //-- get rid of html-encoded characters:
  impureString = impureString.replace(/&nbsp;/gi, " ");
  impureString = impureString.replace(/&amp;/gi, "&");
  impureString = impureString.replace(/&quot;/gi, '"');
  impureString = impureString.replace(/&lt;/gi, "<");
  impureString = impureString.replace(/&gt;/gi, ">");
  impureString = impureString.replace("<br>", "");

  //-- return
  return impureString;
};

//////-- text editor+
const checkTextSeoDetails = () => {
  let seoTextLen = 0;
  let color = "none";
  let textSeo = "";
  let tempString = "";
  textSeo = document.getElementsByClassName("richText-editor")[0].innerHTML;

  tempString = document.getElementsByClassName("richText-editor")[0].innerHTML;

  // tempString = convertHtmlToText(tempString);
  tempString = tempString.replace(/\s\s+/g, " ");

  seoTextLen = tempString.split(" ").length;
  if (tempString == "" || tempString == " ") {
    seoTextLen = 0;
  }
  document.getElementById("text-length").innerHTML = seoTextLen;

  if (!seoTextLen) seoTextLen = 0;
  document.getElementById("text-seo-bar").style.width = seoTextLen / 2 + "%";
  if (seoTextLen <= 0) {
    color = "red";
    document.getElementById("text-report").innerHTML = `
                <i class="fa fa-times"></i>
 <strong>Page Text</strong> length is <strong>${seoTextLen}</strong> words. It Must be greater than <strong>200 </strong> words.
                `;
  }
  if (seoTextLen > 0 && seoTextLen <= 156) {
    color = "red";
    document.getElementById("text-report").innerHTML = `
                <i class="fa fa-times"></i>
 <strong>Page Text</strong> length is <strong>${seoTextLen}</strong> words. It Must be greater than <strong>200 </strong> words.
                `;
  } else if (seoTextLen >= 150 && seoTextLen <= 199) {
    color = "orange";
    document.getElementById("text-report").innerHTML = `
                <i class="fa fa-exclamation-triangle"></i>
 <strong>Page Text</strong> length is <strong>${seoTextLen}</strong> words. It Must be greater than <strong>200 </strong> words.
                `;
  } else if (seoTextLen >= 200 && seoTextLen <= 300) {
    color = "green";
    document.getElementById("text-report").innerHTML = `
                <i class="fa fa-check"></i>
 <strong>Page Text</strong> length is <strong>${seoTextLen}</strong> words. It is good for <strong>SEO</strong> words.
                `;
  } else if (seoTextLen >= 301 && seoTextLen <= 399) {
    color = "orange";
    document.getElementById("text-report").innerHTML = `
                <i class="fa fa-exclamation-triangle"></i>
 <strong>Page Text</strong> length is <strong>${seoTextLen}</strong> words. It Must be between <strong>200 to 300</strong> words.
                `;
  } else if (seoTextLen > 399) {
    color = "red";

    document.getElementById("text-report").innerHTML = `
                <i class="fa fa-times"></i>
 <strong>Page Text</strong> length is <strong>${seoTextLen}</strong> words. It Must be between <strong>200 to 300</strong> words.
                `;
  }

  document.getElementById("text-seo-bar").style.backgroundColor = color;
  // document.getElementById('snip-description').innerHTML = descriptionText
  if (color == "green") {
    textSeoScore = 10;
  } else if (color == "orange") {
    textSeoScore = 5;
  } else if (color == "red") {
    textSeoScore = 0;
  } else {
    textSeoScore = 0;
  }
  DrawSeoGraph();
};

$(document).ready(function () {
  checkTitleSeo();
  checkDescriptionSeo();
  checkKeywordsSeo();
  checkHeadingSeo();
  checkTextSeoDetails();
  recheckFocuskeyword();
  checkFocusKeywordSeo();
  focusKeywordLengthCheck();
  generatePriview();
  loadingImagesReport();
  loadingHTagsReport();
  setTimeout(() => {
    seoPageAnalysis();
  }, 4000);
  $(".richText-editor").on("input", function () {
    let seoText =
      document.getElementsByClassName("richText-editor")[0].innerHTML;
    document.getElementById("editor2").value = btoa(seoText);
  });

  $(".richText-editor").keyup(function (event) {
    let seoTextLen = 0;
    let color = "none";
    let textSeo = "";
    let tempString = "";
    textSeo = document.getElementsByClassName("richText-editor")[0].innerHTML;

    tempString =
      document.getElementsByClassName("richText-editor")[0].innerHTML;

    // tempString = convertHtmlToText(tempString);
    tempString = tempString.replace(/\s\s+/g, " ");

    seoTextLen = tempString.split(" ").length;
    if (tempString == "" || tempString == " ") {
      seoTextLen = 0;
    }
    document.getElementById("text-length").innerHTML = seoTextLen;

    if (!seoTextLen) seoTextLen = 0;
    document.getElementById("text-seo-bar").style.width = seoTextLen / 2 + "%";
    if (seoTextLen <= 0) {
      color = "red";
      document.getElementById("text-report").innerHTML = `
                <i class="fa fa-times"></i>
 <strong>Page Text</strong> length is <strong>${seoTextLen}</strong> words. It Must be greater than <strong>200</strong> words.
                `;
    }
    if (seoTextLen > 0 && seoTextLen <= 156) {
      color = "red";
      document.getElementById("text-report").innerHTML = `
                <i class="fa fa-times"></i>
 <strong>Page Text</strong> length is <strong>${seoTextLen}</strong> words. It Must be greater than <strong>200</strong> words.
                `;
    } else if (seoTextLen >= 150 && seoTextLen <= 199) {
      color = "orange";
      document.getElementById("text-report").innerHTML = `
                <i class="fa fa-exclamation-triangle"></i>
 <strong>Page Text</strong> length is <strong>${seoTextLen}</strong> words. It Must be greater than <strong>200</strong> words.
                `;
    } else if (seoTextLen >= 200 && seoTextLen >= 300) {
      color = "green";
      document.getElementById("text-report").innerHTML = `
                <i class="fa fa-check"></i>
 <strong>Page Text</strong> length is <strong>${seoTextLen}</strong> words. It is good for <strong>SEO</strong> words.
                `;
    }
    document.getElementById("text-seo-bar").style.backgroundColor = color;
    // document.getElementById('snip-description').innerHTML = descriptionText
    if (color == "green") {
      textSeoScore = 10;
    } else if (color == "orange") {
      textSeoScore = 5;
    } else if (color == "red") {
      textSeoScore = 0;
    } else {
      textSeoScore = 0;
    }
    DrawSeoGraph();
  });
  $(".richText-editor").blur(function (event) {
    recheckFocuskeyword();
  });
});

const loadingImagesReport = () => {
  let imgRpt = document.getElementById("img-rpt");

  imgRpt.innerHTML = `<div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

  setTimeout(() => {
    imgRpt.innerHTML = `                         
       <p id="images-report"></p>
      <p id="alt-images-report"></p>
`;
  }, 3000);
};

const loadingHTagsReport = () => {
  let imgRpt = document.getElementById("h-rpt");

  imgRpt.innerHTML = `<div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

  setTimeout(() => {
    imgRpt.innerHTML = `                         
                            <p id="h1-report"></p>
                            <p id="number-h1-report"></p>
                            <p id="h2-report"></p>
                            <p id="h3-report"></p>
                            <p id="h4-report"></p>
                            <p id="h5-report"></p>
                            <p id="h6-report"></p>
`;
  }, 3000);
};

// START PAGE ANALYSIS REPORT
const seoPageAnalysis = () => {
  let targetContent = document.getElementById("contentHolder");

  //IMAGES ANALYSIS
  pageImagesAnalysis(targetContent);

  // H1 ANALYSIS
  pageHTagsAnalysis(targetContent);
};

const pageHTagsAnalysis = (targetContent) => {
  let H1Number = 0;
  let H2Number = 0;
  let H3Number = 0;
  let H4Number = 0;
  let H5Number = 0;
  let H6Number = 0;

  let h1InContent = targetContent.getElementsByTagName("h1");
  let h2InContent = targetContent.getElementsByTagName("h2");
  let h3InContent = targetContent.getElementsByTagName("h3");
  let h4InContent = targetContent.getElementsByTagName("h4");
  let h5InContent = targetContent.getElementsByTagName("h5");
  let h6InContent = targetContent.getElementsByTagName("h6");

  for (let i = 1; i <= 6; i++) {
    let tag = "h" + i + "InContent";
    if (eval(tag).length == 1) {
      document.getElementById("h" + i + "-report").innerHTML = `
          <i  class="fa fa-check" ></i >
          <strong> H${i} Tag </strong> Found in the Content of page
                                    `;

      if (i == 1) {
        try {
          document.getElementById("number-h1-report").classList.add("d-none");
        } catch (err) {}
      }
    } else if (eval(tag).length > 1) {
      if (i == 1) {
        try {
          document
            .getElementById("number-h1-report")
            .classList.remove("d-none");
        } catch (err) {}

        document.getElementById("h" + i + "-report").innerHTML = `
          <i  class="fa fa-check" ></i >
          <strong> H${i} Tag </strong> Found in the Content of page
                                    `;

        document.getElementById("number-h1-report").innerHTML = `
                <i i class="fa fa-times" ></i >
                    ${
                      h1InContent.length + " "
                    } <strong> H1 Tags</strong> Found in the Content of Page`;
      } else {
        document.getElementById("h" + i + "-report").innerHTML = `
          <i  class="fa fa-check" ></i >
          ${h1InContent.length} <strong> H${i} Tag</strong> Found in the Content of Page`;
      }
    } else {
      document.getElementById("h" + i + "-report").innerHTML = `
         <i  class="fa fa-times" ></i>
         No <strong> H${i} Tag </strong> Found in the Content of page`;

      if (i == 1) {
        try {
          document.getElementById("number-h1-report").classList.add("d-none");
        } catch (err) {}
      }
    }
  }
};

const pageImagesAnalysis = (targetContent) => {
  let imageMissingSrc = [];
  let imagesCount = 0;
  let imageMissingAlt = 0;

  allContentImages = targetContent.getElementsByTagName("img");
  imagesCount = allContentImages.length;
  for (let i = 0; i < allContentImages.length; i++) {
    if (allContentImages[i].alt.trim() == "") {
      imageMissingAlt++;
      imageMissingSrc.push(allContentImages[i].src);
    }
  }

  let ims = "<ul>";
  for (let i = 0; i < imageMissingSrc.length; i++) {
    ims +=
      '<li><a href="' +
      imageMissingSrc[i] +
      '" target="_blank">' +
      imageMissingSrc[i] +
      "</a></li>";
  }
  ims += "</ul>";

  if (allContentImages.length > 0) {
    document.getElementById("images-report").innerHTML = `
<i i class="fa fa-check" ></i >
<strong>${allContentImages.length}</strong> Images Found in the Content of page
`;
  } else {
    document.getElementById("images-report").innerHTML = `
< i class="fa fa-check" ></ >
<strong> No </strong> Images Found in the Content of page
`;
  }

  if (imageMissingAlt > 0) {
    document.getElementById("alt-images-report").innerHTML = `
    <i i class="fa fa-times" ></i >
<strong> ${imageMissingAlt} </strong> Images Missing Alt Tag Value  in the Content of page
<div id="pca">
    <div class="accordion" id="faq">
        <div class="card">
            <div class="card-header" id="faqhead1">
                <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq1" aria-expanded="true" aria-controls="faq1"><strong>Missing Images Detail</strong></a>
            </div>
            <div id="faq1" class="collapse" aria-labelledby="faqhead1" data-parent="#faq">
                <div class="card-body">
                  ${ims}         
                </div>
            </div>
        </div>   
    </div>
</div>
`;
  } else {
    document.getElementById("alt-images-report").innerHTML = `
<i i class="fa fa-check" ></i >
<strong> No </strong> Images Missing ALT Tag in the Content of page
`;
  }
};

// END PAGE ANALYSIS REPORT
