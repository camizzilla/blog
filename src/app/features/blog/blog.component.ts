import { FirebaseService } from './../../shared/services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Preview } from 'src/app/shared/model/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  items: object ;

  constructor( private fb: FirebaseService) {
    fb.getBlog();
   }

  ngOnInit() {
    this.fb.getBlog().subscribe(res => this.items = res );
  }

}
