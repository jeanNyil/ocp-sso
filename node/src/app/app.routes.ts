import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { ChartsComponent } from './charts/charts.component';
import { FormComponent } from './form/form.component';
import { StatusComponent } from './status/status.component';
import { ProfileComponent } from './profile/profile.component';

export const AppRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: 'status',
        component: StatusComponent,
        data: {
          breadcrumb: 'Status'
        }
      },
      {
        path: 'table',
        component: TableComponent,
        data: {
          breadcrumb: 'Table'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          breadcrumb: 'Profile'
        }
      },
      {
        path: 'charts',
        component: ChartsComponent,
        data: {
          breadcrumb: 'Charts'
        }
      },
      {
        path: 'form',
        component: FormComponent,
        data: {
          breadcrumb: 'Form'
        }
      }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
