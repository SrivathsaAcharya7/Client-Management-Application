import { CanActivateFn, Router } from '@angular/router';
import { ClienttestService } from './clienttest.service';
import { inject } from '@angular/core';

const clienserv = new ClienttestService();
export const clientguardGuard: CanActivateFn = (route, state) => {
  let uchk = clienserv.isLoggedIn();
  const router = inject(Router);

  let userchk = false;
  if (uchk == true) userchk = true;
  else {
    alert('first login');
    router.navigate(['/login']);
    userchk = false;
  }
  return userchk;
};
