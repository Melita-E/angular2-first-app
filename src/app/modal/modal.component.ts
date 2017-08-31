import {Component, Input, OnChanges} from '@angular/core';
import  {AppService} from '../app.service';
import { Response} from '@angular/http';
import {Comment} from '../mock';

@Component({
    selector:'modal',
    providers: [AppService],
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnChanges {
    comment: Comment[]=[];
    @Input() url: string;
    constructor(private appService: AppService) {

    }
    comments: Array<Component> = [];
    ngOnChanges (){
        this.appService.getData('./app/comments/17950.json').subscribe((data: Response) => {
            this.comment=data.json();
        });
        console.log(this.url);
    }
}
