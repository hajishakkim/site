import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  $ from 'jquery';
import 'node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'node_modules/bootstrap/node_modules/popper.js/dist/popper.min.js';
import 'node_modules/jquery-ui/external/jquery-3.1.0/jquery.js';


import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
@NgModule({
  declarations: [
    AppComponent,
    Child1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
