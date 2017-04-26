$(document).ready(function(){
	/** ---- GENERATE FUNCTION ---------------------------------------------------------------------------------------------

		PARAM 1 (request)			=>	'instrument' 
									=>	'settings'

		PARAM 2	(element)			=>	Note: if not set, default value is $('body')
									=>	Set the target element that will contain the component 
										generated (PARAM 1) request

		PARAM 3	(value)				=>	If PARAM1 is equal to "instrument" 
										then possible values should be "guitar" or "ukulele"
									=>	Else PARAM1 is equal to "settings"
										then possible values should be "sidebar" or "chord-search"
		-------------------------------------------------------------------------------------------------------------------- **/
	//GENERATE CHORD SEARCH SETTINGS
	generate('settings',$('#nav'),'chord-search')//navigations => navigation, float-navigation, left-navigation
	$('#search-chord-name').focus()
	//GENERATE CHORD DIAGRAMS
	/**
		PARAM 1 (request) 			=>	[download, chord, tooltip]
		PARAM 2 (instrument)		=>	[guitar, ukulele]
		PARAM 3 (element)			=>	container of diagram
		PARAM 5 (chord_name)		=>	(e.g C','Am','F','G' or leave it blank to generate all available chords)
	**/
	set_instrument = $('#instrument-selector').val()
	generateChord('chord',set_instrument,$('#content'))
	$('body').on('change','#instrument-selector', function(){
		set_instrument = $('#instrument-selector').val()
		$('.chord-container').each(function(){
			set_chord_name = $('> .chord-name',this)
			generateChord('chord',set_instrument,$(this),set_chord_name)
		})
	})
	// echie.com
	// $('body').each('.chord-tooltip', function(){
	// 	generateChord('chord-tooltip',instrument,$(this),$(this).html())
	// })
});