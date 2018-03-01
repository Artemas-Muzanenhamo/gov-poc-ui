import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LicenseComponent } from './license/license.component';
import {IdentityComponent} from './identity/identity.component';
import { AppRoutingModule } from './/app-routing.module';
import {WelcomeComponent} from './welcome/welcome.component';
import {AddLicenseComponent} from './license/add-license/add-license-component';


@NgModule({
  declarations: [
    AppComponent,
    LicenseComponent,
    IdentityComponent,
    WelcomeComponent,
    AddLicenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
