import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NavController } from 'ionic-angular';
import { BeritaProvider } from '../../providers/berita/berita';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  articles:any;
  constructor(public navCtrl: NavController, private beritaProvider:BeritaProvider) {
    this.showBerita()
  }

  showBerita(){
    this.beritaProvider.getNews()
    .subscribe(berita => {
      this.articles = berita['articles'];
      console.log(this.articles);
    })
  }
}
