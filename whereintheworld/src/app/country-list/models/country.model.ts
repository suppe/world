import { CurrencyModel } from './currency.model';

export interface CountryModel {
  name: CountryName;
  population: number;
  flags: CountryFlags;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: CurrencyModel[];
  languages: string[];
  borders: string[];
  fifa: string;
}

interface CountryName {
  common: string;
  official: string;
  nativeName: { [name: string]: { official: string; common: string } };
}

interface CountryFlags {
  alt: string;
  png: string;
  svg: string;
}
