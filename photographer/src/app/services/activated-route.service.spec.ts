import { TestBed } from '@angular/core/testing';

import { ActivatedRouteService } from './activated-route.service';

describe('ActivatedRouteService', () => {
  let service: ActivatedRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivatedRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
