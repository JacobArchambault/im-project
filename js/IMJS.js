// 1 Function declarations

// Adds 25px to the width and height of the foreground image element.
function growImage(){
  $("#foreground-image").animate({
    height: '+=25px',
    width: '+=25px'
  });
}

// Subtracts 25px from the width and height of the foreground image element.
function shrinkImage(){
  $("#foreground-image").animate({
    height: '-=25px',
    width: '-=25px'
  });
} 

// 2 Variables
    // 2.1 Defined Arrays
let linksObjects = [
	{link:$(".about-link"), section:$("#about")},
	{link:$(".classes-link"), section:$("#classes")},
	{link:$(".calendar-link"), section:$("#calendar")},
	{link:$(".contact-link"), section:$("#contact")},
	];

// 3 function calls
// 3.1 JQuery functions on startup
$("#foreground-image").hide().fadeIn(2500);
$(".text-section").hide();
$("#about").fadeIn();

// 3.2 jQuery function call to grow and shrink image on hovering 
$("#foreground-image").hover(growImage, shrinkImage); 

// This function makes text appear when the link to it is clicked on.
for (var i=0; i<linksObjects.length; i++) {
    let y = i;
    linksObjects[i].link.on("click",  function () {
		// hide all sections.
        $("section").hide();
		// fade in the section associated with the link.
        linksObjects[y].section.fadeIn(1000);
    })
}