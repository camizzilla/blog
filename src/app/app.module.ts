import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { HighlightModule } from 'ngx-highlightjs';
import { CookieLawModule } from 'angular2-cookie-law';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeaturesModule,
    SharedModule,
    HighlightModule,
    CookieLawModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
