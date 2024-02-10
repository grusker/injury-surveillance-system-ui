import { NgModule } from '@angular/core';

import { TeamRoutingModule } from './team-routing.module';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamListComponent } from './team-list/team-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    TeamCreateComponent,
    TeamListComponent,
  ],
  imports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
