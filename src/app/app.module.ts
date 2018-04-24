import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DatatableNetComponent} from './datatablenet/datatablenet.component';

import { AppComponent } from './app.component';
import 'jquery';
import 'datatables.net';

@NgModule({
  declarations: [
    AppComponent,
    DatatableNetComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
