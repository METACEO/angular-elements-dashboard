import {Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
