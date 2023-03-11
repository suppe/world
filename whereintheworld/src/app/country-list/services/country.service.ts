import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../models/Country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  baseURL = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get(this.baseURL + 'all/') as Observable<Country[]>;
  }

  getCountryByName(name: string): Observable<Country[]> {
    return this.http.get(this.baseURL + 'name/' + name) as Observable<Country[]>;
  }
}
