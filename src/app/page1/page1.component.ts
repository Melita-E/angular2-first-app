import {Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import  {AppService} from '../app.service';
import {FlightMock} from '../flightMock';

@Component({
    selector: 'app-page1',
    providers: [AppService],
    templateUrl: './page1.component.html',
    styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
    mock: FlightMock[] = [];
    objectKeys = Object.keys;
    today: number = Date.now();
    constructor(private appService: AppService) { }

    ngOnInit() {
        this.appService.getData('./app/flight.json').subscribe((data: Response) => {
            this.mock = data.json();
        });
    }
}