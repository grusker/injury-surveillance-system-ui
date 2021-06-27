import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
