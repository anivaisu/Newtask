import { Component, OnInit } from '@angular/core';
import { ApiService } from '.././api.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  Photos;	
  constructor(public api:ApiService) { 

  	//Get Photos

  	this.api.GetPhotos().subscribe(d=>{
  		var val=d.json();
  		this.Photos=val;
  	})

  }

  ngOnInit() {
  }

}
