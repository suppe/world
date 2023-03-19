import { FifaCodeToNamePipe } from './fifa-code-to-name.pipe';
import { CountryModel } from '../models/country.model';

describe('FifaCodeToNamePipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new FifaCodeToNamePipe();
  const COUNTRY: CountryModel[] = [
    {
      borders: [],
      capital: [],
      currencies: [],
      fifa: 'GER',
      flags: undefined,
      languages: [],
      name: { nativeName: null, common: 'Germany', official: 'Germany' },
      population: 0,
      region: '',
      subregion: '',
      tld: [],
    },
    {
      borders: [],
      capital: [],
      currencies: [],
      fifa: 'TEST',
      flags: undefined,
      languages: [],
      name: { nativeName: null, common: 'Test', official: 'Test' },
      population: 0,
      region: '',
      subregion: '',
      tld: [],
    },
  ];

  it('transforms fifa code: "GER" to name: "Germany"', () => {
    expect(pipe.transform('GER', COUNTRY)).toBe('Germany');
  });
});
