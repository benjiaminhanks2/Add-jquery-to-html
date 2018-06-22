$(document).ready(function() {
  $(".clickable").click(function() {
    $("img").show();
    $("#sword-showing").toggle();
    $("#sword-hidden").toggle();

  });
});
