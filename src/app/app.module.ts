import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import  {ColorDirective} from './color.directive';
import {TimeAgoPipe} from 'time-ago-pipe'

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, ColorDirective, TimeAgoPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
