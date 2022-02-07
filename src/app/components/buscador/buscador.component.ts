import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialService } from '../../services/material.service';
import { Material } from '../../models/material.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  materiales: Material []=[];
  materialesEncontrados: number= 0;

  constructor(
    private activateRoute: ActivatedRoute,
    private _materialService: MaterialService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( params =>{
      this.materiales = this._materialService.buscarMateriales(params['termino']);
      this.materialesEncontrados = this._materialService.getMaterialesEncontrados();
    })
  }
  verMaterial(idx: number){
    this.router.navigate(['/material',idx]

    )}
}

