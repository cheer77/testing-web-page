$(function () {


    $('.header-top__mob-menu').on('click', function (event) {
        $('.header-top__mob-menu').toggleClass('header-top__mob-menu-active');
        $('.header-menu').toggleClass('header-menu__active');
        $('body').toggleClass('lock');
    });



    $('.partrtner__btn').on('click', function (e) {

        e.preventDefault();
        $('.partrtner__btn').removeClass('partrtner__btn--active');
        $(this).addClass('partrtner__btn--active');

        $('.partrtner__block').removeClass('partrtner__block--active');
        $($(this).attr('href')).addClass('partrtner__block--active');

    });

});