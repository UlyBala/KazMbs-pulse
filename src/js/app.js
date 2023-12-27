$(document).ready(function(){
    $('.slider').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./src/icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./src/icons/arrow-right.svg" alt=""></button>'
    });


    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.button__product').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog__content__info').eq(i).toggleClass('catalog__content__info_active');
            $('.catalog__content__list').eq(i).toggleClass('catalog__content__list_active');
        })
    })

    $('.catalog__content__back').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog__content__info').eq(i).toggleClass('catalog__content__info_active');
            $('.catalog__content__list').eq(i).toggleClass('catalog__content__list_active');
        })
    })

    $('.consultation_btn').each(function (i) {
        $(this).on('click', function () {
            $(".overlay").removeClass('overlay_none')
            $(".modal_consultation").addClass('modal_show')
        })
    })

    $('.button-buy').each(function (i) {
        $(this).on('click', function () {
            $(".overlay").removeClass('overlay_none')
            $(".modal_order").addClass('modal_show')
        })
    })

    $('.modal__close').each(function (i) {
        $(this).on('click', function () {
            $(".overlay").addClass('overlay_none')
            $(".modal_consultation").removeClass('modal_show')
            $(".modal_order").removeClass('modal_show')
        })
    })

    $('input[name=phone]').mask("+8(999) 999-9999");

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    }

    // validateForms('.consultation-form');
    // validateForms('.modal_consultation form');
    // validateForms('.modal_order form');
});
