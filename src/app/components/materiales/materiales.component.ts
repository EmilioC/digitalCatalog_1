import { Component, OnInit, Input } from '@angular/core';
import { MaterialService } from '../../services/material.service';
import { Material } from '../../models/material.model';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.scss']
})
export class MaterialesComponent implements OnInit {

  //myMateriales since materialesSevice
  // myMateriales : any[] =[];
  //
  materiales : Material []=[];
  materialesEncontrados: number= 0;


  constructor(
    private materialService: MaterialService,
  ) { }

  ngOnInit(): void {
    // this.myMateriales = this.materialService.getMaterial();
    this.materiales = this.materialService.getMateriales();
    console.log(this.materiales);
    this. materialesEncontrados = this.materiales.length;
 
 ;
  }

}
