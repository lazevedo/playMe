import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-album',
  templateUrl: 'album.html'
})

export class AlbumPage {
  private album : Object;

  constructor(public navCtrl: NavController, private navParams : NavParams) {
  	this.album = this.navParams.get("album");
  }

  ionViewDidLoad() {
  }
}
