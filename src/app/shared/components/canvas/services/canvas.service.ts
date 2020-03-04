import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {
  start = false;
  animationFrame;

  drawRect(ctx, { color, x, y, w, h }) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }

  drawText(ctx, WIDTH, HEIGHT, { font, color, align, text }) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = align;
    ctx.fillText(text, WIDTH, HEIGHT);
  }

  canvas1(ctx, WIDTH, HEIGHT) {
    const rect = { color: '#ffad6a', x: 10, y: 10, w: 580, h: 380 };
    this.drawRect(ctx, rect);
  }

  canvas2(ctx, WIDTH: number, HEIGHT: number) {
    this.canvas1(ctx, WIDTH, HEIGHT);
    const text = { font: '50px Impact', color: '#6a8aff', align: 'center', text: 'Platform Single Screen' };
    this.drawText(ctx, WIDTH / 2, HEIGHT / 2, text);
  }

  canvas3(ctx, WIDTH, HEIGHT) {
    this.canvas2(ctx, WIDTH, HEIGHT);
    const rect1 = { color: '#000', x: WIDTH / 2 - 95, y: HEIGHT / 2 + 30, w: 200, h: 80 };
    const rect2 = { color: '#85FF88', x: WIDTH / 2 - 100, y: HEIGHT / 2 + 35, w: 200, h: 80 };
    const text = { font: '50px Impact', color: '#B37039', align: 'center', text: 'START' };
    this.drawRect(ctx, rect1);
    this.drawRect(ctx, rect2);
    this.drawText(ctx, WIDTH / 2, HEIGHT / 2 + 95, text);
  }

  playerCharact(HEIGHT) {
    const playerWidth = 50;
    const playerHeight = 100;
    const playerX = 100;
    const playerY = HEIGHT - playerHeight;
    return { color: 'red', x: playerX, y: playerY, w: playerWidth, h: playerHeight };
  }

  canvas4(ctx, WIDTH, HEIGHT) {
    const player = this.playerCharact(HEIGHT);
    this.drawRect(ctx, player);
  }

  canvas5(ctx, WIDTH, HEIGHT) {
    const step = 5;
    const player = this.playerCharact(HEIGHT);
    this.animationFrame = requestAnimationFrame(() => this.loop(ctx, player, step, WIDTH, HEIGHT));
  }

  canvas6(ctx, WIDTH, HEIGHT) {
    const step = 5;
    const player = this.playerCharact(HEIGHT);
    this.animationFrame = requestAnimationFrame(() => this.loop(ctx, player, step, WIDTH, HEIGHT));
  }

  canvas7(ctx, WIDTH, HEIGHT) {
    const step = 5;
    const player = this.playerCharact(HEIGHT);
    this.animationFrame = requestAnimationFrame(() => this.loop(ctx, player, step, WIDTH, HEIGHT));
  }

  loop(ctx, player, step, WIDTH, HEIGHT) {
    this.drawRect(ctx, player);
    player.x = player.x + step;
    if (this.start) {
      requestAnimationFrame(() => this.loop(ctx, player, step, WIDTH, HEIGHT));
    }
  }

  isStart(ctx, WIDTH, HEIGHT) {
    this.start = true;
    this.canvas5(ctx, WIDTH, HEIGHT);
  }
  // private color: string = '#000';
  //   private x: number = 100;
  //   private w: number = 50;
  //   private h: number = 100;
  //   private y: number = 0;

  //   private step: number = 5

  //   constructor(private ctx: CanvasRenderingContext2D) {
  //       this.y = this.canvasHeight - this.h;
  //       this.init();
  //   }

  //   init() {
  //       this.draw();
  //   }

  //   reset() {
  //       this.x = 0;
  //   }

  //   start() {
  //       this.x += this.step;
  //       this.draw();
  //   }

  //   clear() {
  //       this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  //   }

  //   private draw() {
  //       this.clear();

  //       this.ctx.fillStyle = this.color;
  //       this.ctx.fillRect(this.x, this.y, this.w, this.h);
  //   }
}
