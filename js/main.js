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

    //Show menu dropdown when hover Menu 
    $(".dropdown1").hover(function() {
        $(".dropdown-menu").removeClass("show");
        $(".drop-menu-1").addClass("show");
        var dropMenu = document.querySelector('.show');
        dropMenu.addEventListener("mouseleave", function(event) {
            $(".dropdown-menu").removeClass("show");
        });
    });
    $(".dropdown2").hover(function() {
        $(".dropdown-menu").removeClass("show");
        $(".drop-menu-2").addClass("show");
        var dropMenu = document.querySelector('.show');
        dropMenu.addEventListener("mouseleave", function(event) {
            $(".dropdown-menu").removeClass("show");
        });
    });

    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    // Gets the video src from the data-src on each button
    var $videoSrc;
    var $idValue;
    $('.video-btn').click(function() {
        $videoSrc = $(this).data("src");
        $idValue = $(this).attr("data-target");
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

    $('.select2-box').select2({
        minimumResultsForSearch: -1,
        templateResult: function(option) {
            if (option.element && (option.element).hasAttribute('hidden')) {
                return null;
            }
            return option.text;
        }
    });


    $('.colapse-menu-list-ques').click(function() {
        $idValue = $(this).attr("id");
        var d = document.getElementById($idValue);
        var $classNameValue = '.' + d.className;
        console.log($classNameValue);
        $($classNameValue).removeClass('bold-weight');
        d.className += " bold-weight";
    });

    $("#toheadingOne").click(function() {
        $("#collapse_1").trigger("click");
    });
    $("#toheadingTwo").click(function() {
        $("#collapse_2").trigger("click");
    });
    $("#toheadingThree").click(function() {
        $("#collapse_3").trigger("click");
    });
    var collapseShowing = document.querySelector(".about-yam-accordion .show");
    var idCollapseShowing = 'to' + collapseShowing.getAttribute("aria-labelledby");
    document.getElementById(idCollapseShowing).classList.add("bold-weight");
    $("button").click(function() {
        setTimeout(function() {
            var collapseShowing = document.querySelectorAll(".about-yam-accordion .collapse");
            var collapseShowingArray = [...collapseShowing];
            collapseShowingArray.forEach(function(e) {
                console.log(e);
                var idCollapseShowing = 'to' + e.getAttribute("aria-labelledby");
                if (e.classList.contains("show")) {
                    var idCollapseShowing = 'to' + e.getAttribute("aria-labelledby");
                    document.getElementById(idCollapseShowing).classList.add("bold-weight");
                } else {
                    var idCollapseShowing = 'to' + e.getAttribute("aria-labelledby");
                    console.log(idCollapseShowing)
                    document.getElementById(idCollapseShowing).classList.remove("bold-weight");
                }
            });
        }, 400);
    });
});