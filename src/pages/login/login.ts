import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public storage: Storage) {}

  ionViewDidLoad() {
    this.storage.set('user', 'azev');
    this.storage.set('pass', 'test');

    this.storage.get('user').then((user) => {
	  console.log('Me: Hey, ' + user + '! You have a very nice name.');
	  console.log('You: Thanks! I got it for my birthday.');
    });
  }
}
