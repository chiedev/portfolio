var pageRequest = window.location.pathname
var subPage = $('#custom-body > .sub-page','body')

$(document).ready(function(e){
	checkPage()
	$(window).on('popstate',function(event) {
		checkPage()
	})
	$('.main-page','body').each(function(){
		var page = 'portfolio/public/views/'
		 + $(this).attr('custom-link-source') + '/'
		 + $(this).attr('custom-link-source') + '.'
		 + $(this).attr('custom-file-type')
		$(this).load(page)
	})
	$('body').on('click', 'a[custom-link-source]',function(){
		$('.navbar-nav li').removeClass('active')
		$(this).parent().addClass('active')
		// push history
		var data = $(this).attr('custom-link-source')
		var title = $(this).attr('custom-link-source')
		var url = title
		history.pushState(data, title, url)
		if($(this).attr('custom-link-url')){
			reqPage('iframe','/'+$(this).attr('custom-link-url'))
		}
		else{
			reqPage('default','/'+title)
		}
	})
});

function checkPage(){
	pageRequest = window.location.pathname
	if (pageRequest == '/simple_chord_generator' 
		|| pageRequest == '/simple_tabs_generator'
		|| pageRequest == '/any-haw_litson_manok'){
		reqPage('iframe','portfolio/public/views/content'+pageRequest+'/index.html')
	}else if (window.location.href == getBaseUrl()){
		reqPage('default','/about')
	}
	else{
		reqPage('default',pageRequest)
	}
	function getBaseUrl() {
	    var reg = new RegExp(/^.*\//);
	    return reg.exec(window.location.href);
	}
}

function reqPage(req,target){
	// change subpage view
	req = (req == '/' || req == '/index')?'/about':req
	page = 'portfolio/public/views/content'+target+'/index.html'
	if (req == 'iframe'){
		$('.main-page[custom-link-source="footer"]').css({'display':'none'})
		subPage.html('<iframe src="'+target+'"></iframe>')
	}
	else{
		subPage.load(page)
		$('.main-page[custom-link-source="footer"]').css({'display':'block'})
	}
	$('.navbar-nav li a[custom-link-source="playground"]').addClass('active')
}