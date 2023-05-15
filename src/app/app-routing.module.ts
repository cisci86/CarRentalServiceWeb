import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalOverviewComponent } from './rental-overview/pages/rental-overview.component';

const routes: Routes = [
  {
    path: '', redirectTo: "rentaloverview", pathMatch: 'full'
  },
  { path: 'rentaloverview', component: RentalOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
