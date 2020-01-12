import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [BlogComponent, PostComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: BlogComponent},
      { path: ':id', component: PostComponent}
    ])
  ]
})
export class BlogModule { }
