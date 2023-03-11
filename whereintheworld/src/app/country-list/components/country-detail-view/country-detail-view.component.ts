import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryService} from '../../services/country.service';
import {Country} from '../../models/Country';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-country-detail-view',
  templateUrl: './country-detail-view.component.html',
  styleUrls: ['./country-detail-view.component.scss']
})
export class CountryDetailViewComponent implements OnInit {
  country: Country;

  constructor(private route: ActivatedRoute, private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountryByName(this.route.snapshot.paramMap.get('id'))
      .subscribe((countries: Country[]) => {
        this.country = countries.find(() => true);
        console.log(countries[0].currencies);
        console.log(countries[0].languages);
      });

  }

}
