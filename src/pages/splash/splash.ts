import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
  animations: [ 
    //Logo animation
    trigger('flyInTopSlow', [
      state('in', style({
        transform: 'translate3d(0,100px,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,-500px,0)'}),
        animate('500ms ease-in-out')
      ])
    ]),
  ]
})

export class SplashPage {
  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";

  private albumDataUrl: string = "https://s3.amazonaws.com/play-me/playme-albums.json";
  private albumData: Array<Object>;
  
  private getAlbumData() {
    this._http.get(this.albumDataUrl).subscribe(
      res => {
        this.albumData = res.json().albums;
      },
      err => console.log(err)
    );
  }

  constructor(public navCtrl: NavController, private _http: Http) {
    this.getAlbumData();
  }

  ionViewDidLoad() {
    setTimeout(function() {
       this.navCtrl.push(LoginPage, { albumData : this.albumData }, { animate : false });
   }.bind(this), 3000);
  }
}
