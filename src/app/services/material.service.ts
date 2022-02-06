import { Injectable } from '@angular/core';
import { Material } from '../models/material.model';
import { DATA } from '../../assets/data/data06022022';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private materiales : Material[]=[];

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

      let materialGas = String (material.Gas);
      
      let nombre = materialGas.toLowerCase();

      if( nombre.indexOf( termino ) >= 0 ){
        
        materialesArr.push( material )
      }
    }
    console.log("Buscar Heroes: ");
    console.log(materialesArr);
    return materialesArr;
  }
}

