$(function () {
  const hamburger = $(".hamburger");
  const navList = $(".nav_list");

  hamburger.on("click", function () {
    navList.toggleClass("open")
    $(".line1").toggleClass("open")
    $(".line2").toggleClass("open")
    $(".line3").toggleClass("open")
  })
})