import {Component, Input} from '@angular/core';
import {Book} from "../../models/book.model";
import {AppStateService} from "../../services/app-state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-books-list-item',
  templateUrl: './books-list-item.component.html',
  styleUrls: ['./books-list-item.component.scss']
})
export class BooksListItemComponent {
  constructor(private appStateService: AppStateService,
              private router:Router) {}
  @Input('bookData') bookItemData: Book | undefined;
  onBookClicked() {
    const activeBook: any = this.bookItemData;
    this.appStateService.setActiveBook(activeBook);
    return this.router.navigate([`books/${this.bookItemData?.id}`]);
  }
}
