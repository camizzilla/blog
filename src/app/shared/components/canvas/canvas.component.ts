import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.sass']
})
export class CanvasComponent implements OnInit {

  @Input() public classCanvas;
  @Input() public addBtn;


  @ViewChild('canvas', {static: false}) canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  raf = 0;
  stopAnimation: boolean;
  square;

  constructor() { }

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.square = new this.classCanvas(this.ctx);
    this.stopAnimation = false;
  }

  start() {
    if (this.raf) {
      window.cancelAnimationFrame(this.raf);
      this.stopAnimation = true;
    }
    this.raf = window.requestAnimationFrame(() => this.loop());
  }

  loop() {
    if (this.stopAnimation) {
      this.stopAnimation = false;
      return;
    }
    this.square.start();
    window.requestAnimationFrame(() => this.loop());
  }

  play() {
    this.square = new this.classCanvas(this.ctx);
    // this.square.reset();
    this.start();
  }

}
