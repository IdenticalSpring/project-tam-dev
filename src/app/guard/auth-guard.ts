// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AuthService } from './auth.service';
// @Injectable({
//   providedIn: 'root'
// })
// export class AdminGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {
//     const userRole = this.authService.getUserRole();
//     if (userRole === 'admin') {
//       return true;
//     } else {
//       this.router.navigate(['/unauthorized']);
//       return false;
//     }
//   }
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class OwnerGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {
//     const userRole = this.authService.getUserRole();
//     if (userRole === 'owner') {
//       return true;
//     } else {
//       this.router.navigate(['/unauthorized']);
//       return false;
//     }
//   }
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class StaffGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {
//     const userRole = this.authService.getUserRole();
//     if (userRole === 'staff') {
//       return true;
//     } else {
//       this.router.navigate(['/unauthorized']);
//       return false;
//     }
//   }
// }
