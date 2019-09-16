import {Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import  {AppService} from '../app.service';
import {FlightMock} from '../flightMock';

@Component({
    selector: 'app-Flight',
    providers: [AppService],
    templateUrl: './Flight.component.html',
    styleUrls: ['./Flight.component.css']
})
export class FlightComponent implements OnInit {
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