import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SharedModule } from '../shared/shared.module';
import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    NewsletterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogModule
  ]
})
export class FeaturesModule { }