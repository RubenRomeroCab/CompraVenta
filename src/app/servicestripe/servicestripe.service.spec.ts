import { TestBed } from '@angular/core/testing';

import { ServicestripeService } from './servicestripe.service';

describe('ServicestripeService', () => {
  let service: ServicestripeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicestripeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
