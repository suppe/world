import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailViewComponent } from './country-detail-view.component';

describe('CountryDetailViewComponent', () => {
  let component: CountryDetailViewComponent;
  let fixture: ComponentFixture<CountryDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
