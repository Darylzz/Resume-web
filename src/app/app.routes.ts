import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about-me/about-me.module').then((m) => m.AboutMeModule),
  },
  {
    path: 'contact-me',
    loadChildren: () =>
      import('./contact-me/contact-me.module').then((m) => m.ContactMeModule),
  },
  {
    pathMatch: 'full',
    redirectTo: 'home',
    path: '',
  },
];
