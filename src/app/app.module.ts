import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BookInfoComponent } from './components/pages/book-info/book-info.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { SearchComponent } from './components/partials/search/search.component';
import {AppRoutingModule} from './app-routing.module';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import {BooksSearchedComponent} from './components/pages/books-searched/books-searched.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookInfoComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    NavbarComponent,
    BooksSearchedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
