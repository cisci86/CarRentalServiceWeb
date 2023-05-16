import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { VehicleService } from "../../services/vehicle.service";
import { Vehicle } from "../../models/vehicle";
import { RentalStartVM } from "../../models/rental-start-VM";
import { RentalService } from "../../services/rental.service";

@Component({
    selector: "app-start-rental",
    templateUrl: "start-rental.component.html",
    styleUrls: ['start-rental-component.scss']
})
export class StartRentalComponent {

    vehicles: Vehicle[];
    newRental: RentalStartVM = new RentalStartVM();
    selectedVehicle: Vehicle = new Vehicle();
    bookingnumber: string;
    rentalStartComplete: boolean;

    constructor(
        private vechicleService: VehicleService,
        private rentalService: RentalService
    ){}


    form = new FormGroup({
        vehicleType: new FormControl(' ')
    })

    getVehicles(){
        //collects all vihecles from the db
        this.vechicleService.getByType(this.form.value.vehicleType).subscribe((res) => {
            this.vehicles = res;
        })
    }

    startRental(){
        this.newRental.vehicleLicensePlateNumber =  this.selectedVehicle.licensePlateNumber;
        
        //sends rentalStartVM to server to start rental. Gets bookingnumber in return
        this.rentalService.startRental(this.newRental).subscribe((bookingnr) => {
            this.bookingnumber = bookingnr.bookingnumber;
            this.rentalStartComplete = true
        })
    }
}