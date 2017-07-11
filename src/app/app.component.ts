import {Component} from '@angular/core';
import { Response} from '@angular/http';
import  {AppService} from './app.service';

@Component({
  selector:'app',
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private appService: AppService) {
    this.appService.getData().subscribe((data: Response) => {this.array=data});
  }
  public array: any;
}
