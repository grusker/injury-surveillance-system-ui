import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthleteListComponent } from './athlete-list/athlete-list.component';
import { AthleteCreateComponent } from './athlete-create/athlete-create.component';
import { AthleteEditComponent } from './athlete-edit/athlete-edit.component';
import { AthleteComponent } from './athlete/athlete.component';

const routes: Routes = [
  {
    path: '',
    component: AthleteComponent,
    children: [
      {
        path: '',
        component: AthleteListComponent
      },
      {
        path: 'create',
        component: AthleteCreateComponent
      },
      {
        path: 'details/:athleteId',
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
