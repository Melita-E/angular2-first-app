import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import  {ColorDirective} from './color/color.directive';
import {ModalComponent} from './modal/modal.component';
import {ListComponent} from "./list/list.component";
import {HomeComponent} from "./home/home.component";
import {Page1Component} from "./page1/page1.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'page1', component: Page1Component }
];

@NgModule({
  imports: [BrowserModule, HttpModule, [RouterModule.forRoot(routes)]],
  declarations: [AppComponent, ListComponent, HomeComponent, Page1Component, ColorDirective, ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
