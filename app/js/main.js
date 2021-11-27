$(function () {


    $('.header__mob-menu').on('click', function (event) {
        $('.header__mob-menu').toggleClass('header__mob-menu-active');
        $('.header__menu').toggleClass('header__menu-active');
        $('html').toggleClass('lock');
    });


    $('.team__box-btn').on('click', function (event) {
        $('.team-pop__overlay').toggleClass('team-pop__overlay-active');
    });
    $('.team-pop__close').on('click', function (event) {
        $('.team-pop__overlay').removeClass('team-pop__overlay-active');
    });




    $('.team__label').on('click', function (e) {

        e.preventDefault();
        $('.team__label').removeClass('team__label--active');
        $(this).addClass('team__label--active');
    });

    $('.team__label').on('click', function () {
        $('.team__checkbox').removeAttr('checked');
        $(this).find('.team__checkbox').attr('checked', 'checked');
    });

    const swiper = new Swiper('.swiper', {
        centerSlidesBounds: true,
        centerSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            319: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1087: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1469: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1700: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
        },
    });





    // $('form').eq(0).on("change", function (e) {
    //     $('input[name^=field]').each(function () {
    //         if (e.target != this)
    //             this.checked = false;
    //     });
    // })

    // $('.team__label').on('click', function (e) {

    //     e.preventDefault();
    //     $('.team__label').removeClass('team__label--active');
    //     $(this).addClass('team__label--active');

    //     // $(this).siblings("input").prop('checked', false);
    //     // $(this).find(':radio').attr('checked', 'checked');
    // });

    // $('form').eq(0).on("change", function (e) {
    //     $('input[name^=field]').each(function () {
    //         if (e.target != this)
    //             this.checked = false;
    //     });
    // })

    // $('form#my_form > :checkbox').on('change', function () {
    //     var checkbox = $(this);
    //     var name = checkbox.prop('name');
    //     if (checkbox.is(':checked')) {
    //         $(':checkbox[name="' + name + '"]').not($(this)).prop({
    //             'checked': false,
    //             'required': false
    //         });
    //     }
    // });

    // $('.team__form').click(
    //     function () {
    //         $(this).find(':radio').attr('checked', 'checked');
    //         //выделение всех чекбоксов на кликнутом контейнере, снять выделение через removeAttr("checked")
    //     });





    $('.partrtner__btn').on('click', function (e) {

        e.preventDefault();
        $('.partrtner__btn').removeClass('partrtner__btn--active');
        $(this).addClass('partrtner__btn--active');

        $('.partrtner__block').removeClass('partrtner__block--active');
        $($(this).attr('href')).addClass('partrtner__block--active');

    });


});