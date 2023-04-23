import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Book} from "../models/book.model";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  search$: BehaviorSubject<any> = new BehaviorSubject(null);
  activeBook$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() { }

  setSearchAction(query:string):void {
    this.search$.next(query);
  }
  setActiveBook(bookData:Book): void {
    this.activeBook$.next(bookData)
  }


}
