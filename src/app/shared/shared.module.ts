import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { PreviewComponent } from './components/blog/preview/preview.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { RouterModule } from '@angular/router';
import { CanvasComponent } from './components/canvas/canvas.component';
import { MiniPreviewComponent } from './components/blog/mini-preview/mini-preview.component';
import { NewsletterBlockComponent } from './components/widgets/newsletter-block/newsletter-block.component';
import { ContactsComponent } from './components/widgets/contacts/contacts.component';
import { SocialComponent } from './components/widgets/social/social.component';
import { LastPostComponent } from './components/widgets/last-post/last-post.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    HeroComponent,
    PreviewComponent,
    CanvasComponent,
    MiniPreviewComponent,
    NewsletterBlockComponent,
    ContactsComponent,
    CanvasComponent,
    SocialComponent,
    LastPostComponent,
    MenuComponent
  ],
  exports: [
    HeroComponent,
    PreviewComponent,
    MiniPreviewComponent,
    NewsletterBlockComponent,
    ContactsComponent,
    CanvasComponent,
    SocialComponent,
    LastPostComponent,
    MenuComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ]
})
export class SharedModule { }
