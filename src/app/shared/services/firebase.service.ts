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

  getCategory() {
    return this.db.collection('/categories').valueChanges();
  }

  getPost(params) {
    return this.db.collection('/blog').doc(params.id).valueChanges();
  }
}

