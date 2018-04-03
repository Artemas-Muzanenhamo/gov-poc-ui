import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {IdentityComponent} from './identity/identity.component';
import { AppRoutingModule } from './/app-routing.module';
import {WelcomeComponent} from './welcome/welcome.component';
import {IdentitiesComponent} from './identity/identities/identities.component';
import { AddIdentityComponent } from './identity/add-identity/add-identity.component';
import { EditIdentityComponent } from './identity/edit-identity/edit-identity.component';
import {LicenseModule} from './license/license.module';


@NgModule({
  declarations: [
    AppComponent,
    IdentityComponent,
    WelcomeComponent,
    IdentitiesComponent,
    AddIdentityComponent,
    EditIdentityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LicenseModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
