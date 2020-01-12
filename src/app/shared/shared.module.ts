import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { PreviewComponent } from './components/blog/preview/preview.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeroComponent, PreviewComponent],
  exports: [HeroComponent, PreviewComponent],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ]
})
export class SharedModule { }
