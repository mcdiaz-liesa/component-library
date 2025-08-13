import { TestBed } from '@angular/core/testing';

import { LiesaLibService } from './liesa-lib.service';

describe('LiesaLibService', () => {
  let service: LiesaLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiesaLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
