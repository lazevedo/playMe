import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { TopAlbumsPage } from '../top-albums/top-albums';
import { ALBUMS_DATA } from '../albums/albums-data';

@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html'
})

export class AlbumsPage {

  constructor(public navCtrl: NavController, private viewCtrl : ViewController) {
    
  }

  ionViewDidLoad() {
  	this.viewCtrl.showBackButton(false);
    console.log(ALBUMS_DATA);
  }
}
