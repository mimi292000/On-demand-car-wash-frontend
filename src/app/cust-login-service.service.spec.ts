import { TestBed } from '@angular/core/testing';

import { CustLoginServiceService } from './cust-login-service.service';

describe('CustLoginServiceService', () => {
  let service: CustLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
