import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './screens/unauth/screens/register/register.component';
import { LoginComponent } from './screens/unauth/screens/login/login.component';
import { AuthComponent } from './screens/auth/auth.component';
import { UnauthComponent } from './screens/unauth/unauth.component';
import { BookListComponent } from './screens/auth/screens/book-list/book-list.component';

const routes: Routes = [
  {
    path: '',
    component: UnauthComponent,
    children: [
      {
        path: 'sign-up',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'books',
        component: BookListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
