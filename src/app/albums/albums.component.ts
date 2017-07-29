import { Component, OnInit } from '@angular/core';
import { ApiService } from '.././api.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  userId;
  albums;
  constructor(private router: Router,private activatedRoute: ActivatedRoute,public api:ApiService) { 

  	//Get query params

  	 this.activatedRoute.params.subscribe((params: Params) => {
        this.userId = params['id'];
       
      });


  	//Get albums

  	this.api.getalbums().subscribe(d=>{
  		var val=d.json();
  		console.log(val);

  		var filter=val.filter(a=>a.userId.toString() == this.userId.toString());
  		this.albums=filter;
  	})
  }

  ngOnInit() {
  }

  nav()
  {
  	 this.router.navigate(['/photos']);
  }

}
