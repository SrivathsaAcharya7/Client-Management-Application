import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ClienttestService } from './clienttest.service';

const clienserv = new ClienttestService();
export const hrguardGuard: CanActivateFn = (route, state) => {
  let uchk = clienserv.isAdminLoggedIn();
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
