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
	imgData: Object;
	
	

  constructor(private router: ActivatedRoute, private _dataService: DataService) {

   }


  ngOnInit() {
			
		this.router.params.subscribe((params) => {
			var icao = params['icao'];
			var op = params['company'];
			console.log(op);
			this._dataService.getFlight(icao).subscribe(flight => {
				this.flightData = flight.acList[0];
			})
			this._dataService.getImage(op).subscribe(img => {
				this.imgData = img;
			})
		})
  }

}
