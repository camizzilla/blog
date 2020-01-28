import { FirebaseService } from './../../../shared/services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  id: string;
  post: any;
  varCode = `
    let canvas = document.getElementById("myCanvas");
    canvas.width = 640;
    canvas.height = 480;

    let context = canvas.getContext('2d');

    let playerWidth = 50;
    let playerHeight = 100;
    let playerX = 100;
    let playerY = canvas.height - playerHeight;`;

  constructor(
    private route: ActivatedRoute,
    private fb: FirebaseService
    ) {}

  ngOnInit() {
    this.route.params.subscribe( params => this.fb.getPost(params).subscribe(post => this.post = post ));
  }

  htmlCode = `
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Platform game - single screen</title>
      <link rel="stylesheet" type="text/css" href="style.css">
    </head>

    <body>
      <canvas id=”myCanvas”></canvas>
    </body>
    <script src="main.js"></script>
  </html>`;

  cssCode = `
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  canvas {
    width: 300px;  
    height: 300px;
    border: 3px solid black;
  }
  `
}
