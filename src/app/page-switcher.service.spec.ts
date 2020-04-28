import { TestBed } from '@angular/core/testing';

import { PageSwitcherService } from './page-switcher.service';

describe('PageSwitcherService', () => {
  let service: PageSwitcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageSwitcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
