import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StatusComponent} from './status/status.component';
import {CarsComponent} from './cars/cars.component';

export const AppRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumbs: true,
      text: 'Home'
    },
    children: [
      {
        path: 'status',
        component: StatusComponent,
        data: {
          breadcrumbs: true,
          text: 'Status'
        }
      },
      {
        path: 'cars',
        component: CarsComponent,
        data: {
          breadcrumbs: true,
          text: 'Cars'
        }
      }
    ]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];
