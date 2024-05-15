import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PacienteModule } from './paciente/paciente.module';
import { PacienteService } from './paciente/paciente.service';
import { PacienteDetailComponent } from './paciente/paciente-detail/paciente-detail.component';
import { PacienteListComponent } from './paciente/paciente-list/paciente-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteDetailComponent,
    PacienteListComponent
  ],
  imports: [
    BrowserModule,
    PacienteModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }