import { Injectable } from '@angular/core';
import { Jsonp, JsonpModule, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';


@Injectable()
export class DataService {

	latitude : String;
	longitude: String;

  constructor(private _jsonp: Jsonp) { 

  }


  public getLocation() {
	  if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			this.latitude = position.coords.latitude.toString();
			this.longitude = position.coords.longitude.toString();

			console.log(this.latitude);
		})
	  }
  }

  getPlanesOverUser() {
	return this._jsonp.get('https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?callback=JSONP_CALLBACK&lat='+this.latitude+'&lng='+this.longitude+'&fDstL=0&fDstU=150')
		.map(res => res.json());	
  }

  getData() {
	return this._jsonp.get('https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?callback=JSONP_CALLBACK')
		.map(res => res.json());
  }

  getFlight(icao: String) {
	return this._jsonp.get('https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?callback=JSONP_CALLBACK&fIcoQ='+icao)
		.map(res => res.json());	
  }	

}
