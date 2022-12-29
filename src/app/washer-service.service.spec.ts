import { TestBed } from '@angular/core/testing';

import { WasherServiceService } from './washer-service.service';

describe('WasherServiceService', () => {
  let service: WasherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WasherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
