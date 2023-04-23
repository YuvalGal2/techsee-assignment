import { Component } from '@angular/core';
import {AppStateService} from "../../services/app-state.service";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  constructor(private appStateService: AppStateService) {}
  searchQuery: any;
  ngOnInit() {
    this.searchQuery = this.appStateService.search$;
  }
}
