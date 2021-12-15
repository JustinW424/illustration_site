$(document).ready(function () {
  console.log(devicePixelRatio);

  // Menu to desktop in hover and mobile in dropdown
  if ($(window).width() > 990) {
    $(".nav-link-list").removeAttr(" data-bs-target");
  } else {
  }

  // Remove Class Or Add Class in scroll

  $(".search-icon").on("click", function () {
    $(this).toggleClass("active");
    $(".search-bar").toggleClass("active");
  });

  $(".dropdown-control").on("click", function (e) {
    e.preventDefault();
    let menuControls = document.querySelector("#menuControls");
    document.querySelector("#menuParent").style.top =
      menuControls.getBoundingClientRect().top - 140 + "px";

    // Adjust height
    let menuControls2 = document.querySelector("#menuControls2");
    let bottomSpace =
      window.innerHeight -
      menuControls2.getBoundingClientRect().top -
      menuControls2.offsetHeight;
    let height =
      window.innerHeight -
      menuControls.getBoundingClientRect().top -
      bottomSpace;
    document.querySelector("#menuParent").style.height = height + "px";
  });

  if (screen.width > 1200) {
    $(".menu-acc-controls").on("click", function (e) {
      e.preventDefault();
      $(".menu-acc-controls").removeClass("active");
      if ($(this).children().attr("aria-expanded") === "true") {
        $(this).addClass("active");
      }
    });
  }

  if (screen.width < 1200) {
    $(".menu-acc-controls.no-border").on("click", function (e) {
      e.preventDefault();
      $(".no-border").removeClass("active");
      if ($(this).children().attr("aria-expanded") === "true") {
        $(this).addClass("active-mobile");
      } else {
        $(this).removeClass("active-mobile");
      }
    });
  }

  $(".close-btn").on("click", function (e) {
    e.preventDefault();
    $(".menu-acc-controls").removeClass("active");
  });

  $("#tickerClose").on("click", function (e) {
    e.preventDefault();
    $(".tickertape").addClass("d-none");
  });

  var heroCircle1 = $(".bg-1 .hero-circle .inner-circle").width();
  $(".bg-1 .hero-circle .inner-circle").height(heroCircle1);

  var heroCircle2 = $(".bg-2 .hero-circle .inner-circle").width();
  $(".bg-2 .hero-circle .inner-circle").height(heroCircle1);

  var heroCircle3 = $(".bg-3 .hero-circle .inner-circle").width();
  $(".bg-3 .hero-circle .inner-circle").height(heroCircle1);

  console.log(heroCircle1, heroCircle2, heroCircle3);

  scaleAmt = $(".main-slider-circle").width() / $(".hero-animation").width();

  scaleAmt2 = $(".main-slider-circle").width() / 375;
  console.log($(".main-slider-circle").width());
  
  $(".hero-1.hero-animation").css("transform", "scale(" + scaleAmt + ")");
  $(".hero-2.hero-animation").css("transform", "scale(" + scaleAmt2 + ")");
  $(".hero-3.hero-animation").css("transform", "scale(" + scaleAmt + ")");

  var newsCircle = $(".latest-section .slider-items .circle").width();
  $(".latest-section .slider-items .circle").height(newsCircle);

  var newsCircleMiddle = $(
    ".latest-section .slider-items .circle.middle"
  ).width();
  $(".latest-section .slider-items .circle.middle").height(newsCircleMiddle);

  var newsCircleRight = $(
    ".latest-section .slider-items .circle.right"
  ).width();
  $(".latest-section .slider-items .circle.right").height(newsCircleRight);

  var iconHeight = $(".icons").width();
  $(".icons").height(iconHeight);

  // var circleHeight = $(".circle.mobile").width();
  $(".circle.mobile").width(heroCircle1);
  $(".circle.mobile").height(heroCircle1);

  $("#latestSliderMobile .content ").css("top", heroCircle1 + 50);

  // var innerHeight = $(".inner-circle.mobile").width();
  // $(".inner-circle.mobile").height(innerHeight);

  // var innerHeight = $(".inner-circle.mobile").width();
  // $(".inner-circle.mobile").height(innerHeight);

  var transformationHeight = $(".transformation.circle").width();
  $(".transformation.circle").height(transformationHeight);

  /** Journey Slider */
  $("#journeySlider ol li").click(function(e) {
    $("#journeySlider ol li").removeClass("active");
    $(this).addClass("active");
    const slideIndex = $(this).attr("data-bs-slide-to")
    const slides = $("#journeySlider .slider--el")
    const activeSlide = slides[parseInt(slideIndex)]
    slides.removeClass("active");
    $(activeSlide).addClass("active");
  });
  $(".slider--el .journey-close").click(function(e) {
    $("#journeySlider ol li").removeClass("active");
    const slides = $("#journeySlider .slider--el")
    slides.removeClass("active");
    const activeSlide = slides[0];
    $(activeSlide).addClass("active");
  })

  setFontSize()
  window.onresize = (e) => {
    setFontSize()
  }

  function setFontSize() {
    let fontSize = 0
    const bigCircleWidth = $(".handle-box").width()
    fontSize = Math.floor(bigCircleWidth*0.12)
    $(".title").css("font-size", `${fontSize}px`)
    $(".title").css("line-height", `${fontSize}px`)

    fontSize = Math.floor(bigCircleWidth*0.06)
    $(".description").css("font-size", `${fontSize}px`)
    $(".description").css("line-height", `${fontSize+6}px`)

    fontSize = Math.floor(bigCircleWidth*0.045)
    $(".action").css("font-size", `${fontSize}px`)
  }
});
