// 1 Variables
    // 1.1 Defined Functions
    let appear = function (x) {
    linksObjects[x].section.fadeToggle();
    
    };
        
    // 1.2 Defined Arrays
    let linksObjects = [
    {link:$(".about-link"), section:$("#about")},
    {link:$(".classes-link"), section:$("#classes")},
    {link:$(".calendar-link"), section:$("#calendar")},
    {link:$(".contact-link"), section:$("#contact")},
    ];

// 2 JQuery functions on startup
$("#foreground-image").hide().fadeIn(2500);
$(".text-section").hide();

// 3 Functions for interacting with the page
for (var i=0; i<linksObjects.length; i++) {
    let y = i;
    linksObjects[i].link.on("click",  function () {
        appear(y);
    })
    }  // with the Appear function defined above, this function makes text appear/disappear when the link to it is clicked on