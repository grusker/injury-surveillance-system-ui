import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PhysioListComponent } from './components/physio/physio-list/physio-list.component';
import { PhysioCreateComponent } from './components/physio/physio-create/physio-create.component';
import { PhysioEditComponent } from './components/physio/physio-edit/physio-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhysioListComponent,
    PhysioCreateComponent,
    PhysioEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
