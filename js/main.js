var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.5.0.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


$(document).ready(function() {
    //Show header when scroll down
    var scrollPos = 0;
    // adding scroll event
    window.addEventListener('scroll', function() {
        // detects new state and compares it with the new one
        if ((document.body.getBoundingClientRect()).top > scrollPos) {
            $('header').removeClass("navbar-showon")
            $('header').addClass("autohide");
        } else {
            $('header').removeClass("autohide")
            $('header').addClass("navbar-showon");
        }
        // saves the new position for iteration.
        scrollPos = (document.body.getBoundingClientRect()).top;
    });

    // Gets the video src from the data-src on each button
    var $videoSrc;
    var $idValue;
    $('.video-btn').click(function() {
        $videoSrc = $(this).data("src");
        $idValue = $(this).attr("data-target");
        console.log($videoSrc);
        console.log($idValue);
    });


    // when the modal is opened autoplay it  
    $("#myModal").on('shown.bs.modal', function(e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        $('#carouselExampleSlidesOnly').carousel('pause');
    })

    // stop playing the youtube video when I close the modal
    $("#myModal").on('hide.bs.modal', function(e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    })




    $('.colapse-menu-list-ques').click(function() {
        $idValue = $(this).attr("id");
        var d = document.getElementById($idValue);
        var $classNameValue = '.' + d.className;
        console.log($classNameValue);
        $($classNameValue).removeClass('bold-weight');
        d.className += " bold-weight";
    });

    $("#toHeadingOne").click(function() {
        $("#collapse_1").trigger("click");
    });
    $("#toHeadingTwo").click(function() {
        $("#collapse_2").trigger("click");
    });
    $("#toHeadingThree").click(function() {
        $("#collapse_3").trigger("click");
    });
});