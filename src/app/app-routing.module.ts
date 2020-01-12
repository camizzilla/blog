import { NewsletterComponent } from './features/newsletter/newsletter.component';
import { AboutComponent } from './features/about/about.component';
import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'newsletter', component: NewsletterComponent},
  { path: 'blog', loadChildren: './features/blog/blog.module#BlogModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
