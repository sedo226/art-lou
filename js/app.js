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
    // let allFav = $('.icon-fav');
        // add event listener to listen for mouseUp
        // check if favorited
        //  if favorited, unfavorite
        //  if not favorited, favorite
        
        $(document).on('click', '.icon-fav', () => {
            console.log("here");
                if ( $(this).attr('src') == 'img/fav.svg') {
                    $(this).attr('src', 'img/favSelected.svg');
                } else  
                $(this).attr('src', 'img/fav.svg'); 
            }, false); 
        }




