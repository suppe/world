import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailViewComponent } from '../country-list/components/country-detail-view/country-detail-view.component';
import { CountryListViewComponent } from '../country-list/components/country-list-view/country-list-view.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'detail/:id', component: CountryDetailViewComponent },
  { path: 'list', component: CountryListViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
