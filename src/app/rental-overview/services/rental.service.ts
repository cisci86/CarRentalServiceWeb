import { Injectable, Inject } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { RentalStartVM } from "../models/rental-start-VM";
import { Observable } from "rxjs";
import { ActiveRental } from "../models/active-rental";
import { RentalEndVM } from "../models/rental-end-VM";

@Injectable({
    providedIn: "root",
})
export class RentalService {
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string
    ){}

    startRental(rentalStartInfo: RentalStartVM): Observable<any>{
        const url = this.baseUrl + "api/Rental";
        return this.http.post<any>(url, rentalStartInfo);
    }

    getActiveRentals(): Observable<ActiveRental[]>{
        const url = this.baseUrl + "api/Rental";
        return this.http.get<ActiveRental[]>(url)
    }

    endRental(rentalEndInfo: RentalEndVM): Observable<any>{
        const url = this.baseUrl + "api/Rental";
        return this.http.put<any>(url,rentalEndInfo);
    }
}