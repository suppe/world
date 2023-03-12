import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/Country';

@Pipe({ name: 'fifacodetoname' })
export class FifaCodeToNamePipe implements PipeTransform {
  transform(fifacode: string, allCountries: Country[]): string {
    if (!allCountries) {
      return null;
    }
    return (
      allCountries.find((countries) => countries.fifa === fifacode)?.name
        .common || null
    );
  }
}
