import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ALBUM_DATA } from './album-data';

@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html'
})
export class AlbumsPage {
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log(ALBUM_DATA);
  }
}
