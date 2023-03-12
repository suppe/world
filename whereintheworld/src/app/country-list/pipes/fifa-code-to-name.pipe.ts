import { Pipe, PipeTransform } from '@angular/core';
import { CountryModel } from '../models/country.model';

@Pipe({ name: 'fifacodetoname' })
export class FifaCodeToNamePipe implements PipeTransform {
  transform(fifacode: string, allCountries: CountryModel[]): string {
    if (!allCountries) {
      return null;
    }
    return (
      allCountries.find((countries) => countries.fifa === fifacode)?.name
        .common || null
    );
  }
}
