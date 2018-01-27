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

    $('.icon-fav').each(function () {
        $(this).on('click', () => {
            if ($(this).attr('src') == 'img/fav.svg') {
                $(this).attr('src', 'img/favSelected.svg');
            } else
                $(this).attr('src', 'img/fav.svg');
        });
    });

}


//login form
$(function() {
    $(".login_btn").click(function() {
        $(".modalLogin").css('display', 'block');
    });
    //exit
    $(".close").click(function() {
        $(".modalLogin").css('display', 'none');
    });
});


//implementing sticky.js
$('.sticky-container').sticky();
