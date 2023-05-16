import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentalOverviewComponent } from './rental-overview/pages/rental-overview.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { StartRentalComponent } from './rental-overview/components/start-rental/start-rental.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EndRentalComponent } from './rental-overview/components/end-rental/end-rental.component';

export function getBaseUrl() {
  return environment.baseUrl;
}


@NgModule({
  declarations: [
    AppComponent,
    RentalOverviewComponent,
    StartRentalComponent,
    EndRentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide : "BASE_URL", useFactory: getBaseUrl, deps: []},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
