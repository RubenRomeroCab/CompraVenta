import { TestBed } from '@angular/core/testing';

import { PaleService } from './pale.service';

describe('PaleService', () => {
  let service: PaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
