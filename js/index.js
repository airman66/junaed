$(document).ready(function () {
    $(".contact__form__message__text").focus(function () {
        $(".contact__form__message__placeholder").css("display", "none");
    });
    $(".contact__form__message__text").focusout(function () {
        if ($(this).val() == "") {
            $(".contact__form__message__placeholder").css("display", "block");
        }
    });
});