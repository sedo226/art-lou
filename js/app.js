//let user know log in and sign up features are not yet implemented 
function notmplemented(){
    alert("Sorry! This functionality has not been implemented yet.");
}

//hamburger menu mobile toggle dropdown nav
$(".hamburger-menu").click(function () {
    $(".container-2").toggle(500);
});

//gallery hover show - only on mobile
function initHover() {
    if ($(window).width() > 769) {
        $(".card").hover(
            function () {
                $(this).find('.card-body').slideDown(400);
            }, function () {
                $(this).find('.card-body').slideUp(400);
            }
        );
    }
}

//favorite
function favorite(){
    $(".icon-fav").mousedown(() => {
        $(this).attr("src", "img/favClicked.svg");
        console.log("clicked")
    });

    $(".icon-fav").mouseup(() => {
        $(this).attr("src", "img/favSelected.svg");
        console.log("selected")
    });
}


