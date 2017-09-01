import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
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

    @Input() visible: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private appService: AppService) {

    }
    comments: Array<Component> = [];
    ngOnChanges (){
        this.appService.getData(this.url).subscribe((data: Response) => {
            this.comment=data.json();
        });
        console.log(this.url);
    }
    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
}
