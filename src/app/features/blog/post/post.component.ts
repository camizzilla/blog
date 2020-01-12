import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => console.log(params));
  }

}
