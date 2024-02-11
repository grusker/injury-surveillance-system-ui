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
        path: 'create',
        component: AthleteCreateComponent
      },
      {
        path: ':athleteId',
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
