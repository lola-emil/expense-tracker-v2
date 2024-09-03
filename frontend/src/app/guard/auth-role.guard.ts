import { CanActivateFn } from '@angular/router';

export const authRoleGuard: CanActivateFn = (route, state) => {
  return true;
};
