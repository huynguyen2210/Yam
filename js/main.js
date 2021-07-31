var $links = $('.form-successful-submit');
var $adc = $('.contact-form form')
var $click_link = $('.contact-form button');
$click_link.click(function() {
    $links.removeClass('hiden');
    $adc.addClass('hiden');
});

$(document).ready(function() {

    // Gets the video src from the data-src on each button

    // var $videoSrc;
    // $('.video-btn').click(function() {
    //     $videoSrc = $(this).data("src");
    // });
    // console.log($videoSrc);



    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function(e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $(".video")[0].play();
        $('#carouselExampleSlidesOnly').carousel('pause');
    })



    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function(e) {
        // a poor man's stop video
        $(".video")[0].pause();
    })






    // document ready  
});