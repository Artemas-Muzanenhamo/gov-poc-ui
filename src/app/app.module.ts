import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LicenseComponent } from './license/license.component';


@NgModule({
  declarations: [
    AppComponent,
    LicenseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, LicenseComponent]
})
export class AppModule { }
