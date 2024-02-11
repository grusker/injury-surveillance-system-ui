import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthleteListComponent } from './athlete-list/athlete-list.component';
import { AthleteCreateComponent } from './athlete-create/athlete-create.component';
import { AthleteEditComponent } from './athlete-edit/athlete-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AthleteListComponent,
    children: [
      {
        path: 'athlete-create',
        component: AthleteCreateComponent
      },
      {
        path: 'athlete/:athleteId/details',
        component: AthleteEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthleteRoutingModule { }
