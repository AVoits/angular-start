import { Component, OnInit } from '@angular/core';
import { Raphael } from 'raphael';

@Component({
  selector: 'app-canvas-test',
  templateUrl: './canvas-test.component.html',
  styleUrls: ['./canvas-test.component.scss']
})
export class CanvasTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const test = Raphael;
  }

}
