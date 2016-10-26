import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

  animations: [ 
    //Login form animation
/*    trigger('horizontalFlip', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('2000ms 200ms ease-in', keyframes([
          style({transform: 'translate3d(0,2000px,0)', offset: 0}),
          style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
          style({transform: 'translate3d(0,0,0)', offset: 1}) 
        ]))
      ])
    ]),
 
    //For login button
    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({opacity: 0}),
        animate('1000ms 2000ms ease-in')
      ])
    ])*/
  ]
})

export class LoginPage {
  constructor(public navCtrl: NavController, public storage: Storage) {
    this.storage.set('user', 'azev');
    this.storage.set('pass', 'test');
  }

  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";

  ionViewDidLoad() {
    this.storage.get('user').then((user) => {
	  console.log('Me: Hey, ' + user + '! You have a very nice name.');
	  console.log('You: Thanks! I got it for my birthday.');
    });
  }
}
