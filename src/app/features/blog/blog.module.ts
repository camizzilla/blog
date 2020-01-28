import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from '../../shared/shared.module';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

export function getHighlightLanguages() {

  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml')
  };

}

@NgModule({
  declarations: [BlogComponent, PostComponent],
  imports: [
    CommonModule,
    SharedModule,
    HighlightModule,
    RouterModule.forChild([
      { path: '', component: BlogComponent },
      { path: ':id', component: PostComponent }
    ])
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ]
})
export class BlogModule { }
