import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {


	htmlStr: string;

	ngOnInit() {
		
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.showPosition, nerror => {
				switch(nerror.code) {
					case nerror.PERMISSION_DENIED:
						console.log("User denied the request for Geolocation.");
						this.htmlStr = "User denied the request for Geolocation.";
						break;
					case nerror.POSITION_UNAVAILABLE:
						console.log("Location information is unavailable.");
						this.htmlStr = "Location information is unavailable.";
						break;
					case nerror.TIMEOUT:
						console.log( "The request to get user location timed out.");
						this.htmlStr = "Location information is unavailable.";
						break;
				}
			});
		 }
	}

	showPosition(position) {
	    console.log(position.coords); 
	}
}

