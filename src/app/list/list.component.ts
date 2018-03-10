import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	private data : Array<Object>;

  	constructor(private _dataService: DataService) {

		this._dataService.getPlanesOverUser().subscribe(res => {
			this.data = res.acList;
			console.log(this.data);
		});
		
		Observable
			.interval(3 * 1000) 
			.timeInterval()
			.flatMap(() => this._dataService.getPlanesOverUser())
			.subscribe(res => {
				this.data = res.acList;	
				
    });
	

   	}

  ngOnInit() {
	this._dataService.getLocation();
  }

  onClick() {
	window.scrollTo(0,0);
  }

}
