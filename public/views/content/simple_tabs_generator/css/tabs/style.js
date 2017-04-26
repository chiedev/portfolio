$(document).ready(function(){
	// float instrument when scrolled
	$(window,'#instrument-selector').bind('scroll change', function () {
	    if ($(window).scrollTop() > 0) {
			// Instrument Stack
	    	var topHeight = ($('#instrument-selector').val() == 'guitar')?'224px':'164px'
	        $('#inst').css({'position':'fixed','top':'0','height':topHeight,'width':'100%','z-index':'99999999999'})
	        // Content adjust margin top
	        $('#tabs-generator').parent().css({'margin-top':topHeight})
	    	// Navigation Stack
	    	var topHeightNav = ($('#instrument-selector').val() == 'guitar')?'224px':'154px'
	        $('#navigation').parent().css({'top':topHeightNav})
	    }
	    else{
			// Instrument Stack
	        $('#inst').css({'position':'relative','height':'auto','width':'100%'})
	    	// Content adjust margin top
	    	$('#tabs-generator').parent().css({'margin-top':'10px'})
	    	// Navigation Stack
	    	$('#navigation').parent().css({'top':'0'})
	    }
	})
});