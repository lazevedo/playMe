import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

  animations: [ 
    //Login form animation
    trigger('formFlip', [
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('* => flipped', animate('400ms ease')),
    ])
  ]
})

export class LoginPage {
  private albumData : Array<Object>;
  private user : string;
  private password : string;
  private formState : any = 'in';
  private loginVisible : boolean = true;
  private signupVisible : boolean = false;
  private loginZLevel : string = '100 !important';
  private signupZLevel : string = '1 !important';

  formFlip() {
    this.formState = (this.formState != 'flipped') ? 'flipped' : 'notFlipped';
    this.loginVisible = (this.loginVisible === true) ? false : true;
    this.signupVisible = (this.signupVisible === true) ? false : true;
  }

  constructor(public navCtrl: NavController, public navParams : NavParams) {
    this.albumData = navParams.get("albumData");
    console.log(this.albumData);
  }

  ionViewDidLoad() {
  }
}
