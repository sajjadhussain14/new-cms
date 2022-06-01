var $j = jQuery.noConflict();

$j(document).tooltip({
  position: {
    my: "center bottom-20",
    at: "center top",
    using: function (position, feedback) {
      $j(this).css(position);
      $j("<div>")
        .addClass("arrow")
        .addClass(feedback.vertical)
        .addClass(feedback.horizontal)
        .appendTo(this);
    },
  },
});

$(document).ready(function () {
  setTimeout(() => {
    let myModal = document.getElementById("builderModal");
    try {
      myModal.style.display = "none";
    } catch (err) {}
    try {
      myModal.style.opacity = 0.95;
    } catch (err) {}
  }, 5000);
});
