import {Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import  {AppService} from '../app.service';
import {Mock} from '../mock';
import {ColorDirective} from '../color/color.directive';
import  {ModalComponent} from '../modal/modal.component';

@Component({
  selector:'list',
  providers: [AppService],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  mock: Mock[]=[];
  attr: string;
  showDialog: boolean;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getData('./app/issues.json').subscribe((data: Response) => {
      this.mock = data.json();
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
