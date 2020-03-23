import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SharedModule } from '../shared/shared.module';
import { BlogModule } from './blog/blog.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    NewsletterComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogModule,
    ReactiveFormsModule
  ]
})
export class FeaturesModule { }
