import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhysioListComponent } from './physio-list/physio-list.component';
import { PhysioCreateComponent } from './physio-create/physio-create.component';
import { PhysioEditComponent } from './physio-edit/physio-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PhysioListComponent,
    children: [
      {
        path: 'physio-create',
        component: PhysioCreateComponent
      },
      {
        path: 'physio/:physioId/details',
        component: PhysioEditComponent
      },
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysioRoutingModule { }
