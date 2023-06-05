import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {CommonFooterComponent, CommonHeaderComponent} from "@hmcts-common";
import {
  AppointmentCalenderComponent, NfdivFeaturesModule
} from "@nfdiv/features";
import {MAT_DATE_LOCALE} from "@angular/material/core";



@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
    imports: [
      BrowserModule,
      CommonHeaderComponent,
      CommonFooterComponent,
      NfdivFeaturesModule,
    AppointmentCalenderComponent
    ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-gb'},
    {provide: LOCALE_ID, useValue: 'en-gb'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
