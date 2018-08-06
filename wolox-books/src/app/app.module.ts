import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { UserService } from './components/user/user.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './screens/unauth/screens/register/register.component';
import { LoginComponent } from './screens/unauth/screens/login/login.component';
import { AuthComponent } from './screens/auth/auth.component';
import { LocalStorageService } from './components/local-storage/local-storage.service';
import { UnauthComponent } from './screens/unauth/unauth.component';
import { BookListComponent } from './screens/auth/screens/book-list/book-list.component';
import { AuthGuard } from './screens/auth/auth.guard';
import { UnauthGuard } from './screens/unauth/unauth.guard';
import { TokenInterceptorService } from './components/token-interceptor/token-interceptor.service';
import { BooksService } from './screens/auth/components/books-service/books.service';
import { BookDetailComponent } from './screens/auth/screens/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AuthComponent,
    UnauthComponent,
    BookListComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, LocalStorageService, AuthGuard, UnauthGuard, BooksService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
