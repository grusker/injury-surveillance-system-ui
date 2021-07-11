import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PhysioListComponent } from './components/physio/physio-list/physio-list.component';
import { PhysioCreateComponent } from './components/physio/physio-create/physio-create.component';
import { PhysioEditComponent } from './components/physio/physio-edit/physio-edit.component';
import { AthleteService } from './services/athlete/athlete.service';
import { PhysioService } from './services/physio/physio.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderInterceptor } from './interceptors/HeaderInterceptor';
import { AthleteCreateComponent } from './components/athlete/athlete-create/athlete-create.component';
import { AthleteListComponent } from './components/athlete/athlete-list/athlete-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhysioListComponent,
    PhysioCreateComponent,
    PhysioEditComponent,
    AthleteListComponent,
    AthleteCreateComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AthleteService,
    PhysioService,
    {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
