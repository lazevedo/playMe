import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    
  }
}
