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

  getLastPost() {
    return this.db.collection('/blog', ref => ref.orderBy('date', 'desc').limit(2)).valueChanges();
  }

  getCategory() {
    return this.db.collection('/categories').valueChanges();
  }

  getPost(id) {
    return this.db.collection('/blog').doc(id).valueChanges();
  }

  getPostContent(params) {
    return this.db.collection('/blog').doc(params.id).collection('content').valueChanges();
  }

}

