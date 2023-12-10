import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthleteCreateComponent } from './components/athlete/athlete-create/athlete-create.component';
import { AthleteListComponent } from './components/athlete/athlete-list/athlete-list.component';
import { HomeComponent } from './components/home/home.component';
import { PhysioCreateComponent } from './components/physio/physio-create/physio-create.component';
import { PhysioListComponent } from './components/physio/physio-list/physio-list.component';
import { PhysioEditComponent } from './components/physio/physio-edit/physio-edit.component';
import { AthleteEditComponent } from './components/athlete/athlete-edit/athlete-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'physio-list',
    component: PhysioListComponent
  },
  {
    path: 'physio-create',
    component: PhysioCreateComponent
  },
  {
    path: 'physio/:physioId/details',
    component: PhysioEditComponent
  },
  {
    path: 'athlete-list',
    component: AthleteListComponent
  },
  {
    path: 'athlete-create',
    component: AthleteCreateComponent
  },
  {
    path: 'athlete/:id/details',
    component: AthleteEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
