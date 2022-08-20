$(function () {
    if (window.innerWidth <= 576) {
        $(".burger").on("click", function () {
            console.log("i'm clicked");
            $(this).toggleClass("close")
            $('nav')
            .css("position", "relative")
            .css("left", "-10vw")
            .slideToggle();
        });
    }
    else {
        $('nav')
        .css("position", "")
        .css("display", "")
        .css("left", "");
        $(".burger").css("display", "none");
    }
});