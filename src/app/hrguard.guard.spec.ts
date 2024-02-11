import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hrguardGuard } from './hrguard.guard';

describe('hrguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hrguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
