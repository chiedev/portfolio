var chord_name, x_axis, y_axis, target, note_axis, selected_staff, staff_count, lyrics, source, temp, selected_instrument, _text_staff
var notes = []
var tabs = []
$('body').ready(function(){
	$('body').on('click','#instrument_fret-board .string .fret',function(e){
		target = $('#tabs-generator')
		chord_name = $(this).data('chord-name') //chord name
		x_axis = $(this).data('x-axis') //string
		y_axis = $(this).data('y-axis') //note
		selected_staff = $('#staff-selector option:selected').text()
	    temp = new Object()
	    temp["x"] = x_axis
	    temp["y"] = y_axis
	    temp["chord"] = chord_name
		for (var i = notes.length - 1; i >= 0; i--) {
			if (x_axis == notes[i].x){ //string
				$('[data-x-axis="'+notes[i].x+'"][data-y-axis="'+notes[i].y+'"] .selected').remove()
				notes.splice(i,1)
			}
		}
		//add fret mark
		notes.push(temp)
		tabs.push(notes)
		source = '' //tabs.length
		_create('fret mark',$(this),source)
		if (e.ctrlKey !== true) {
			generate_note(target,selected_staff,notes)
			notes = []
			if(!$('#virtual_instrument .switch').attr('checked') == true){
				setTimeout(function() {_remove($('.selected'),'fret mark')}, 300)
			}
		}
	});

	$('body').on('keypress keyup', function(e){
		target = $('#tabs-generator')
		selected_staff = $('#staff-selector option:selected').text()
		if(!$('#virtual_instrument .switch').attr('checked') == true){
			setTimeout(function() {_remove($('.selected'),'fret mark')}, 300)
		}
		// CTRL key
		if (e.type == 'keyup' && e.keyCode === 17 && notes != ''){
			generate_note(target,selected_staff,notes)
			notes = []
		}
		// space bar
		else if(e.type == 'keypress' && !$('#generator_lyrics').is(':focus') && e.keyCode === 32){
			for (var i = 5; i >= 0; i--) {
				temp = new Object()
			    temp['x'] = 0
			    temp['y'] = 0
			    temp['chord'] = 0
			    notes.push(temp)
			}
			generate_note(target,selected_staff,notes)
			notes = []
		}
		//  CTRL + |
		else if(e.shiftKey == true && e.keyCode === 220){
			_create('bar',target)
		}
	});

	$('body').on('click', '#virtual_instrument .switch > [data-value="view"]', function(){
		if(!$(this).parent().attr('checked')){
			// alert('ON')
			$('.selected','#instrument_fret-board').toggle()
		}
		else{
			// alert('OFF')
			$('.selected','#instrument_fret-board').toggle()

		}
	});

	$('body').on('keyup keypress','#generator_lyrics', function(e){
		request = 'append_lyrics'
		target = $('#tabs-generator content')
		source = $('#generator_lyrics').val()
		selected_staff = $('#staff-selector option:selected').text()
		generator_append(request,target,source,selected_staff)
	});

	$('body').on('click', '#staff-selector',function(){
		selected_staff = $('#staff-selector option:selected').text()
		target = $('#tabs-generator .staff:nth-child('+selected_staff+') > content').html()
		$('#generator_lyrics').val(target)
	})

	$('body').on('click','#tabs-generator_new-staff',function(){
		_create('staff',$('#tabs-generator'),'')
		$('#generator_lyrics').val('')
	});

	$('body').on('click','#tabs-generator_clear', function(){
		selected_staff = $('#staff-selector option:selected').text()
		_remove(selected_staff,'clear-staff')
	});

	$('body').on('click','#tabs-generator_delete', function(){
		selected_staff = $('#staff-selector option:selected').text()
		_remove(selected_staff,'delete-staff')
	});

	$('body').on('click','#tabs-generator_bar', function(){
		_create('bar',$('#tabs-generator'))
	});

	$('body').on('change','#instrument-selector', function(value){
		selected_instrument = $('option:selected',this).text()
		set_chord_name = $('#catalog-chord').val()+$('#catalog-quality').val()+$('#catalog-altbass').val();
		generate('instrument',null,selected_instrument)
		_remove($('#tabs-generator *'),'staff')
	});

	$('body').on('click','.copy', function(){
		$(':after',this).css({'content':'copied!'})
		copyToClipboard($(this).data('copy'))
	})
});

function copyToClipboard(target) {
	// Enable Selection
	$('#'+target).css({'-webkit-user-select': 'auto',
				 '-moz-user-select': 'auto',
				 '-ms-user-select': 'auto',
				 'user-select': 'auto'})
	// Select Text
	if (document.selection) {
		var range = document.body.createTextRange();
		range.moveToElementText(document.getElementById(target));
		range.select();
	} else if (window.getSelection) {
		var range = document.createRange();
		range.selectNode(document.getElementById(target));
		window.getSelection().addRange(range);
	}
	$('#'+target).select()
	// Copy to Clipboard
	document.execCommand('copy')
	// Remove Selection
	if (window.getSelection) {
		if (window.getSelection().empty) {  // Chrome
			window.getSelection().empty();
		} 
		else if (window.getSelection().removeAllRanges) {  // Firefox
			window.getSelection().removeAllRanges();
		}
	} 
	else if (document.selection) {  // IE?
		document.selection.empty();
	}
	// Disable Selection
	$('#'+target).css({'-webkit-user-select': 'none',
				 '-moz-user-select': 'none',
				 '-ms-user-select': 'none',
				 'user-select': 'none'})
}

function generate_note(target,staff,json){
	//GENERATE TAB
	// x = string
	// y = fret

	$('#tabs-generator .staff:nth-child('+staff+')').html(function(i, value){
		var string = value.split('-||')
		var dash_length = 0
		var note_axis = []
		for (var j = 0; j < json.length; j++){ //JSON LENGTH
			if (json[j].y.toString().length > dash_length){
				dash_length = json[j].y.toString().length
			}
		}
		for (var y_2 = 0; y_2 < string.length -1; y_2++){ //6 STRINGS
			outerloop:
		 	for (var a = 0; a < string.length; a++){ //6 STRINGS
		 		innerloop:
		 		if (json.length > a){
					if (json[a].x == y_2+1){ //check if the note hits the string
						note_axis.push(json[a].y + (json[a].y.toString().length < dash_length ? '-':'') )
						break outerloop;
					}
				}
				else{
					note_axis.push( dash_length > 1 ? '--':'-' )
					break outerloop;
				}
			}
		}
		//OUTPUT
		for (var b = 0; b < string.length -1; b++){ //6 STRINGS
			//check if it has note
			if ( note_axis[b] != '-' || note_axis[b] != '--') {
				string[b] = string[b] + note_axis[b] + '-'
			}
		}
		return string.join('-||')
	});
}

function generator_append(request,target,source,selected_staff){
	if (request == 'append_lyrics'){
		//APPEND LYRICS GENERATOR
		$('#tabs-generator .staff:nth-child('+selected_staff+') content').html(function(i, value){
			return source
		})
	}
}

function _create(request,target,source){
	if (request == 'staff'){
			//CREATE NEW STAFF
			staff_count = ($('#tabs-generator .staff').length + 1);
			$('#staff-selector').append('<option selected>'+staff_count+'</option>')
			selected_instrument = $('#instrument-selector option:selected').text()
			if (selected_instrument == 'guitar'){
				_text_staff = '<div class="staff"><content class="lyrics">'+source +'</content></br>'
							  +'e||--||</br>'
							  +'B||--||</br>'
							  +'G||--||</br>'
							  +'D||--||</br>'
							  +'A||--||</br>'
							  +'E||--||</div>'
			}
			else if (selected_instrument == 'ukulele'){
				_text_staff = '<div class="staff"><content class="lyrics">'+source +'</content></br>'
							  +'E||--||</br>'
							  +'A||--||</br>'
							  +'D||--||</br>'
							  +'G||--||</div>'
			}
			target.html(target.html()+_text_staff)
	}
	else if (request == 'bar'){
		//CREATE BAR
		selected_staff = $('#staff-selector option:selected').text()
		$('#tabs-generator .staff:nth-child('+selected_staff+')').html(function(i, value){
			var arr = value.split('-||')
			for (var i = 0; i < arr.length -1; i++)
				arr[i] = arr[i] + '|-'
			return arr.join('-||')
		})
	}
	else if (request == 'fret mark'){
		//MARK SELECTED FRET
		target.append('<div class="selected"><span>'+source+'</span></div>')
		$('.selected',target).css({
			'position':'absolute',
			'padding':'0',
			'margin':'0 calc(50% - 10px) 0 calc(50% - 10px)',
			'width':'0px',
			'height':'0px',
			'border':'10px solid #19A309',
			'margin-top':'-9px',
			'border-radius':'999px',
			'z-index':'3'
		})
		if (target.attr('data-y-axis') == 0){$('.selected',target).css({'margin-top':'-15px'})}
		$('.selected > span',target).css({'color':'#FAFAFA','margin':'0 auto auto -3px','line-height':'0'})
	}
}

function _remove(target,request){
	if (request == 'clear-staff'){
		if ($('#instrument-selector').val() == 'guitar'){
			_text_staff = '<content class="lyrics"></content></br>'
						  +'e||--||</br>'
						  +'B||--||</br>'
						  +'G||--||</br>'
						  +'D||--||</br>'
						  +'A||--||</br>'
						  +'E||--||'
		}
		else if ($('#instrument-selector').val() == 'ukulele'){
			_text_staff = '<content class="lyrics"></content></br>'
						  +'E||--||</br>'
						  +'A||--||</br>'
						  +'D||--||</br>'
						  +'G||--||'
		}
		//CLEAR STAFF SELECTED
		selected_staff = $('#tabs-generator .staff:nth-child('+target+')')
		$(selected_staff,'#tabs-generator').html(_text_staff)
		selected_staff = $('#staff-selector').val()
		$('#generator_lyrics').val($('> content',selected_staff).html())
	}
	else if (request == 'delete-staff'){
		//DELETE STAFF SELECTED
		selected_staff = $('#tabs-generator .staff:nth-child('+target+')')
		$(selected_staff,'#tabs-generator').remove()
		$('#staff-selector option:last-child').remove()
		selected_staff = $('#staff-selector').val()
		$('#generator_lyrics').val($('> content',selected_staff).html())
		// $('#generator-lyrics').val()
		// console.log($('#generator-lyrics').val())
	}
	else if (request == 'fret mark'){
		//REMOVE MARKED FRET
		target.css({'display':'none'})
	}
}
function _show(target,request){
	if (request == 'yes'){
		target.attr({'Hidden':'Hidden'})
	}
	else{
		target.removeAttr('Hidden')
	}
}