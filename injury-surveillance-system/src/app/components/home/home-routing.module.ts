import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'athletes',
        loadChildren: () => import('./athlete/athlete.module').then(m => m.AthleteModule),
      },
      {
        path: 'physios',
        loadChildren: () => import('./physio/physio.module').then(m => m.PhysioModule),
      },
      {
        path: 'teams',
        loadChildren: () => import('./team/team.module').then(m => m.TeamModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
