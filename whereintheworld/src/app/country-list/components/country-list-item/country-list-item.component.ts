import { Component, Input } from '@angular/core';
import { CountryModel } from '../../models/country.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-list-item',
  templateUrl: './country-list-item.component.html',
  styleUrls: ['./country-list-item.component.scss'],
})
export class CountryListItemComponent {
  @Input() country: CountryModel;
  @Input() isDarkTheme$: Observable<boolean>;
}
