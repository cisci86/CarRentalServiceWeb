import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from "rxjs";
import { Vehicle } from "../models/vehicle";

@Injectable({
    providedIn: "root",
})
export class VehicleService {
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string
    ) { }

    getByType(vehicleType: string): Observable<Vehicle[]> {
        const url = this.baseUrl + "api/Vehicle/" + vehicleType;
        return this.http.get<Vehicle[]>(url);
    }
}