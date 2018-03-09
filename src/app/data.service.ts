import { Injectable } from '@angular/core';
import { Jsonp, JsonpModule } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';


@Injectable()
export class DataService {

	
  constructor(private _jsonp: Jsonp) { }


  getData() {
	return this._jsonp.get('https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?callback=JSONP_CALLBACK')
		.map(res => res.json());
  }

  getFlight(icao: number) {
	return this._jsonp.get('https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?callback=JSONP_CALLBACK&fIcoQ='+icao)
		.map(res => res.json());
		
  }	
}
