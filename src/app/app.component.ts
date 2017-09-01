import {Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import  {AppService} from './app.service';
import  {ModalComponent} from './modal/modal.component';
import {Mock} from './mock';
import {ColorDirective} from './color/color.directive';

@Component({
  selector:'app',
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mock: Mock[]=[];
  attr: string;
  showDialog: boolean;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getData('./app/issues.json').subscribe((data: Response) => {
      this.mock=data.json();
    });
  }

  getColor(colorStr:string){
    return '#' + colorStr;
  }

  getArray(data: string){
    this.attr = data;
    this.showDialog = true;
  }
}
