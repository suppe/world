import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryService} from '../../services/country.service';
import {Country} from '../../models/Country';

@Component({
  selector: 'app-country-detail-view',
  templateUrl: './country-detail-view.component.html',
  styleUrls: ['./country-detail-view.component.scss']
})
export class CountryDetailViewComponent implements OnInit {
  country: Country;
  nativeNames: string[];

  constructor(private route: ActivatedRoute, private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountryByName(this.route.snapshot.paramMap.get('id'))
      .subscribe((countries: Country[]) => {
        this.country = countries.find(() => true);
        this.nativeNames = Object.values(this.country.name.nativeName).map(names => names.common);
      });

  }

}
