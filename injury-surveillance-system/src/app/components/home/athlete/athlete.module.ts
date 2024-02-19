import { NgModule } from '@angular/core';

import { AthleteRoutingModule } from './athlete-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AthleteListComponent } from './athlete-list/athlete-list.component';
import { AthleteCreateComponent } from './athlete-create/athlete-create.component';
import { AthleteEditComponent } from './athlete-edit/athlete-edit.component';
import { AthleteService } from 'src/app/services/athlete/athlete.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
import { AthleteComponent } from './athlete/athlete.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AthleteListComponent,
    AthleteCreateComponent,
    AthleteEditComponent,
    AthleteComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    AthleteRoutingModule
  ],
  providers: [
    AthleteService,
  ]
})
export class AthleteModule { }
