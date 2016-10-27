import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { SplashPage } from '../pages/splash/splash';
import { AlbumsPage } from '../pages/albums/albums';
import { TopAlbumsPage } from '../pages/top-albums/top-albums';

  //template: `<ion-nav [root]="rootPage"></ion-nav>`
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  private rootPage : any = SplashPage;
  private pages : Array<{title: string, component: any}>;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.pages = [
      { title: 'Albums', component: AlbumsPage },
      { title: 'Top Albums', component: TopAlbumsPage }
    ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
