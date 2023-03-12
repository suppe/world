import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/Country';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-detail-view',
  templateUrl: './country-detail-view.component.html',
  styleUrls: ['./country-detail-view.component.scss'],
})
export class CountryDetailViewComponent implements OnInit, OnDestroy {
  selectedCountry: Country;
  countries: Country[];
  nativeNames: string[];
  routerSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    // http unsubscribes/cleans itself
    this.routerSub = this.route.params.subscribe((params: Params) =>
      this.countryService
        .getCountryByName(params.id)
        .subscribe((countries: Country[]) => {
          this.selectedCountry = countries.find(() => true);
          this.nativeNames = Object.values(
            this.selectedCountry.name.nativeName
          ).map((names) => names.common);
        })
    );
    this.countryService
      .getCountries()
      .subscribe((countries) => (this.countries = countries));
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }
}
