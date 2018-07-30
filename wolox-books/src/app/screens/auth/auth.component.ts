import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../components/local-storage/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(private localStorage: LocalStorageService, private router: Router) { }

  private logOut() {
    this.localStorage.removeValue('access_token');
    this.router.navigate(['']);
  }

}
