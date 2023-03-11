import {Component, Input, OnInit} from '@angular/core';
import {Country} from '../../models/Country';

@Component({
  selector: 'app-country-list-item',
  templateUrl: './country-list-item.component.html',
  styleUrls: ['./country-list-item.component.scss']
})
export class CountryListItemComponent {
  @Input() country: Country;

}
