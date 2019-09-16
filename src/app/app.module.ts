import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import  {ColorDirective} from './color/color.directive';
import {ModalComponent} from './modal/modal.component';
import {ListComponent} from './list/list.component';
import {HomeComponent} from './home/home.component';
import {FlightComponent} from './Flight/Flight.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'Flight', component: FlightComponent }
];

@NgModule({
  imports: [BrowserModule, HttpModule, [RouterModule.forRoot(routes)]],
  declarations: [AppComponent, ListComponent, HomeComponent, FlightComponent, ColorDirective, ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
