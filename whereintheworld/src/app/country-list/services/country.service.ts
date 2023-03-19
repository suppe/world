import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryModel } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  baseURL = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<CountryModel[]> {
    return this.http.get(this.baseURL + 'all/') as Observable<CountryModel[]>;
  }

  getCountriesByName(name: string): Observable<CountryModel[]> {
    return this.http.get(this.baseURL + 'name/' + name) as Observable<
      CountryModel[]
    >;
  }
}
