import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scale-generator',
  templateUrl: './scale-generator.component.html',
  styleUrls: ['./scale-generator.component.scss']
})
export class ScaleGeneratorComponent implements OnInit {

  base = '/scale-generator/';
  og_metas = `<meta property="fb:app_id" content="318138918776445" />
  <meta property="og:site_name" content="Raycille Dimla"/>
  <meta property="og:title" content="Raycille Dimla's Portfolio"/>
  <meta property="og:description" content="Female Web Developer | Philippines"/>
  <meta property="og:url" content="https://portfolio.chiedimla.com/scale-generator/">
  <meta property="og:image" content="https://portfolio.chiedimla.com/scale-generator/assets/images/uc_screenshot_compressed.png">
  <meta property="og:image:alt" content="Scale Generator">
  <meta property="og:type" content="website"/>`;

  constructor() { }

  ngOnInit() {
  }

}
