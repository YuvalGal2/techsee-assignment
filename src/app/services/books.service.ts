import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {Book} from "../models/book.model";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private readonly key = "AIzaSyCgMZh7FM5-I79m9E-bEkJVVu-yMrIV96c";
  private readonly apiUrl = `https://www.googleapis.com/books/v1/volumes?key=${this.key}`;

  constructor(private _http:HttpClient) {}

  searchBook(query:string): Observable<Book[]|any>{
    return this._http.get(`${this.apiUrl}&q=${query}`).pipe(
      map((payload: any) => payload.items)
    );
  }
}
