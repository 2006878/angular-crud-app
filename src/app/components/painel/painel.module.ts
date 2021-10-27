import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';
import { PaisService } from 'src/app/services/pais.service';
import { UniversidadesService } from 'src/app/services/universidades.service';

@NgModule({
  declarations: [
    PainelComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PaisService,
    UniversidadesService
  ]
})
export class PainelModule { }
