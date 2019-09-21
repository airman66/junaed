$(document).ready(function () {
    if ($(window).scrollTop() > $("#home").height()) {
        $(".header").css("position", "fixed");
        $(".header").css("max-width", "100%");
        $(".header").css("top", "0");
    }
    else {
        $(".header").css("position", "static");
        $(".header").css("max-width", "1279px");
    }
    $("body").css("animation", "body linear 1s");
    $("body").css("opacity", "1");
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
        let target = $(this).attr("href");
        let top = $(target).offset().top;
        if (target=="#works") {
            top+=20;
        }
        if (target=="#about") {
            top-=50;
        }
        if (target=="#home") {
            $("html, body").animate({ scrollTop: 0 }, 1000);
        }
        else {
            $("html,body").animate( { scrollTop: top }, 1000 );
        }
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
        if (target=="#home") {
            $("html, body").animate({ scrollTop: 0 }, 1000);
        }
        else {
            $("html,body").animate( { scrollTop: top }, 1000 );
        }
        return false;
    });

    $(".toTopBtn").click(function () { 
        $("html, body").animate({ scrollTop: 0 }, 1000);
          return false;
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > $("#home").height()) {
            $(".toTopBtn").fadeIn();
        }
        else {
            $(".toTopBtn").fadeOut();
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > $("#home").height()) {
            $(".header").css("position", "fixed");
            $(".header").css("max-width", "100%");
            $(".header").css("top", "0");
        }
        else {
            $(".header").css("position", "static");
            $(".header").css("max-width", "1279px");
        }
    });
});