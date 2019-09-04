$(document).ready(function () {
    $(".contact__form__message__text").focus(function () {
        $(".contact__form__message__placeholder").css("display", "none");
    });
    $(".contact__form__message__text").focusout(function () {
        if ($(this).val() == "") {
            $(".contact__form__message__placeholder").css("display", "block");
        }
    });
    $("#burgerTriger").click(function () {
        $(".firstBurgerIcon").css("display", "none");
        $(".firstBurgerIcon").removeAttr("id");
        $(".secondBurgerIcon").css("display", "block");
        $(".secondBurgerIcon").attr("id", "burgerTriger");
        $(".mobile__menu").css("animation", "burger linear .1s");
        $(".mobile__menu").css("left", "0");
        $(".secondBurgerIcon").css("position", "fixed");
        $(".secondBurgerIcon").css("margin-right", "20px");
        $(".secondBurgerIcon").css("right", "0");
        $(".secondBurgerIcon").css("z-index", "10001");
    });
    $(".secondBurgerIcon").click(function () {
        $(".secondBurgerIcon").css("display", "none");
        $(".secondBuregerIcon").removeAttr("id");
        $(".firstBurgerIcon").css("display", "block");
        $(".firstBurgerIcon").attr("id", "burgerTriger");
        $(".mobile__menu").css("animation", "burger-reverse linear .1s");
        $(".mobile__menu").css("left", "-100%");
    });

    $(".mobile__link").click(function (e) { 
        e.preventDefault();
        $(".mobile__link").css(propertyName, value);
        let target = $(this).attr("href");
        let top = $(target).offset().top;
        if (target=="#works") {
            top+=20;
        }
        if (target=="#about") {
            top-=50;
        }
        $("html,body").animate( { scrollTop: top }, 1000 );
        $(".secondBurgerIcon").css("display", "none");
        $(".secondBuregerIcon").removeAttr("id");
        $(".firstBurgerIcon").css("display", "block");
        $(".firstBurgerIcon").attr("id", "burgerTriger");
        $(".mobile__menu").css("animation", "burger-reverse linear .1s");
        $(".mobile__menu").css("left", "-100%");
        return false;
    });

    $(".nav__link").click(function (e) { 
        e.preventDefault();
        let target = $(this).attr("href");
        let top = $(target).offset().top;
        if (target=="#works") {
            top+=20;
        }
        if (target=="#about") {
            top-=100;
        }
        $("html,body").animate( { scrollTop: top }, 1000 );
        return false;
    });

    $(".upBtn").click(function () { 
        $(".upBtn").css("background-color", "rgb(0, 255, 0)");
        let top = $(window).scrollTop();
        $("html,body").animate( { scrollTop: -top }, 1000 );
    });

    $(window).scroll(function () { 
        if ($(this).scrollTop() >= 1) {
            $(".upBtn").css("display", "block");
        }
        if ($(this).scrollTop() == 0) {
            $(".upBtn").css("display", "none");
            $(".upBtn").css("background-color", "rgb(17, 173, 17)");
        }
    });
});