$(document).ready(function() {

  $("button#blackb").hover(function() {
    $("body").removeClass();
    $("h1").removeClass();
    $("h2").removeClass();
    $("h3").removeClass();
    $("p").removeClass();
    $("body").addClass("black-background");
    $("h1").addClass("whitetext");
    $("h2").addClass("whitetext");
    $("h3").addClass("whitetext");
    $("p").addClass("whitetext");
  });

  $("button#whiteb").hover(function() {
    $("body").removeClass();
    $("h1").removeClass();
    $("h2").removeClass();
    $("h3").removeClass();
    $("p").removeClass();
    $("body").addClass("white-background");
    $("h1").addClass("blacktext");
    $("h2").addClass("blacktext");
    $("h3").addClass("blacktext");
    $("p").addClass("blacktext");
  });

  $("#para1").hover(function() {
    $("#para1").removeClass();
    $("#para1").addClass("p_borderOn");
    $("#para2").removeClass();
    $("#para3").removeClass();
  });

  $("#para2").hover(function() {
    $("#para2").removeClass();
    $("#para2").addClass("p_borderOn");
    $("#para1").removeClass();
    $("#para3").removeClass();
  });

  $("#para3").hover(function() {
    $("#para3").removeClass();
    $("#para3").addClass("p_borderOn");
    $("#para1").removeClass();
    $("#para2").removeClass();

  });

});
