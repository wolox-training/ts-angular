import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../components/user/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {  }

  canActivate() {
    if(this.userService.loggedIn()){
      this.router.navigate(['books']);
      return false;
    } else {
      return true;
    }
  }
}
