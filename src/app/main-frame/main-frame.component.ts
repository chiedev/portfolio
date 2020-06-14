import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.scss']
})
export class MainFrameComponent implements OnInit {
  mainFrameSRC = 'https://musictools.chiedimla.com/chord-diagram-generator/';
  constructor() { }

  ngOnInit() {
  }

}
