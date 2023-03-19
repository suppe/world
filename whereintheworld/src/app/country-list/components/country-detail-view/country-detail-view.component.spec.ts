import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailViewComponent } from './country-detail-view.component';
import { CountryService } from '../../services/country.service';
import { CountryModel } from '../../models/country.model';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FifaCodeToNamePipe } from '../../pipes/fifa-code-to-name.pipe';

describe('CountryDetailViewComponent', () => {
  let component: CountryDetailViewComponent;
  let fixture: ComponentFixture<CountryDetailViewComponent>;

  beforeEach(async () => {
    const countryServiceSpy = jasmine.createSpyObj<CountryService>([
      'getCountriesByName',
      'getCountries',
    ]);

    const COUNTRIES: CountryModel[] = [
      {
        borders: ['AUT', 'BEL'],
        capital: ['Berlin'],
        currencies: [],
        fifa: 'GER',
        flags: undefined,
        languages: [],
        name: { nativeName: null, common: 'Germany', official: 'Germany' },
        population: 0,
        region: '',
        subregion: '',
        tld: ['.de'],
      },
      {
        borders: [],
        capital: [],
        currencies: [],
        fifa: '',
        flags: undefined,
        languages: [],
        name: { nativeName: null, common: 'China', official: 'China' },
        population: 0,
        region: '',
        subregion: '',
        tld: [],
      },
    ];

    countryServiceSpy.getCountriesByName.and.returnValue(of(COUNTRIES));
    countryServiceSpy.getCountries.and.returnValue(of(COUNTRIES));

    await TestBed.configureTestingModule({
      declarations: [CountryDetailViewComponent, FifaCodeToNamePipe],
      providers: [
        { provide: CountryService, useValue: countryServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'Germany' }),
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have country', () => {
    expect(component.selectedCountry).not.toBeNull();
  });

  it('should have country', () => {
    expect(component.selectedCountry.name.common).toEqual('Germany');
  });

  it('should have countries', () => {
    expect(component.countries).not.toBeNull();
  });
});
