$(document).ready(function() {
    $("#toggleBtn").click(function () {
      $("#toggleBtnElement1").toggleClass("one");
      $("#toggleBtnElement2").toggleClass("two");
      $("#toggleBtnElement3").toggleClass("three");
      $(".links").toggleClass("show");
    });
  });