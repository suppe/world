import { NgModule } from '@angular/core';
import { CountryListViewComponent } from './components/country-list-view/country-list-view.component';
import { CountryListItemComponent } from './components/country-list-item/country-list-item.component';
import { CountryDetailViewComponent } from './components/country-detail-view/country-detail-view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CountryListViewComponent,
    CountryListItemComponent,
    CountryDetailViewComponent,
  ],
  imports: [SharedModule],
  exports: [
    CountryListItemComponent,
    CountryListViewComponent,
    CountryListItemComponent,
  ],
})
export class CountryModule {}
