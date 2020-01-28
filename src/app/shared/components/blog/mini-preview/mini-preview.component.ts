import { Component, OnInit, Input } from '@angular/core';
import { Preview } from 'src/app/shared/model/blog';

@Component({
  selector: 'app-mini-preview',
  templateUrl: './mini-preview.component.html',
  styleUrls: ['./mini-preview.component.sass']
})
export class MiniPreviewComponent implements OnInit {
  @Input() preview: Preview;
  constructor() { }

  ngOnInit() {
  }

}
