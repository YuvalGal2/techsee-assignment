import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../../models/book.model";
import {AppStateService} from "../../services/app-state.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit, OnDestroy{
  book: Book|null = null;
  subscription: Subscription|null = null;
  constructor(private appStateService: AppStateService) {
  }

  getBookFromState() {
    this.subscription = this.appStateService.activeBook$.subscribe((bookData: Book) => {
      console.log(bookData);
      this.book = bookData;
    })
    return this.book;
  }
  ngOnInit() {
    if (!this.getBookFromState()) {
      // do request to get from api.
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
