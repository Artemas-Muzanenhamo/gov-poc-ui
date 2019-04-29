import {License} from './license/license';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {LicenseService} from './licenses.service';
import {Observable} from 'rxjs';

@Injectable()
export class LicenseResolver implements Resolve<License> {

  constructor(private licenseService: LicenseService, router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): License | Observable<License> {
    const id = +route.params['id'];
    return this.licenseService.getLicense(id);
  }
}
