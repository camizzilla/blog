import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-last-post',
  templateUrl: './last-post.component.html',
  styleUrls: ['./last-post.component.sass']
})
export class LastPostComponent {

  lastPosts: object;
  constructor( private fb: FirebaseService ) {
    fb.getLastPost().subscribe(res => this.lastPosts = res );
   }

}
