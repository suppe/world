import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import {Country} from '../../models/Country';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-country-list-view',
  templateUrl: './country-list-view.component.html',
  styleUrls: ['./country-list-view.component.scss']
})



export class CountryListViewComponent implements OnInit {

  countries$: Observable<Country[]>;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countries$ = this.countryService.getCountries();
  }

}
