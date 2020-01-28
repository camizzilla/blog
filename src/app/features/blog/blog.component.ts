import { FirebaseService } from './../../shared/services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Preview } from 'src/app/shared/model/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  posts: any ;
  categories;
  constructor( private fb: FirebaseService) {}

  ngOnInit() {
    this.fb.getCategory().subscribe(categories => {
      this.categories = categories;
      this.fb.getBlog().subscribe(posts => this.posts = posts );
    });
  }

}
