import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {BooksService} from "../services/books.service";
import {Book} from "../models/book.model";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnChanges{
  @Input('queryOBS') queryOBS: any;
  booksOBS:any = null;
  constructor(private booksService:BooksService) {}
  ngOnChanges(payload:any) {
    if(payload.queryOBS.currentValue) {
      this.booksOBS = this.booksService.searchBook(payload.queryOBS.currentValue)
    }
  }
}
