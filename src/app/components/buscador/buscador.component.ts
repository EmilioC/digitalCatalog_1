import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialService } from '../../services/material.service';
import { Material } from '../../models/material.model';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  materiales: Material []=[];

  constructor(
    private activateRoute: ActivatedRoute,
    private _materialService: MaterialService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( params =>{
      this.materiales = this._materialService.buscarMateriales(params['termino']);
    })
  }

}
