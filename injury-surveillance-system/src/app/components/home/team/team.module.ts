import { NgModule } from '@angular/core';

import { TeamRoutingModule } from './team-routing.module';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamListComponent } from './team-list/team-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { TeamComponent } from './team/team.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    TeamCreateComponent,
    TeamListComponent,
    TeamComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
