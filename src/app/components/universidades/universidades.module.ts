import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UniversidadesComponent } from './universidades.component';
import { UniversidadesRoutingModule } from './universidades-routing.module';
import { PaisService } from 'src/app/services/pais.service';
import { UniversidadesService } from 'src/app/services/universidades.service';

@NgModule({
  declarations: [
    UniversidadesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UniversidadesRoutingModule,
  ],
  providers: [
    PaisService,
    UniversidadesService
  ]
})
export class UniversidadesModule { }

