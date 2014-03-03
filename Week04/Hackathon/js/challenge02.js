var zoomIn = false;
var animating = false;
$(document).ready(function () {
	$(".lpanel").mouseover(function () {
	    if (!zoomIn) {
	        if (!animating) {
	            animating = true;
	            zoomIn = true;
	            $(".lpanel").animate({
	                width: "+=50px"
	            }, 500, function () {
	                animating = false;
	            });
	        }
		} else {
	        if (!animating) {
	            animating = true;
	            zoomIn = false;
	            $(".lpanel").animate({
	                width: "-=50px"
	            }, 500, function () {
	                animating = false;
	            });
	        }
		}
	});
	
	$(".ltitle").click(function () {
		console.log("weiner");
		$(this).animate({
			marginTop:"+=50px"
		}, 500, null);
	});
	
});
