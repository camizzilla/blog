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
  contents = [];
  constructor(
    private route: ActivatedRoute,
    private fb: FirebaseService
    ) {}

  ngOnInit() {
    this.route.params.subscribe( params => this.fb.getPost(params).subscribe(post => this.post = post ));
    const count = { section: 0, code: 0, canvas: 0 };
    this.route.params.subscribe( params => this.fb.getPostContent(params)
    .subscribe(content => content[0].map.map( (elem: string) => this.contents.push(this.getHtmlElem( content[0], elem, count )))
    ));
  }

  getHtmlElem( contents, elem: string, count: object ) {
    let xml = '';
    (contents[elem] && elem === 'code') ? (contents[elem][count[elem]++].split('|').map(e => xml += `${e}\n`)) : (xml = contents[elem][count[elem]++]);
    return (contents[elem]) && ({status: elem, html: xml});
  }
}
