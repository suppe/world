import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListViewComponent } from './country-list-view.component';

import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CountryModel } from '../../models/country.model';

describe('CountryListViewComponent', () => {
  let component: CountryListViewComponent;
  let fixture: ComponentFixture<CountryListViewComponent>;

  beforeEach(async () => {
    const countryServiceSpy = jasmine.createSpyObj<CountryService>([
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
        name: undefined,
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
        name: undefined,
        population: 0,
        region: '',
        subregion: '',
        tld: [],
      },
    ];
    countryServiceSpy.getCountries.and.returnValue(of(COUNTRIES));

    await TestBed.configureTestingModule({
      declarations: [CountryListViewComponent],
      providers: [{ provide: CountryService, useValue: countryServiceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have minimum 1 country', () => {
    component.countries$.subscribe((countries) =>
      expect(countries.length).toBeGreaterThanOrEqual(1)
    );
  });

  it('should have 2 countries', () => {
    component.countries$.subscribe((countries) =>
      expect(countries.length).toBe(2)
    );
  });
});
