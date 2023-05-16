import { Component, OnInit } from "@angular/core";
import { RentalService } from "../../services/rental.service";
import { ActiveRental } from "../../models/active-rental";
import { RentalEndVM } from "../../models/rental-end-VM";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-end-rental",
    templateUrl: "end-rental.component.html",
    styleUrls: ["end-rental.component.scss"]
})
export class EndRentalComponent implements OnInit {

    activeRentals: Array<ActiveRental>
    selectedRental: ActiveRental;
    rentalEndInfo: RentalEndVM = new RentalEndVM();
    rentalEndComplete: boolean;
    totalRentalPrice: number;
    endDateValid: boolean = true


    constructor(
        private rentalService: RentalService
    ) { }


    ngOnInit(): void {
        this.rentalService.getActiveRentals().subscribe((rentals) => {
            this.activeRentals = rentals
        })
    }

    endRental() {
        this.rentalEndInfo.bookingNumber = this.selectedRental.bookingNumber;
        if (this.rentalEndInfo.rentalEndTime > this.selectedRental.rentalStartTime) {
            this.endDateValid = true
        }
        else {
            this.endDateValid = false
        }

        this.rentalService.endRental(this.rentalEndInfo).subscribe((totalPrice) => {
            this.rentalEndComplete = true;
            this.totalRentalPrice = totalPrice.totalRentalPrice
        })

    }

}