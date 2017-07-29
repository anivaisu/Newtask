import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
	Url="http://jsonplaceholder.typicode.com";

  constructor(public http:Http) { }

  //Get users

  Getuser()
  {
  	return this.http.get(this.Url+'/users');
  }

  //Get albums

  getalbums()
  {
  	return this.http.get(this.Url+'/albums');
  }

  //Get Photos

  GetPhotos()
  {
    return this.http.get(this.Url +'/photos');
  }
}
