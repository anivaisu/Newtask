import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users;
  show:boolean=false;
  enable=false;
  constructor(private _location: Location,private router: Router,public api:ApiService) {

  	//Get Users

  	this.api.Getuser().subscribe(d=>{
  		var val=d.json();
  		this.users=val;
  	})

   }

  nav(id)
  {
  	this.show=true;
    this.enable=true;
  	this.router.navigate(['/albums',{id:id}]);
  }



   backClicked() {
      console.log(this.router); 
      var route=this.router.url;
      var str=route.split(';');
      var strname=str[0];
      console.log(strname);
      if(strname == '/photos')
      {
        this._location.back();
        console.log(this._location);
      }
      else if(strname == '/albums')
      {
        this.show=false;
        this.enable=false;
        this._location.back();
      }
      }
}
