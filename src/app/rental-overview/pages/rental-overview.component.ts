import {Component, OnInit} from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../models/vehicle';

@Component({
    selector: 'app-rental-overview',
    templateUrl: 'rental-overview.component.html'
})

export class RentalOverviewComponent implements OnInit {

    vehicels: Array<Vehicle>

    constructor(
        private vehicleService: VehicleService
    ){}


    ngOnInit(): void {
       this.vehicleService.getByType("Kombi").subscribe(
        (res) => {
            this.vehicels = res;
            console.log(this.vehicels)
        }
       );
       
    }
}