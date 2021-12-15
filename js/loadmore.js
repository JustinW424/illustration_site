$(document).ready(function () {


    // half-bg height
    var bgHeight = $("header").height() + $(".breadcrumb-container").height() + (($(".landing-header").height()) / 2)
    $(".half-bg").height(bgHeight)

    if (screen.width < 850 && screen.width > 767) {
        $('.landing-message').parent().removeClass('col-3').addClass('col-4')
    }

    if (screen.width > 1200) {

        $(".loadmore-btn").on('click', function () {
            // if ($(".doctor-item:visible").length === 12) {
            //     $(".doctor-item").slice(0, 15).slideDown();
            // }

            

            if ($(".doctor-item:visible").length === 9) {
                $(".doctor-item").slice(0, 12).slideDown();
            }

            if ($(".doctor-item:visible").length === 6) {
                $(".doctor-item").slice(0, 9).slideDown();
            }

            if ($(".doctor-item:hidden").length === 0) {
                $(".loadmore-btn").addClass("d-none");
                $(".close-btn").removeClass("d-none");
            }
        });

        $(".close-btn").on('click', function () {
            // if ($(".doctor-item:visible").length === 15) {
            //     $(".doctor-item").slice(12, 15).slideUp();
            // }
            if ($(".doctor-item:visible").length === 12) {
                $(".doctor-item").slice(9, 15).slideUp();
                $(".loadmore-btn").removeClass("d-none");
                $(".close-btn").addClass("d-none");
            }

        });
    }

    if (screen.width > 767) {

        $(".loadmore-btn").on('click', function () {
            if ($(".doctor-item:visible").length === 10) {
                $(".doctor-item").slice(0, 12).slideDown();
            }
            if ($(".doctor-item:visible").length === 8) {
                $(".doctor-item").slice(0, 10).slideDown();
            }
            if ($(".doctor-item:visible").length === 6) {
                $(".doctor-item").slice(0, 8).slideDown();
            }

            if ($(".doctor-item:hidden").length === 0) {
                $(".loadmore-btn").addClass("d-none");
                $(".close-btn").removeClass("d-none");
            }
        });

        $(".close-btn").on('click', function () {
            if ($(".doctor-item:visible").length === 12) {
                $(".doctor-item").slice(10, 12).slideUp();
            }
            if ($(".doctor-item:visible").length === 10) {
                $(".doctor-item").slice(8, 12).slideUp();
            }
            if ($(".doctor-item:visible").length === 8) {
                $(".doctor-item").slice(6, 12).slideUp();
                $(".loadmore-btn").removeClass("d-none");
                $(".close-btn").addClass("d-none");
            }

        });
    }

    if (screen.width < 601) {

        $(".loadmore-btn").on('click', function () {
            if ($(".doctor-item:visible").length === 11) {
                $(".doctor-item").slice(0, 12).slideDown();
            }
            if ($(".doctor-item:visible").length === 10) {
                $(".doctor-item").slice(0, 11).slideDown();
            }
            if ($(".doctor-item:visible").length === 9) {
                $(".doctor-item").slice(0, 10).slideDown();
            }
            if ($(".doctor-item:visible").length === 8) {
                $(".doctor-item").slice(0, 9).slideDown();
            }
            if ($(".doctor-item:visible").length === 7) {
                $(".doctor-item").slice(0, 8).slideDown();
            }
            if ($(".doctor-item:visible").length === 6) {
                $(".doctor-item").slice(0, 7).slideDown();
            }
            if ($(".doctor-item:visible").length === 5) {
                $(".doctor-item").slice(0, 6).slideDown();
            }
            if ($(".doctor-item:visible").length === 4) {
                $(".doctor-item").slice(0, 5).slideDown();
            }

            if ($(".doctor-item:hidden").length === 0) {
                $(".loadmore-btn").addClass("d-none");
                $(".close-btn").removeClass("d-none");
            }
        });

        $(".close-btn").on('click', function () {
            if ($(".doctor-item:visible").length === 12) {
                $(".doctor-item").slice(11, 12).slideUp();
            }
            if ($(".doctor-item:visible").length === 11) {
                $(".doctor-item").slice(10, 12).slideUp();
            }
            if ($(".doctor-item:visible").length === 10) {
                $(".doctor-item").slice(9, 12).slideUp();
            }
            if ($(".doctor-item:visible").length === 9) {
                $(".doctor-item").slice(8, 12).slideUp();
            }
            if ($(".doctor-item:visible").length === 8) {
                $(".doctor-item").slice(7, 12).slideUp();
            }
            if ($(".doctor-item:visible").length === 7) {
                $(".doctor-item").slice(6, 12).slideUp();
            }

            if ($(".doctor-item:visible").length === 6) {
                $(".doctor-item").slice(5, 12).slideUp();
            }

            if ($(".doctor-item:visible").length === 5) {
                $(".doctor-item").slice(4, 12).slideUp();
                $(".loadmore-btn").removeClass("d-none");
                $(".close-btn").addClass("d-none");
            }

        });
    }


})