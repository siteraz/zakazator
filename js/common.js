jQuery(document).ready(function ($) {
    $('#slider-reviews').slick({adaptiveHeight: true, dots: true, arrows: true, speed: 300, slidesToShow: 1, slidesToScroll: 1});
    $('.btn-menu').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('#nav').slideToggle();
    });
    $('a:not(.btn-menu, .btn-close, .btn-popup)').on('click', function (e) {
        let href = $(this).attr('href');
        if ($(href).length) {
            let blockOsffset = $(href).offset().top;
            e.preventDefault();
            $('html, body').animate({scrollTop: blockOsffset}, 'slow');
        }
    });
    let $navOffset = $('#nav').offset().top;
    $(window).on('scroll', function () {
        if ($(window).width() > 767) {
            if ($(window).scrollTop() > $navOffset) {
                $('#nav').addClass('fixed');
            } else {
                $('#nav').removeClass('fixed');
            }
        }
    });
  
    $('.btn-popup').on('click', function (event) {
        event.preventDefault();
        let windowId = $(this).data('popup');
        $('.popup').fadeOut();
        $('#' + windowId).fadeIn();
    });
    $('body').on('click', function (event) {
        if ($(event.target).closest('.popup-inner').length === 0 && !$(event.target).hasClass('btn-popup') && !$(event.target).parents().hasClass('btn-popup')) {
            $('.popup').fadeOut();
        }
    });
    $('.btn-close').on('click', function (event) {
        event.preventDefault();
        $('.popup').fadeOut();
    });
    $('.checkbox:last').on('click', function () {
        if ($(this).find(':checkbox').is(':checked')) {
            $(this).parents('form').find('.btn').attr('disabled', false);
        } else {
            $(this).parents('form').find('.btn').attr('disabled', true);
        }
    });
    $("[name=phone]").mask("+79999999999");
});