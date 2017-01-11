$(document).ready(function(){
  $("#quick-fact").css("display", "none");
  $("button").click(function(){
    $("#quick-fact").fadeIn(1000);
    $("html, body").animate({
      scrollTop: $("#about-bill").offset().top}, "slow");
  });
});
