import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PhysioModule } from './physio/physio.module';
import { AthleteModule } from './athlete/athlete.module';
import { TeamModule } from './team/team.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    PhysioModule,
    AthleteModule,
    TeamModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
