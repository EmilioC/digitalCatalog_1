import { Injectable } from '@angular/core';
import { Material } from '../models/material.model';
import { DATA } from '../../assets/data/data06022022';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private materiales : Material[]=[];
  materialesEncontrados: number =0;

  constructor(

  ) { this.materiales = DATA;}

  ngOnInit(): void {

    
  }

  getMateriales(){
    return this.materiales;
    // return this.myMaterial;
  }

  getMaterial( idx: number ){
    return this.materiales[idx]
  }

  buscarMateriales (termino:string ){
    console.log("--BUSCAR MATERIALES TERMINO --");
    console.log(termino);
    let materialesArr: Material[]=[];
    termino = termino.toLowerCase();

    for( let i = 0; i <this.materiales.length; i++){

      let material = this.materiales[i];
    // Search in material.Gas
      let materialGas = String (material.Gas);
      let nombre = materialGas.toLowerCase();

      if( nombre.indexOf( termino ) >= 0 ){  
        materialesArr.push( material )
      } else {
        let negocio = String (material.Negocio);
        let nombre = negocio.toLowerCase();
  
        if( nombre.indexOf( termino ) >= 0 ){  
          materialesArr.push( material )
      }else {
        let categoria_Gas = String (material.Categoria_Gas);
        let nombre = categoria_Gas.toLowerCase();
  
        if( nombre.indexOf( termino ) >= 0 ){  
          materialesArr.push( material )
      }
    }
  }
}  
    console.log("Buscar Heroes: ");
    console.log(materialesArr);
    this.materialesEncontrados = materialesArr.length;
    return materialesArr;
  }

  getMaterialesEncontrados(){
    return this.materialesEncontrados;
  }
}

