window.diaval = 86;

if ($(window).width() > 1000) {
  window.leftval = 32;


} else if (($(window).width() < 1000) && ($(window).width() > 576)) {

  window.leftval = 28;

}
else if ($(window).width() < 576) {
  window.leftval = 25;

}



$(document).ready(function () {

  circularHead();

  $('svg #head-tab').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.body-part-sub button.nav-link').css("top", "32%")
      $('.body-part-sub button.nav-link').css("left", "32%")
      circularHead();
    }
  })



  $('svg #chest-tab').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.body-part-sub button.nav-link').css("top", "32%")
      $('.body-part-sub button.nav-link').css("left", "32%")
      circularChest();
    }
  })

  $('svg #right-Arm-tab').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.body-part-sub button.nav-link').css("top", "32%")
      $('.body-part-sub button.nav-link').css("left", "32%")
      circularArm();
    }
  })

  $('svg #left-Arm-tab').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.body-part-sub button.nav-link').css("top", "32%")
      $('.body-part-sub button.nav-link').css("left", "32%")
      circularArm();
    }
  })


  $('svg #right-hand-wrist-tab').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.body-part-sub button.nav-link').css("top", "32%")
      $('.body-part-sub button.nav-link').css("left", "32%")
      circularHand();
    }
  })

  $('svg #left-hand-wrist-tab').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.body-part-sub button.nav-link').css("top", "32%")
      $('.body-part-sub button.nav-link').css("left", "32%")
      circularHand();
    }
  })

  $('svg #abdomen-tab').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.body-part-sub button.nav-link').css("top", "32%")
      $('.body-part-sub button.nav-link').css("left", "32%")
      circularAbdomen();
    }
  })

  $('svg #right-thigh-tab').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.body-part-sub button.nav-link').css("top", "32%")
      $('.body-part-sub button.nav-link').css("left", "32%")
      circularThigh();
    }
  })


  $('svg #left-thigh-tab').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.body-part-sub button.nav-link').css("top", "32%")
      $('.body-part-sub button.nav-link').css("left", "32%")
      circularThigh();
    }
  })
  // $('svg #chest-tab').on('click', function () {
  //   if($(this).hasClass('active')){
  //     $('.body-part-sub button.nav-link').css("top" , "32%")
  //     $('.body-part-sub button.nav-link').css("left", "32%")
  //     circularCalf();
  //   }
  // })

  $('svg #right-foot-tab').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.body-part-sub button.nav-link').css("top", "32%")
      $('.body-part-sub button.nav-link').css("left", "32%")
      circularFoot();
    }
  })


  $('svg #left-foot-tab').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.body-part-sub button.nav-link').css("top", "32%")
      $('.body-part-sub button.nav-link').css("left", "32%")
      circularFoot();
    }
  })

  $('svg #left-calf-tab').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.body-part-sub button.nav-link').css("top", "32%")
      $('.body-part-sub button.nav-link').css("left", "32%")
      circularCalf()
    }
  })

  $('svg #right-calf-tab').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.body-part-sub button.nav-link').css("top", "32%")
      $('.body-part-sub button.nav-link').css("left", "32%")
      circularCalf()
    }
  })
  // if($('svg .nav-link').hasClass('active')){
  //   circularHead();
  // }

  // if($('.head').hasClass('active')){
  //   circularHead();
  // }










});



function circularHead() {

  var items = document.querySelectorAll('#head .body-part-sub button.nav-link');

  for (var i = 0, l = items.length; i < l; i++) {

    items[i].style.left = (leftval - diaval * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

    items[i].style.top = (leftval + diaval * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
  }
};

function circularChest() {
  var items = document.querySelectorAll('#chest .body-part-sub button.nav-link');

  for (var i = 0, l = items.length; i < l; i++) {
    items[i].style.left = (leftval - diaval * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

    items[i].style.top = (leftval + diaval * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
  }
};

function circularAbdomen() {
  var items = document.querySelectorAll('#abdomen .body-part-sub button.nav-link');

  for (var i = 0, l = items.length; i < l; i++) {
    items[i].style.left = (leftval - diaval * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

    items[i].style.top = (leftval + diaval * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
  }
};

function circularArm() {
  var items = document.querySelectorAll('.left-right-arm .body-part-sub button.nav-link');

  for (var i = 0, l = items.length; i < l; i++) {
    items[i].style.left = (leftval - diaval * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

    items[i].style.top = (leftval + diaval * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
  }
};

function circularHand() {
  var items = document.querySelectorAll('.left-right-hand-wrist .body-part-sub button.nav-link');

  for (var i = 0, l = items.length; i < l; i++) {
    items[i].style.left = (leftval - diaval * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

    items[i].style.top = (leftval + diaval * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
  }
};


function circularThigh() {
  var items = document.querySelectorAll('.left-right-thigh .body-part-sub button.nav-link');

  for (var i = 0, l = items.length; i < l; i++) {
    items[i].style.left = (leftval - diaval * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

    items[i].style.top = (leftval + diaval * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
  }
};

function circularCalf() {
  var items = document.querySelectorAll('.left-right-calf .body-part-sub button.nav-link');

  for (var i = 0, l = items.length; i < l; i++) {
    items[i].style.left = (leftval - diaval * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

    items[i].style.top = (leftval + diaval * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
  }
};

function circularFoot() {
  var items = document.querySelectorAll('.left-right-foot .body-part-sub button.nav-link');

  for (var i = 0, l = items.length; i < l; i++) {
    items[i].style.left = (leftval - diaval * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

    items[i].style.top = (leftval + diaval * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
  }
};