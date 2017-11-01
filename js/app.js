//hamburger menu mobile toggle dropdown nav
$(".hamburger-menu").click(function () {
    $(".container-2").toggle(500);
});

//gallery hover show - only on mobile
function initHover() {
    if ($(window).width() > 769) {
        $(".card").hover(
            function () {
                $(this).find('.card-body').slideDown(300);
            }, function () {
                $(this).find('.card-body').slideUp(300);
            }
        );
    }
}
