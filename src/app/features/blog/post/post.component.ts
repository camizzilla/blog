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
    this.route.params.subscribe( params => {
      const count = { section: 0, code: 0, canvas: 0 };
      this.contents = [];
      this.fb.getPost(params).subscribe( post => this.post = post );
      this.fb.getPostContent(params).subscribe(content => {
        content[0].map.map( (elem: string) => this.contents.push( this.getHtmlElem( content[0], elem, count )));
      });
    });
  }

  getHtmlElem( contents, elem: string, count: object ) {
    let xml = contents[elem][count[elem]++];

    if (contents[elem] && elem === 'code') {
      xml = this.getCode(xml);
    }

    return (contents[elem]) && ({status: elem, html: xml});
  }

  getCode(html: string) {
    let code = '';
    html.split('|').map(e => code += `${e}\n`);
    return code;
  }
}
