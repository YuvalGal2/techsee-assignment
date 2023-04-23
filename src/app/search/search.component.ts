import {Component, EventEmitter, Output} from '@angular/core';
import {AppStateService} from "../services/app-state.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

constructor(private appStateService: AppStateService) {}
  onSearch(query: string) {
    if (query.length > 0) {
      this.appStateService.setSearchAction(query);
    }
  }
}
