import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentalOverviewComponent } from './rental-overview/pages/rental-overview.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

export function getBaseUrl() {
  return environment.baseUrl;
}


@NgModule({
  declarations: [
    AppComponent,
    RentalOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide : "BASE_URL", useFactory: getBaseUrl, deps: []},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
