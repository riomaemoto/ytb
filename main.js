$(function () {
  // ここで変数を作成しました
  const hamburger = $(".hamburger");
  const navList = $(".nav_list");
  const line1 = $(".line1");
  const line2 = $(".line2");
  const line3 = $(".line3");
  hamburger.on("click", function () {
    navList.toggleClass("open")
    line1.toggleClass("open")
    line2.toggleClass("open")
    line3.toggleClass("open")
  })
})