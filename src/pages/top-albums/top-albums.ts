import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlbumPage } from '../album/album';
import { ALBUMS_DATA } from '../albums/albums-data';

@Component({
  selector: 'page-top-albums',
  templateUrl: 'top-albums.html'
})

export class TopAlbumsPage {
  private topAlbums : Array<Object> = [];
  
  getTopAlbums() {
  	for (let album of ALBUMS_DATA) {
      if(album['rating'] >=4) {
      	this.topAlbums.push(album);
      }
    }

    console.log(this.topAlbums);
  }

  constructor(public navCtrl: NavController) {
  	this.getTopAlbums();
  }

  ionViewDidLoad() {
  	console.log(ALBUMS_DATA);
  }

  openAlbum(album) {
    this.navCtrl.push(AlbumPage, { 'album' : album });
  }
}
