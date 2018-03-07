import {Component} from '@angular/core';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  title = 'GOV-POC';
  services = 'SERVICES';
  licenseService = 'LICENSE SERVICE';
  identityService = 'IDENTITY SERVICE';
}
