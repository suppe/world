import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/Country';
import { combineLatest, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-country-list-view',
  templateUrl: './country-list-view.component.html',
  styleUrls: ['./country-list-view.component.scss'],
})
export class CountryListViewComponent {
  regionOptions = ['africa', 'america', 'asia', 'europe', 'oceania'];
  countries$: Observable<Country[]>;
  inputFilter$: Observable<string>;
  selectFilter$: Observable<string>;
  inputFilter: FormControl;
  selectFilter: FormControl;
  filteredCountries$: Observable<Country[]>;

  constructor(private countryService: CountryService) {
    this.countries$ = this.countryService.getCountries();
    this.inputFilter = new FormControl('');
    this.selectFilter = new FormControl('');
    this.inputFilter$ = this.inputFilter.valueChanges.pipe(startWith(''));
    this.selectFilter$ = this.selectFilter.valueChanges.pipe(startWith(''));

    this.filteredCountries$ = combineLatest(
      this.countries$,
      this.inputFilter$,
      this.selectFilter$
    ).pipe(
      map(([countries, nameFilterString, regionFilterString]) =>
        this.filterCountriesByRegion(
          this.filterCountriesByName(countries, nameFilterString),
          regionFilterString
        )
      )
    );
  }

  private filterCountriesByName(
    countries: Country[],
    filter: string
  ): Country[] {
    return countries.filter(
      (country) =>
        country.name.common.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );
  }

  private filterCountriesByRegion(
    countries: Country[],
    filter: string
  ): Country[] {
    return countries.filter(
      (country) =>
        country.region.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );
  }
}
