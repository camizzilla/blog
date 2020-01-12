import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private jsonURL = 'assets/db/db.json';
  constructor( private http: HttpClient ) { }

  getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
}
}
