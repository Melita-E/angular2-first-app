import {Component} from '@angular/core';
import  {AppService} from './app.service';
import {ListComponent} from "./list/list.component";

@Component({
  selector:'app',
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
