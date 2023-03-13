import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryModel } from '../../models/country.model';
import { combineLatest, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { DarkmodeService } from '../../../shared/services/darkmode.service';

@Component({
  selector: 'app-country-list-view',
  templateUrl: './country-list-view.component.html',
  styleUrls: ['./country-list-view.component.scss'],
})
export class CountryListViewComponent implements OnInit {
  regionOptions = ['africa', 'america', 'asia', 'europe', 'oceania'];
  countries$: Observable<CountryModel[]>;
  inputFilter$: Observable<string>;
  selectFilter$: Observable<string>;
  inputFilter: FormControl;
  selectFilter: FormControl;
  filteredCountries$: Observable<CountryModel[]>;
  isDarkTheme$: Observable<boolean>;

  constructor(
    private countryService: CountryService,
    private darkModeService: DarkmodeService
  ) {
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

  ngOnInit(): void {
    this.isDarkTheme$ = this.darkModeService.isDarkTheme;
  }

  private filterCountriesByName(
    countries: CountryModel[],
    filter: string
  ): CountryModel[] {
    return countries.filter(
      (country) =>
        country.name.common.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );
  }

  private filterCountriesByRegion(
    countries: CountryModel[],
    filter: string
  ): CountryModel[] {
    return countries.filter(
      (country) =>
        country.region.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );
  }
}
