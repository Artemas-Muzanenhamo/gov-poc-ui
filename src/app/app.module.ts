import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LicenseComponent } from './license/license.component';
import {IdentityComponent} from './identity/identity.component';


@NgModule({
  declarations: [
    AppComponent,
    LicenseComponent,
    IdentityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    LicenseComponent,
    IdentityComponent
  ]
})
export class AppModule { }
