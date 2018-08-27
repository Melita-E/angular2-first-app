import {Component} from '@angular/core';
import  {AppService} from './app.service';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector:'app',
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

}
