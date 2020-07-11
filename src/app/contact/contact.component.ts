import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	title = 'Contact';

	constructor() { 
		// var iframe = document.getElementById('myiFrame');
		// var style = document.createElement('style');
		// style.textContent =
		// 	'.powrMark {' +
		// 	'  display: none;' +
		// 	'}' 
		// ;
		// iframe.ownerDocument.head.appendChild(style);
	}

	ngOnInit() {
	}

}
