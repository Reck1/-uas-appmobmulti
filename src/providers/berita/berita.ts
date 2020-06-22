import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BeritaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API:string = "http://newsapi.org/v2/top-headlines?country=id&apiKey=fd4370733130400fb2ec401df732da07";
@Injectable()
export class BeritaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BeritaProvider Provider');
  }

  getNews(){
    return this.http.get(API);
  }
}
