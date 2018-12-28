// 1 Variables
    // 1.1 Defined Arrays
    let linksObjects = [
        {link:$(".about-link"), section:$("#about")},
        {link:$(".classes-link"), section:$("#classes")},
        {link:$(".calendar-link"), section:$("#calendar")},
        {link:$(".contact-link"), section:$("#contact")},
        ];

// 2 JQuery functions on startup
$("#foreground-image").hide().fadeIn(2500);
$(".text-section").hide();
$("#about").fadeIn();
    
// 3 Functions for interacting with the page
for (var i=0; i<linksObjects.length; i++) {
    let y = i;
    linksObjects[i].link.on("click",  function () {
        $("section").hide();
        linksObjects[y].section.fadeIn();
    })
}  // This function makes text appear when the link to it is clicked on

// Note to self: check to see if ".text-section" class can be safely replaced with "section" element selector
