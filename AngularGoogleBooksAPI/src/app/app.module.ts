import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BookInfoComponent } from './components/pages/book-info/book-info.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { SearchComponent } from './components/partials/search/search.component';
import { StartingBooksComponent } from './components/partials/starting-books/starting-books.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookInfoComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    StartingBooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
