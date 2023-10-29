import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '89970869gbjvgdfhgjhg',
    loadComponent: () => import('./pages/owner/owner.page').then( m => m.OwnerPage)
  },
];
