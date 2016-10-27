import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlbumPage } from '../album/album';
import { ALBUMS_DATA } from './albums-data';

@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html'
})

export class AlbumsPage {
  private albums : Array<Object> = [];

  getAlbums(ev: any) {
  	this.albums = ALBUMS_DATA;
  	let searchTerm = ev.target.value;
    
    if (searchTerm && searchTerm.trim() != '') {
  	  this.albums = this.albums.filter((album) => {
        return (album['band_name'].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 
      	         || album['title'].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
      })
  	}
  }

  constructor(public navCtrl: NavController) {
  	this.albums = ALBUMS_DATA;
  }

  ionViewDidLoad() {}

  openAlbum(album) {
    this.navCtrl.push(AlbumPage, { 'album' : album });
  }
}
