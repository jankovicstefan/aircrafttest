import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {JsonpModule, Jsonp, Response} from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

import { AppRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
	DetailsComponent
  ],
  imports: [
	JsonpModule,
	BrowserModule,
	AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
