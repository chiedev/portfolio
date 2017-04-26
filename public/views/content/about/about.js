$(document).ready(function(){
	$('body > *').css({'display':'none'})
	$('body > *').delay(100).fadeIn(500)

	$(window).scroll(function(){
		if($(this).scrollTop() > 500){
			$('.information').fadeIn(1000)
		}
		if($(this).scrollTop() > 0){
			$('.information').css({'position':'fixed','top':'0','width':'100%','height':'100%'})
			var thisHeight = $('.information .custom-header-container').height()
			$('.skills').css({'margin-top':thisHeight+130+'px'})
			$('.header-background').css({'margin-top':'50px'})
		}
		$('.information').css({'position':'fixed','top':'-'+$(this).scrollTop()/4+'px','width':'100%','height':'100%'})
		$('.header-background').css({'top':'-'+$(this).scrollTop()/1.5+'px'})
	})
});