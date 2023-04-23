import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookPageComponent} from "./pages/book-page/book-page.component";
import {SearchPageComponent} from "./pages/search-page/search-page.component";

const routes: Routes = [
  {path:'', component:SearchPageComponent},
  {path:'books/:id', component: BookPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
