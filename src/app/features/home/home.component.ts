import { FirebaseService } from './../../shared/services/firebase.service';
import { HttpService } from './../../shared/services/http.service';
import { Preview } from './../../shared/model/blog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  previews: object;
  constructor( private fb: FirebaseService ) {
    fb.getBlog().subscribe(res => this.previews = res );
    // http.getJSON().subscribe( json => this.previews = json.blog );
   }
}
