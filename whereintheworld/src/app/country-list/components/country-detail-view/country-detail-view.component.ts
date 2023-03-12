import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { CountryModel } from '../../models/country.model';
import { Observable, Subscription } from 'rxjs';
import { DarkmodeService } from '../../../shared/services/darkmode.service';

@Component({
  selector: 'app-country-detail-view',
  templateUrl: './country-detail-view.component.html',
  styleUrls: ['./country-detail-view.component.scss'],
})
export class CountryDetailViewComponent implements OnInit, OnDestroy {
  selectedCountry: CountryModel;
  countriesById$: Observable<CountryModel[]>;
  id: string;
  countries: CountryModel[];
  nativeNames: string[];
  routerSub: Subscription;
  isDarkTheme$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private darkModeService: DarkmodeService
  ) {}

  ngOnInit(): void {
    this.routerSub = this.route.params.subscribe((params) => {
      this.countriesById$ = this.countryService.getCountryByName(params.id);
      this.id = params.id;
    });
    // http unsubscribes/cleans itself
    this.countriesById$.subscribe((countries: CountryModel[]) => {
      this.selectedCountry = countries.find(
        (country) => country.name.common === this.id
      );
      this.nativeNames = Object.values(
        this.selectedCountry.name.nativeName
      ).map((names) => names.common);
    });
    this.countryService
      .getCountries()
      .subscribe((countries) => (this.countries = countries));
    this.isDarkTheme$ = this.darkModeService.isDarkTheme;
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }
}
