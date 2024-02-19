import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhysioListComponent } from './physio-list/physio-list.component';
import { PhysioCreateComponent } from './physio-create/physio-create.component';
import { PhysioEditComponent } from './physio-edit/physio-edit.component';
import { PhysioComponent } from './physio/physio.component';

const routes: Routes = [
  {
    path: '',
    component: PhysioComponent,
    children: [
      {
        path: '',
        component: PhysioListComponent
      },
      {
        path: 'create',
        component: PhysioCreateComponent
      },
      {
        path: 'details/:physioId',
        component: PhysioEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysioRoutingModule {}
