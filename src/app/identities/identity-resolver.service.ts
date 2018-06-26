import {Injectable} from '@angular/core';
import {IdentityService} from './identities.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Identity} from './identity/identity';
import {Observable} from 'rxjs';

@Injectable()
export class IdentityResolver {

  constructor(private identityService: IdentityService, router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Identity | Observable<Identity> {
    const refNum = +route.params['id'];
    return this.identityService.getIdentity(refNum);
  }
}
