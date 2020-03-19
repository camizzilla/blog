import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare let gtag: any;
declare let fbq: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private router: Router) {
    router.events.subscribe((y: NavigationEnd) => {
      if (y instanceof NavigationEnd) {
        gtag('config', 'UA-159926651-1', { page_path: y.url });
        fbq('track', 'PageView');
      }
    });
  }
}
