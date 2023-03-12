import { Currency } from './Currency';

export interface Country {
  name: CountryName;
  population: number;
  flags: CountryFlags;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: Currency[];
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
