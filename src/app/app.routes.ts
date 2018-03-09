import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

const routes = [

	{ path: 'flight/:icao', component: DetailsComponent }
];


@NgModule({
	imports: [
	  RouterModule.forRoot(
		routes,
		{ enableTracing: true } 
	  )
	],
	exports: [
	  RouterModule
	]
  })
  export class AppRoutes {}