import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { CountryModel } from '../../models/country.model';
import { Observable, Subscription } from 'rxjs';
import { DarkmodeService } from '../../../shared/services/darkmode.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-country-detail-view',
  templateUrl: './country-detail-view.component.html',
  styleUrls: ['./country-detail-view.component.scss'],
})
export class CountryDetailViewComponent implements OnInit, OnDestroy {
  selectedCountry: CountryModel;
  countries: CountryModel[];
  nativeNames: string[];
  routerSub: Subscription;
  isDarkTheme$: Observable<boolean>;
  name: string;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private darkModeService: DarkmodeService
  ) {}

  ngOnInit(): void {
    this.routerSub = this.route.params
      .pipe(
        switchMap((params) => {
          this.name = params.id;
          return this.countryService
            .getCountriesByName(params.id)
            .pipe(
              map((countries) =>
                countries.filter(
                  (countr: CountryModel) => countr.name.common === this.name
                )
              )
            );
        })
      )
      .subscribe(
        (country) => (this.selectedCountry = country.find(() => true))
      );
    this.countryService
      .getCountries()
      .subscribe((countries) => (this.countries = countries));
    this.isDarkTheme$ = this.darkModeService.isDarkTheme;
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }
}
