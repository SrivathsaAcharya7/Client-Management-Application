import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { clientguardGuard } from './clientguard.guard';

describe('clientguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => clientguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
