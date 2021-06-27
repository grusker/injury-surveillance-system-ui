import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthleteCreateComponent } from './components/athlete/athlete-create/athlete-create.component';
import { AthleteListComponent } from './components/athlete/athlete-list/athlete-list.component';
import { HomeComponent } from './components/home/home.component';
import { PhysioCreateComponent } from './components/physio/physio-create/physio-create.component';
import { PhysioListComponent } from './components/physio/physio-list/physio-list.component';

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
    path: 'athlete-list',
    component: AthleteListComponent
  },
  {
    path: 'athlete-create',
    component: AthleteCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
