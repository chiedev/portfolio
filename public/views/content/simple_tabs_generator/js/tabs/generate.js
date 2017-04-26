function generate(request,element,value){
	if (element == null || element == ''){
		element = $('body')
	}
	if (value == null || value == ''){
		value = ''
	}
	switch (request){
		case 'instrument':
			_instrument(value,element);
			break;
		case 'settings':
			_settings(value,element);
	}
}

function _instrument(req,elem){
	var strings
	var frets
	var tuning_list
	var chord_name
	var chord_list = ['C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab','A','A#/Bb','B']
	var quality_list = ['','m','7','m7','M7','mM7','7&#x266D;5','m7&#x266D;5','M7&#x266D;5','mM7&#x266D;5','&#x2b;7','&#x2b;M7','&#xb0;7','7#9','7&#x266D;9','9','m9','M9','mM9','6/9','m6/9','&#xb0;','&#x2b;','sus2','sus4','7sus2','7sus4','M7sus2','M7sus4','add2','madd2','add4','madd4','add6','madd6','add9','madd9','dom','aug']
	var altbass_list = ['','/C','/Db','/D','/Eb','/E','/F','/Gb','/G','/Ab','/A','/Bb','/B']
	var _obj_str_line = '<nav class="str_line"></nav>'
	var _obj_fret_mark = '<span class="fret_mark"></span>'
	var _obj_mark_note = '<span class="fret_mark"></span>'
	var fret_marks = []
	if (req == 'guitar'){
		// GENERATE GUITAR FRET BOARD LAYOUT
		strings = 6
		frets = 24
		tuning_list = ['e','B','G','D','A','E'] //reverse
		fret_marks = ['5','7','9','12','15','17','19']
	}
	else if (req == 'ukulele'){
		// GENERATE GUITAR FRET BOARD LAYOUT
		strings = 4
		frets = 18
		tuning_list = ['A','E','C','G'] //reverse
		fret_marks = ['3','5','7','10','13']
	}
	if ($('#instrument_fret-board').length == 0){
		elem.append('<div id="virtual_instrument">'
						+'<div class="dropdown" data-type="text">'
							+'<select id="instrument-selector">'
								+'<option>guitar</option>'
								+'<option>ukulele</option>'
							+'</select>'
						+'</div>'
						// +'<span>VIRTUAL INSTRUMENT</span>'
						+'<div class="switch">'
							+'<label for="switch">view notes</label>'
							+'<span data-value="view"></span>'
						+'</div>'
						+'<table id="instrument_fret-board" class="black"></table>'
					+'</div>'
					)
	}
	else{
		$('#instrument_fret-board').html('')
	}
	$('#virtual_instrument').css({'width':'calc(100% - 2px)'})
	$('#instrument_fret-board').css({'width':'calc(100% - 2px)',
									 'border-collapse':'collapse'
								   })
	for (var i = 0; i <= strings; i++) {
		if (i == 0){
			$('#instrument_fret-board').append('<tr class="string"></tr>')
		}
		else{
			$('#instrument_fret-board').append('<tr class="string"></tr>')
		}
		for (var i_2 = 0; i_2 <= frets; i_2++) {
			if (i == 0){
				if (i_2 == 0){
					$('.string:nth-child('+(i+1)+')').append('<th></th>')
				}
				else{
					$('.string:nth-child('+(i+1)+')').append('<th>'+i_2+'</th>')
				}
			}
			else{
				if (i_2 == 0){
					chord_name = tuning_list[i-1].toUpperCase()
					$('.string:nth-child('+(i+1)+')').append('<th class="fret" data-x-axis="'+(i)+'" data-y-axis="'+(i_2)+'" data-chord-name="'+chord_name+'">'+tuning_list[i-1]+'</th>')
				}
				else{
					for (var i_3 = 0; i_3 <= frets; i_3++) {
						if(chord_name == chord_list[i_3] && chord_list[i_3] != 'B'){
							chord_name = chord_list[i_3+1]
							break;
						}
						else if (chord_list[i_3] == 'B'){
							chord_name = chord_list[0]
							break;
						}
					}
					$('.string:nth-child('+(i+1)+')').append('<td class="fret" data-x-axis="'+(i)+'" data-y-axis="'+(i_2)+'" data-chord-name="'+chord_name+'">'+_obj_str_line+'</td>')
				}
			}
		}
	}
	//create fret mark
	var mark_string_center = (strings / 2)
	var mark_octave = fret_marks[3]
	for (var a = 0; a <= fret_marks.length - 1; a++) {
		if (fret_marks[a] != mark_octave){
			$('.string td[data-x-axis="'+mark_string_center+'"][data-y-axis="'+fret_marks[a]+'"]').append('<span class="fret_mark"></span>')
		}
		else{
			$('.string td[data-x-axis="1"][data-y-axis="'+fret_marks[a]+'"]').append('<span class="fret_mark"></span>')
			$('.string td[data-x-axis="'+(strings-1)+'"][data-y-axis="'+fret_marks[a]+'"]').append('<span class="fret_mark"></span>')
		}
	}
	//adjust fret size (big to small)
	for (var b = 0;  b <= frets; b++) {
		$('#instrument_fret-board tbody .string .fret:nth-child('+b+')').css({'min-width':'calc(60px - '+(b+frets)+'px)'})
	}
}

function _settings(req,elem){
	// var chord_list = ['C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab','A','A#/Bb','B']
	// var quality_list = ['','m','7','m7','M7','mM7','7&#x266D;5','m7&#x266D;5','M7&#x266D;5','mM7&#x266D;5','&#x2b;7','&#x2b;M7','&#xb0;7','7#9','7&#x266D;9','9','m9','M9','mM9','6/9','m6/9','&#xb0;','&#x2b;','sus2','sus4','7sus2','7sus4','M7sus2','M7sus4','add2','madd2','add4','madd4','add6','madd6','add9','madd9','dom','aug']
	// var altbass_list = ['','/C','/Db','/D','/Eb','/E','/F','/Gb','/G','/Ab','/A','/Bb','/B']
	// var catalog_chord
	// var catalog_quality
	// var catalog_altbass

	// for (var i = 0; i <= chord_list.length - 1; i++) {
	// 	catalog_chord = catalog_chord + '<option>' + chord_list[i] + '</option>'
	// }

	// for (var i_2 = 0; i_2 <= quality_list.length - 1; i_2++) {
	// 	catalog_quality = catalog_quality + '<option>' + quality_list[i_2] + '</option>'
	// }

	// for (var i_3 = 0; i_3 <= altbass_list.length - 1; i_3++) {
	// 	catalog_altbass = catalog_altbass + '<option>' + altbass_list[i_3] + '</option>'
	// }
	switch (req){
		case 'sidebar':
			elem.append('<div class="settings">'
					+'<div class="dropdown" data-type="number">'
						+'<label>Staff</label>'
						+'<select id="staff-selector"></select>'
					+'</div>'
					// +'<div class="dropdown" data-type="text">'
					// 	+'<label>Chord</label>'
					// 	+'<select id="catalog-chord" class="mousescroll">'
					// 	+ catalog_chord
					// 	+'</select>'
					// +'</div>'
					// +'<div class="dropdown" data-type="text">'
					// 	+'<label>Quality</label>'
					// 	+'<select id="catalog-quality" class="mousescroll">'
					// 	+ catalog_quality
					// 	+'</select>'
					// +'</div>'
					// +'<div class="dropdown" data-type="text">'
					// 	+'<label>Alt Bass</label>'
					// 	+'<select id="catalog-altbass" class="mousescroll">'
					// 	+ catalog_altbass
					// 	+'</select>'
					// +'</div>'
					// +'<div class="button">'
					// 	+'<button id="generate">Insert Chord</button>'
					// +'</div>'
					+'<div class="textarea">'
						+'<label>Text Content</label>'
						+'<textarea id="generator_lyrics" placeholder="Write your content here..."></textarea>'
					+'</div>'
					+'<div class="button">'
						+'<button title="New Staff" id="tabs-generator_new-staff">'
							+'CREATE'
						+'</button>'
					+'</div>'
					+'<div class="button">'
						+'<button title="Clear" id="tabs-generator_clear">'
							+'CLEAR'
						+'</button>'
					+'</div>'
					+'<div class="button">'
						+'<button title="Clear" id="tabs-generator_delete">'
							+'DELETE'
						+'</button>'
					+'</div>'
					+'<div class="button">'
						+'<button title="Bar" id="tabs-generator_bar">NEW BAR</button>'
					+'</div>'
			+'</div>')
			break;
		case 'generator-tabs':
			elem.append('<div id="tabs-generator">'
							+'</div>'
							)
			_create('staff',$('#tabs-generator'),$('#generator_lyrics').text())
			$('#tabs-generator').parent().prepend('<div class="button copy" data-copy="tabs-generator">'
											+'<button title="Copy Text">'
												+'COPY'
											+'</button>'
										+'</div>'
										)
			break;
	}
	function __changed(elem){
		strings = ($('#instrument-selector').val() == 'guitar')?6:4
		$('#set-chord-code',elem).attr('maxlength',strings)
	}
	$('#instrument-selector').on('change',function(){
		__changed(elem)
		_instrument($(this).val(),elem)
	})
	__changed(elem)
}