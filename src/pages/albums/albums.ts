import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlbumPage } from '../album/album';
import { ALBUMS_DATA } from './albums-data';

@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html'
})

export class AlbumsPage {
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {}

  openAlbum(album) {
    
  }
}
