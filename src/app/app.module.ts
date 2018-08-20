import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import  {ColorDirective} from './color/color.directive';
import {ModalComponent} from './modal/modal.component';
import {ListComponent} from "./list/list.component";
import {MainMenuComponent} from "./main-menu/main-manu.component";

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, ColorDirective, ModalComponent, ListComponent, MainMenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
