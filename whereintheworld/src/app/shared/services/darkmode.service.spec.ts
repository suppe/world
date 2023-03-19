import { TestBed } from '@angular/core/testing';

import { DarkmodeService } from './darkmode.service';

describe('DarkmodeService', () => {
  let service: DarkmodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkmodeService);
  });

  it('should toogle dark mode boolean from false to true', () => {
    service.toggleDarkTheme();
    service.isDarkTheme.subscribe((darkTheme) => expect(darkTheme).toBe(true));
  });
});
