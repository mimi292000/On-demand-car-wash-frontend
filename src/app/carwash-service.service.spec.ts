import { TestBed } from '@angular/core/testing';

import { CarwashServiceService } from './carwash-service.service';

describe('CarwashServiceService', () => {
  let service: CarwashServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarwashServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
