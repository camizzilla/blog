import { Component, ElementRef, ViewChild, Input, AfterViewInit } from '@angular/core';
import { CanvasService } from '../../services/canvas.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.sass']
})
export class CanvasComponent implements AfterViewInit {

  @Input() n: string;
  @Input() text: string;
  @Input() haveBtn: boolean;

  @ViewChild('canvas', {static: false}) canvas: ElementRef;

  ctx: CanvasRenderingContext2D;
  WIDTH: number;
  HEIGHT: number;
  toggle = true;

  constructor( private canvasService: CanvasService ) {}

  ngAfterViewInit() {
    this.init({width: 600, height: 400});
    this.startFunct();
  }

  init({width, height}) {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.WIDTH = this.canvas.nativeElement.width = width;
    this.HEIGHT = this.canvas.nativeElement.height = height;
  }

  startFunct() {
    this.canvasService[this.n](this.ctx, this.WIDTH, this.HEIGHT);
  }

  play() {
    this.canvasService.isStart(this.ctx, this.WIDTH, this.HEIGHT);
    this.toggle = false;
  }

  reset() {
    this.startFunct();
    this.toggle = true;
  }
}
