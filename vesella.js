$(document).ready(function() {
    // Animate welcome screen text
    setTimeout(function() {
        $("#welcome-section h1").fadeOut(1500);
        $("#welcome-section h1").slideDown(1500);
    }, 1500);

    // Smooth scrolling
    var scrollLink = $(".scroll");

    scrollLink.click(function(e) {
        e.preventDefault();

        $("body, html").animate({
            scrollTop: $(this.hash).offset().top - 16
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function() {
        var scrollbarPosition = $(this).scrollTop();
        var homeOffset = $("#home").offset().top;
        var aboutOffset = $("#about").offset().top;
        var projectsOffset = $("#projects").offset().top;
        var contactOffset = $("#contact").offset().top;

        if(contactOffset - 60 <= scrollbarPosition) {
            $("#contact-link").addClass("active");
            $("#projects-link, #about-link, #home-link").removeClass("active");
        }
        else if(projectsOffset - 60 <= scrollbarPosition) {
            $("#projects-link").addClass("active");
            $("#contact-link, #about-link, #home-link").removeClass("active");
        }
        else if(aboutOffset - 60 <= scrollbarPosition) {
            $("#about-link").addClass("active");
            $("#contact-link, #projects-link, #home-link").removeClass("active");
        }
        else if(homeOffset - 60 <= scrollbarPosition) {
            $("#home-link").addClass("active");
            $("#contact-link, #projects-link, #about-link").removeClass("active");
        }
    });
});