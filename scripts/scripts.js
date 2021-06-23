var isNavbarOpened = false;

$(document).ready(function ($) {
    // AOS
    AOS.init({
        duration: 500,
        easing: 'ease-out-quart',
        once: true
    });
});

function onNavbarToggled() {
    if (isNavbarOpened == false) {
        $(".a-nav-toggle-button").addClass("active");
        $(".header-top").addClass("active");
        $(".a-nav").addClass("active");
        $(".header-company").addClass("active");
        $(".header-toggle").addClass("active");
        isNavbarOpened = true;
    } else {
        $(".a-nav-toggle-button").removeClass("active");
        $(".header-top").removeClass("active");
        $(".a-nav").removeClass("active");
        $(".header-company").removeClass("active");
        $(".header-toggle").removeClass("active");
        isNavbarOpened = false;
    }
}

$(function () {
    var header = $(".header-company");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 0) {
            header.addClass("shadowed");
        } else {
            header.removeClass("shadowed");
        }
    });
});

function onEvent(category, action) {

}

function onEvent(category, action, label) {

}