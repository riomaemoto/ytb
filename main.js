$(function () {
  const hamburger = $(".hamburger");
  const navList = $(".nav_list");
  const line1 = $(".line1");
  const line2 = $(".line2");
  const line3 = $(".line3");

  hamburger.on("click", function () {
    navList.toggleClass("open");
    line1.toggleClass("open");
    line2.toggleClass("open");
    line3.toggleClass("open");
  });

  setTimeout(function () {
    $(".main_title").fadeIn(2000);
  });

  if ($(".animation").length) {
    scrollAnimation();
  }

  function scrollAnimation() {
    $(window).scroll(function () {
      $(".animation").each(function () {
        const position = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();

        if (scroll > position - windowHeight) {
          $(".img_box").addClass("open");
        }
      });
    });
  }
});
