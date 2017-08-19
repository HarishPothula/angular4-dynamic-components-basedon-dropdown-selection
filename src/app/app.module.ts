import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {BasicComponent} from './basic.component';
import {AddressInfoComponent} from './address.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    AddressInfoComponent

],
  imports: [
    BrowserModule   ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
