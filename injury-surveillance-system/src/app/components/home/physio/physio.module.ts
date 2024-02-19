import { NgModule } from '@angular/core';

import { PhysioRoutingModule } from './physio-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PhysioListComponent } from './physio-list/physio-list.component';
import { PhysioCreateComponent } from './physio-create/physio-create.component';
import { PhysioEditComponent } from './physio-edit/physio-edit.component';
import { PhysioService } from 'src/app/services/physio/physio.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
import { PhysioComponent } from './physio/physio.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PhysioListComponent,
    PhysioCreateComponent,
    PhysioEditComponent,
    PhysioComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    PhysioRoutingModule
  ],
  providers: [
    PhysioService,
  ],
})
export class PhysioModule { }
