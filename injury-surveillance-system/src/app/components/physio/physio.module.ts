import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhysioRoutingModule } from './physio-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PhysioListComponent } from './physio-list/physio-list.component';
import { PhysioCreateComponent } from './physio-create/physio-create.component';
import { PhysioEditComponent } from './physio-edit/physio-edit.component';
import { PhysioService } from 'src/app/services/physio/physio.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    PhysioListComponent,
    PhysioCreateComponent,
    PhysioEditComponent
  ],
  imports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    PhysioRoutingModule
  ],
  providers: [
    PhysioService,
  ],
})
export class PhysioModule { }
