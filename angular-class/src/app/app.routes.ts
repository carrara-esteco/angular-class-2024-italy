import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { AsideComponent } from './aside/aside.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add',
    children: [
      {
        path: '',
        component: AddComponent
      },
      {
        path: 'aside',
        component: AsideComponent,
        outlet: 'aside'
      },
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
