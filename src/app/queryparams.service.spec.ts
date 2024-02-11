import { TestBed } from '@angular/core/testing';

import { QueryparamsService } from './queryparams.service';

describe('QueryparamsService', () => {
  let service: QueryparamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryparamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
