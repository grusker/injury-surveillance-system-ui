import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AthleteListComponent } from './athlete/athlete-list/athlete-list.component';
import { PhysioListComponent } from './physio/physio-list/physio-list.component';
import { TeamListComponent } from './team/team-list/team-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'athletes',
        component: AthleteListComponent,
      },
      {
        path: 'physios',
        component: PhysioListComponent,
      },
      {
        path: 'teams',
        component: TeamListComponent,
      }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
