$(document).ready(function(){
	
	
	// STYCKY MENU
	$(".js__services_section").waypoint (function(direction){
		if (direction == "down"){
			$("nav").addClass("sticky");
		} else {
			$("nav").removeClass("sticky");
		}
		
	});
	
	//	MIXITUP (PORTFOLIO SECTION)
	var mixer = mixitup('container');
});