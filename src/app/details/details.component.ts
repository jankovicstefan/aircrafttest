import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'detailsview',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

	flightData : Object;
	str : String;
	

  constructor(private router: ActivatedRoute, private _dataService: DataService) {

   }


  ngOnInit() {
			
		this.router.params.subscribe((params) => {
			var icao = params['icao'];
			this._dataService.getFlight(icao).subscribe(flight => {
				
			// 	  this.str = flight.acList[0].Op;
			// 	  //this.str[0];
			//   console.log(this.str.replace(/ /g,'').toLowerCase());
				this.flightData = flight.acList[0];
			})
		})
  }

}
