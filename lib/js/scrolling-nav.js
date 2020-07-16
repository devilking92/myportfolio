//jQuery to collapse the navbar on scroll
function userAgentDetect() {
	var ypos = window.pageYOffset;
    let debugMode = true;
    if(window.navigator.userAgent.match(/Mobile/i)
        || window.navigator.userAgent.match(/iPhone/i)
        || window.navigator.userAgent.match(/iPod/i)
        || window.navigator.userAgent.match(/IEMobile/i)
        || window.navigator.userAgent.match(/Windows Phone/i)
        || window.navigator.userAgent.match(/Android/i)
        || window.navigator.userAgent.match(/BlackBerry/i)
        || window.navigator.userAgent.match(/webOS/i)) {
        if (window.navigator.userAgent.match(/Tablet/i)
            || window.navigator.userAgent.match(/iPad/i)
            || window.navigator.userAgent.match(/Nexus 7/i)
            || window.navigator.userAgent.match(/Nexus 10/i)
            || window.navigator.userAgent.match(/KFAPWI/i)) {
            window.deviceTypeVar = 'tablet';
            if (debugMode === true) {
                // alert('Device is a tablet - ' + navigator.userAgent);
				if(ypos > 700) {
					var x = document.querySelectorAll("#diagram_level");
					for(var i=0; i<x.length; i++){
						x[i].style.width = "100%";
					}
				}
				if(ypos > 2200 || ypos < 700){
					var x = document.querySelectorAll("#diagram_level");
					for(var i=0; i<x.length; i++){
						x[i].style.width = "0%";
					}
				}
            }
        } else {
            if (debugMode === true) {
                // alert('Device is a smartphone - ' + navigator.userAgent);
				if(ypos > 2100) {
					var x = document.querySelectorAll("#diagram_level");
					for(var i=0; i<x.length; i++){
						x[i].style.width = "100%";
					}
				}
				if(ypos > 3200 || ypos < 2100){
					var x = document.querySelectorAll("#diagram_level");
					for(var i=0; i<x.length; i++){
						x[i].style.width = "0%";
					}
				}
            };
            window.deviceTypeVar = 'smartphone';
        }
    } else if (window.navigator.userAgent.match(/Intel Mac/i)) {
        if (debugMode === true) {
            // alert('Device is a desktop or laptop- ' + navigator.userAgent);
			if(ypos > 1100) {
				var x = document.querySelectorAll("#diagram_level");
				for(var i=0; i<x.length; i++){
					x[i].style.width = "100%";
				}
			}
			if(ypos > 2100 || ypos < 1100){
				var x = document.querySelectorAll("#diagram_level");
				for(var i=0; i<x.length; i++){
					x[i].style.width = "0%";
				}
			}
        }
        window.deviceTypeVar = 'desktop_or_laptop';
    } else if (window.navigator.userAgent.match(/Nexus 7/i)
        || window.navigator.userAgent.match(/Nexus 10/i)
        || window.navigator.userAgent.match(/KFAPWI/i)) {
        window.deviceTypeVar = 'tablet';
        if (debugMode === true) {
            // alert('Device is a tablet - ' + navigator.userAgent);
			
        }
    } else {
        if (debugMode === true) {
            // alert('Device is unknown- ' + navigator.userAgent);
			if(ypos > 1100) {
				var x = document.querySelectorAll("#diagram_level");
				for(var i=0; i<x.length; i++){
					x[i].style.width = "100%";
				}
			}
			if(ypos > 2100 || ypos < 1100){
				var x = document.querySelectorAll("#diagram_level");
				for(var i=0; i<x.length; i++){
					x[i].style.width = "0%";
				}
			}
        }
        window.deviceTypeVar = 'Unknown';
    }
	// return window.deviceTypeVar;
}

function Scroll(){
	var ypos = window.pageYOffset;

	userAgentDetect();
}
window.addEventListener("scroll",Scroll);

$(document).ready(function(){
	var specifiedElement1 = document.getElementById('simple_filter');
	var specifiedElement2 = document.getElementById('multi_filter');
    document.addEventListener('click', function(event) {
		if(specifiedElement1){
			var isClickInside1 = specifiedElement1.contains(event.target);
		}
		if(specifiedElement2){
			var isClickInside2 = specifiedElement2.contains(event.target);
		}
       
		if (isClickInside1) {
			$(this).find('#simple_filter').addClass('in');
			$(this).find('#my-btn-1').addClass('open');
			
        }
        else {
			$(this).find('#simple_filter').removeClass('in');
			$(this).find('#my-btn-1').removeClass('open');
			$(this).find('.simplefilter li').removeClass('active');
			$(this).find('.simplefilter li').first().addClass('active');
        }
		
		if (isClickInside2) {
			$(this).find('#multi_filter').addClass('in');
			$(this).find('#my-btn-2').addClass('open');
        }
        else {
			$(this).find('#multi_filter').removeClass('in');
			$(this).find('.multifilter li').removeClass('active');
			$(this).find('#my-btn-2').removeClass('open');
        }
		if(!isClickInside1 && !isClickInside2){
			$('.filtr-container').filterizr();
		}
    });
});

$(function() {
	//Initialize filterizr with default options
	$('.filtr-container').filterizr();
});
