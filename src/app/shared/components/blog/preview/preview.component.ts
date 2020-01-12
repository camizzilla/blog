import { Preview } from './../../../model/blog';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class PreviewComponent implements OnInit {

  @Input() preview: Preview;
  constructor() { }

  ngOnInit() {
  }

}
