import { Component, ElementRef, ViewChild, Input, AfterViewInit } from '@angular/core';
import { CanvasService } from './services/canvas.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.sass']
})
export class CanvasComponent implements AfterViewInit {

  @Input() data: any;

  @ViewChild('canvas', {static: false}) canvas: ElementRef;

  ctx: CanvasRenderingContext2D;
  WIDTH: number;
  HEIGHT: number;
  toggle = true;
  animationFrame: any;
  cycleLoopStart = false;
  clearLoop = false;

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

  drawRect({ color, x, y, w, h }) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }

  drawText( width, height, { font, color, align, text }) {
    this.ctx.font = font;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = align;
    this.ctx.fillText(text, width, height);
  }

  canvas1() {
    const rect = { color: '#ffad6a', x: 10, y: 10, w: 580, h: 380 };
    this.drawRect(rect);
  }

  canvas2() {
    this.canvas1();
    const text = { font: '50px Impact', color: '#6a8aff', align: 'center', text: 'Platform Single Screen' };
    this.drawText( this.WIDTH / 2, this.HEIGHT / 2, text);
  }

  canvas3() {
    this.canvas2();
    const rect1 = { color: '#000', x: this.WIDTH / 2 - 95, y: this.HEIGHT / 2 + 30, w: 200, h: 80 };
    const rect2 = { color: '#85FF88', x: this.WIDTH / 2 - 100, y: this.HEIGHT / 2 + 35, w: 200, h: 80 };
    const text = { font: '50px Impact', color: '#B37039', align: 'center', text: 'START' };
    this.drawRect(rect1);
    this.drawRect(rect2);
    this.drawText( this.WIDTH / 2, this.HEIGHT / 2 + 95, text);
  }

  playerCharact() {
    const playerWidth = 50;
    const playerHeight = 100;
    const playerX = 100;
    const playerY = this.HEIGHT - playerHeight;
    return { color: 'red', x: playerX, y: playerY, w: playerWidth, h: playerHeight };
  }

  canvas4() {
    const player = this.playerCharact();
    this.drawRect( player);
  }

  canvas5() {
    const step = 5;
    const player = this.playerCharact();
    const clear = true;
    this.animationFrame = requestAnimationFrame(() => this.loop(player, step));
  }

  canvas6() {
    const step = 5;
    const player = this.playerCharact();
    const clear = true;
    this.animationFrame = requestAnimationFrame(() => this.loop(player, step, clear));
  }

  canvas7() {
    const step = 5;
    const player = this.playerCharact();
    const clear = true;
    const border = true;
    this.animationFrame = requestAnimationFrame(() => this.loop(player, step, clear, border));
  }

  loop(player, step, clear = false, border = false ) {
    if ( clear || this.clearLoop) {
      this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    }
    this.drawRect(player);
    if (border) {
      if (
        player.x >= 0 &&
        player.x <= this.WIDTH - player.w &&
        player.y >= 0 &&
        player.y <= this.HEIGHT + player.h ) {
        player.x = player.x + step;
      }
    } else {
      player.x = player.x + step;
    }

    if (this.data.requestAnimationFrame && this.cycleLoopStart) {
      this.animationFrame = requestAnimationFrame(() => this.loop(player, step, clear, border));
    }
  }

  startFunct() {
    this[this.data.id]();
  }

  play() {
    this.clearLoop = false;
    this.toggle = false;
    this.cycleLoopStart = true;
    this.startFunct();
  }

  reset() {
    this.startFunct();
    this.toggle = true;
    this.cycleLoopStart = false;
    cancelAnimationFrame(this.animationFrame);
    this.clearLoop = true;
    this.startFunct();
  }
}
