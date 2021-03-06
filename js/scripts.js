$(document).ready(function() {
    $('#myCarousel').carousel({ interval : 2000 });
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#myCarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#myCarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});

$(document).ready(function(){
    $('#loginButton').click(function(){
        $('#loginModal').modal('show');
    });
    $('#cancelLoginButton').click(function(){
        $('#loginModal').modal('hide');
    });
    $('#closeLoginButton').click(function(){
        $('#loginModal').modal('hide');
    });
});

$(document).ready(function(){
    $('#reserveButton').click(function(){
        $('#reserveTableModal').modal('show');
    });
    $('#cancelReserveButton').click(function(){
        $('#reserveTableModal').modal('hide');
    });
    $('#closeReserveButton').click(function(){
        $('#reserveTableModal').modal('hide');
    });
});