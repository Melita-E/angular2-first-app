import {Component, Input} from '@angular/core';
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
    this.appService.getData()
      .then((data: Response) => {this.array=data;console.log(this, data)});
  }
  public array: any;
  getColor(colorStr:string){
    return '#' + colorStr;
  }
}
