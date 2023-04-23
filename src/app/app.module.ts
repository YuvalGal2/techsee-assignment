import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import {HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './search/search.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import {BooksListItemComponent} from "./books-list/books-list-item/books-list-item.component";
import {FormsModule} from "@angular/forms";
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BooksListItemComponent,
    SearchComponent,
    BookPageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
