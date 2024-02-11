import { TestBed } from '@angular/core/testing';

import { ClienttestService } from './clienttest.service';

describe('ClienttestService', () => {
  let service: ClienttestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienttestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
