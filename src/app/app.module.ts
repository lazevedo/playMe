import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SplashPage } from '../pages/splash/splash';
import { LoginPage } from '../pages/login/login';
import { AlbumsPage } from '../pages/albums/albums';
import { TopAlbumsPage } from '../pages/top-albums/top-albums';

@NgModule({
  declarations: [
    MyApp,
    SplashPage,
    LoginPage,
    AlbumsPage,
    TopAlbumsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplashPage,
    LoginPage,
    AlbumsPage,
    TopAlbumsPage
  ],
  providers: []
})
export class AppModule {}
