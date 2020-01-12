import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) {}

  getBlog() {
    return this.db.collection('/blog', ref => ref.orderBy('date', 'desc')).valueChanges();
  }
}

