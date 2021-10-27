import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';
import { UniversidadesService } from 'src/app/services/universidades.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public nuPaises: number = 0;
  public nuUniversidades: number = 0;

  constructor(
    private _paisService: PaisService,
    private _universidadesService: UniversidadesService
  ) { }

  ngOnInit(): void {
    this._paisService.listar().subscribe(resp => {
      this.nuPaises = Object.values(resp).length;
    }, err => {
      console.error('Ocurreu um erro');
    });

    this._universidadesService.listar().subscribe(resp => {
      this.nuUniversidades = Object.values(resp).length;
    }, err => {
      console.error('Ocurreu um erro');
    });
  }
}

