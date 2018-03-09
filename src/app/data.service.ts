import { Injectable } from '@angular/core';
import { Jsonp, JsonpModule, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';


@Injectable()
export class DataService {

  private clearbitApiKey : String = "";

  

  constructor(private _jsonp: Jsonp) { 

  }

 	

  getData() {
	return this._jsonp.get('https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?callback=JSONP_CALLBACK')
		.map(res => res.json());
  }

  getFlight(icao: String) {
	return this._jsonp.get('https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?callback=JSONP_CALLBACK&fIcoQ='+icao)
		.map(res => res.json());	
  }	

   getImage(name: String) {
 	return this._jsonp.get('https://company.clearbit.com/v1/domains/find?name='+name )
 		.map(res => res.json());
   }
}
