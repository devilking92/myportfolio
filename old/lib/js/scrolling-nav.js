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
	var nav = document.getElementById('nav');
	var mask = document.getElementById('mask');
	var first = document.getElementById('first');
	var second = document.getElementById('second');
	var third = document.getElementById('third');
	var fourth = document.getElementById('fourth');
	var ypos = window.pageYOffset;
	
	if(ypos > 100) {
		mask.style.width = "75px";
		mask.style.height = "75px";
		mask.style['line-height'] = "95px";
		nav.style.width = "75px";
		nav.style.height = "75px";
		first.style['line-height'] = "55px";
		second.style['line-height'] = "55px";
		third.style['line-height'] = "55px";
		fourth.style['line-height'] = "55px";
		
	}
	else{
		mask.style.width = "100px";
		mask.style.height = "100px";
		mask.style['line-height'] = "120px";
		nav.style.width = "100px";
		nav.style.height = "100px";
		first.style['line-height'] = "70px";
		second.style['line-height'] = "70px";
		third.style['line-height'] = "70px";
		fourth.style['line-height'] = "70px";
	}
	userAgentDetect();
}
window.addEventListener("scroll",Scroll);

$(document).ready(function(){
	var flag = 1;
	var specifiedElement = document.getElementById('nav');
	var specifiedElement1 = document.getElementById('simple_filter');
	var specifiedElement2 = document.getElementById('multi_filter');
    document.addEventListener('click', function(event) {
        var isClickInside = specifiedElement.contains(event.target);
		var isClickInside1 = specifiedElement1.contains(event.target);
		var isClickInside2 = specifiedElement2.contains(event.target);
        if (isClickInside) {
			if(flag == 1){
				$(this).find('#first').css({'-webkit-transform': 'translate(0px,125px)'});	
				$(this).find('#second').css({'-webkit-transform': 'translate(60px,105px)'});
				$(this).find('#third').css({'-webkit-transform': 'translate(105px,60px)'});
				$(this).find('#fourth').css({'-webkit-transform': 'translate(125px,0px)'});
				
				$(this).find('#first').css({'-ms-transform': 'translate(0px,125px)'});	
				$(this).find('#second').css({'-ms-transform': 'translate(60px,105px)'});
				$(this).find('#third').css({'-ms-transform': 'translate(105px,60px)'});
				$(this).find('#fourth').css({'-ms-transform': 'translate(125px,0px)'});
				
				$(this).find('#first').css({'-moz-transform': 'translate(0px,125px)'});	
				$(this).find('#second').css({'-moz-transform': 'translate(60px,105px)'});
				$(this).find('#third').css({'-moz-transform': 'translate(105px,60px)'});
				$(this).find('#fourth').css({'-moz-transform': 'translate(125px,0px)'});
				
				$(this).find('#first').css({'transform': 'translate(0px,125px)'});	
				$(this).find('#second').css({'transform': 'translate(60px,105px)'});
				$(this).find('#third').css({'transform': 'translate(105px,60px)'});
				$(this).find('#fourth').css({'transform': 'translate(125px,0px)'});
				flag = 2;
			}else if(flag == 2){
				$(this).find('#first').css({'-webkit-transform': 'none'});
				$(this).find('#second').css({'-webkit-transform': 'none'});
				$(this).find('#third').css({'-webkit-transform': 'none'});
				$(this).find('#fourth').css({'-webkit-transform': 'none'});
				
				$(this).find('#first').css({'-moz-transform': 'none'});
				$(this).find('#second').css({'-moz-transform': 'none'});
				$(this).find('#third').css({'-moz-transform': 'none'});
				$(this).find('#fourth').css({'-moz-transform': 'none'});
				
				$(this).find('#first').css({'-ms-transform': 'none'});
				$(this).find('#second').css({'-ms-transform': 'none'});
				$(this).find('#third').css({'-ms-transform': 'none'});
				$(this).find('#fourth').css({'-ms-transform': 'none'});
				
				$(this).find('#first').css({'transform': 'none'});
				$(this).find('#second').css({'transform': 'none'});
				$(this).find('#third').css({'transform': 'none'});
				$(this).find('#fourth').css({'transform': 'none'});
				flag = 1;
			}
        }
        else {
			$(this).find('#first').css({'-webkit-transform': 'none'});
			$(this).find('#second').css({'-webkit-transform': 'none'});
			$(this).find('#third').css({'-webkit-transform': 'none'});
			$(this).find('#fourth').css({'-webkit-transform': 'none'});
			
			$(this).find('#first').css({'-moz-transform': 'none'});
			$(this).find('#second').css({'-moz-transform': 'none'});
			$(this).find('#third').css({'-moz-transform': 'none'});
			$(this).find('#fourth').css({'-moz-transform': 'none'});
			
			$(this).find('#first').css({'-ms-transform': 'none'});
			$(this).find('#second').css({'-ms-transform': 'none'});
			$(this).find('#third').css({'-ms-transform': 'none'});
			$(this).find('#fourth').css({'-ms-transform': 'none'});
			
			$(this).find('#first').css({'transform': 'none'});
			$(this).find('#second').css({'transform': 'none'});
			$(this).find('#third').css({'transform': 'none'});
			$(this).find('#fourth').css({'transform': 'none'});
				flag = 1;
        }
		if (isClickInside1) {
			$(this).find('#simple_filter').addClass('in');
			$(this).find('#my-btn-1').addClass('open');
			
			$(this).find('#simple_filter').toggleClass('in');
			$(this).find('#my-btn-1').toggleClass('open');
			
        }
        else {
			$(this).find('#simple_filter').removeClass('in');
			$(this).find('#my-btn-1').removeClass('open');
			$(this).find('.simplefilter li').removeClass('active');
			$(this).find('.simplefilter li').first().addClass('active');
			$(this).find('.simplefilter li').first().toggleClass('active');
        }
		
		if (isClickInside2) {
			$(this).find('#multi_filter').addClass('in');
			$(this).find('#my-btn-2').addClass('open');
			
			$(this).find('#multi_filter').toggleClass('in');
			$(this).find('#my-btn-2').toggleClass('open');
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
	
	document.addEventListener('clicked', function(event) {
        var isClickInside = specifiedElement.contains(event.target);
		var isClickInside1 = specifiedElement1.contains(event.target);
		var isClickInside2 = specifiedElement2.contains(event.target);
        if (isClickInside) {
			if(flag == 1){
				$(this).find('#first').css({'transform': 'translate(0px,125px)'});	
				$(this).find('#second').css({'transform': 'translate(60px,105px)'});
				$(this).find('#third').css({'transform': 'translate(105px,60px)'});
				$(this).find('#fourth').css({'transform': 'translate(125px,0px)'});
				flag = 2;
			}else if(flag == 2){
				$(this).find('#first').css({'transform': 'none'});
				$(this).find('#second').css({'transform': 'none'});
				$(this).find('#third').css({'transform': 'none'});
				$(this).find('#fourth').css({'transform': 'none'});
				flag = 1;
			}
        }
        else {
			$(this).find('#first').css({'transform': 'none'});
			$(this).find('#second').css({'transform': 'none'});
			$(this).find('#third').css({'transform': 'none'});
			$(this).find('#fourth').css({'transform': 'none'});
				flag = 1;
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
	});

});

$(function() {
	//Initialize filterizr with default options
	$('.filtr-container').filterizr();
});
