import { Component, trigger, state, style, transition, animate, keyframes, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AlbumsPage } from '../albums/albums';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

  animations: [ 
    trigger('formFlip', [
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('* => flipped', animate('400ms ease')),
    ]),
    trigger('bounce', [
      state('bouncing', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('* => bouncing', [
        animate('200ms ease-in', keyframes([
          style({transform: 'translate3d(0,0,0)', offset: 0}),
          style({transform: 'translate3d(0,-10px,0)', offset: 0.5}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ])
  ]
})

export class LoginPage {
  private savedUser : string = 'none';
  private savedPassword : string = 'none';

  private loginUser : any = new FormControl("", Validators.required);
  private loginPassword : any = new FormControl("", Validators.required);

  private signupUser : any = new FormControl("", Validators.required);
  private signupPassword : any = new FormControl("", Validators.required);
  private signupPasswordConfirmation : any = new FormControl("", Validators.required);

  private loginForm : any;
  private signupForm : any;
  
  private formState : any = 'in';
  private bounceState : any = 'in';

  private loginVisible : boolean = true;
  private signupVisible : boolean = false;
  private loginZLevel : string = '100 !important';
  private signupZLevel : string = '1 !important';

  formFlip() {
    this.formState = (this.formState !== 'flipped') ? 'flipped' : 'notFlipped';
    this.loginVisible = (this.loginVisible === true) ? false : true;
    this.signupVisible = (this.signupVisible === true) ? false : true;
    this.bounceState = 'noBounce';
  }

  bounce () {
    this.bounceState = 'bouncing';
    setTimeout(() => {
        this.bounceState = 'noBounce';
    }, 100);
  }

  authUser() {
    if(!this.loginForm.valid) {
      this.bounce();
    } else {
      this.nav.setRoot(AlbumsPage);
    }
  }

  saveUser() {
    if(!this.signupForm.valid) {
      this.bounce();
    } else {
      this.savedUser = this.signupUser.value;
      this.savedPassword = this.signupPassword.value;
      this.formFlip();
    }
  }

  checkUserPassword(userKey: string, passwordKey: string) {
    return (group: FormGroup) => {
      let userInput = group.controls[userKey];
      let passwordInput = group.controls[passwordKey];
      if (this.savedUser!==userInput.value || this.savedPassword!==passwordInput.value) {
        return passwordInput.setErrors({notEquivalent: true})
      }
    }
  }

  matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey];
      let passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
    }
  }

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private nav : Nav) {}

  ionViewDidLoad() {
     this.loginForm = this.formBuilder.group({
      "loginUser": this.loginUser,
      "loginPassword": this.loginPassword
    }, {
      validator: this.checkUserPassword('loginUser', 'loginPassword')
    });

    this.signupForm = this.formBuilder.group({
      "signupUser": this.signupUser,
      "signupPassword": this.signupPassword,
      "signupPasswordConfirmation": this.signupPasswordConfirmation
    }, {
      validator: this.matchingPasswords('signupPassword', 'signupPasswordConfirmation')
    });
  }
}
