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

  buscarRepetidos( codigoNuevo : string , array : Material [] ){
    for( let i = 0; i < array.length; i++){
      let material = array[i];
      let codigoArray = material.Codigo
      if( codigoNuevo == codigoArray){
        console.log("--METODO---BUSCAR REPETIDOS---> TRUE");
        return true
      }else{
        console.log("--METODO---BUSCAR REPETIDOS---> FALSE");
        return false
      }
    }      
  }

  removeDuplicates(originalArray : any, codigo :string) {
    var newArray = [];
    let lookupObject :any = {};

    for(var i in originalArray) {
      lookupObject[originalArray[i][codigo]] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
     return newArray;
}

  buscarMateriales (termino:string ){

    console.log("---NUEVA BÚSQUEDA---");
    let materialesArr: Material[]=[];
    termino = termino.toLowerCase();

    for( let i = 0; i <this.materiales.length; i++){

      let material = this.materiales[i];

    // Search in material.Nombre
      let nombre = String (material.Nombre).toLocaleLowerCase();
      if( nombre.indexOf( termino ) >= 0 ){ 
          materialesArr.push( material ) 
        }else{
          let Categoria_Gas = String (material.Categoria_Gas).toLocaleLowerCase();
          if( Categoria_Gas.indexOf( termino ) >= 0 ){ 
            materialesArr.push( material ) 
          }else{
            let Categorias = String (material.Categorias).toLocaleLowerCase();
            if( Categorias.indexOf( termino ) >= 0 ){ 
              materialesArr.push( material ) 
            }else{
              let Sub_Categoria = String (material.Sub_Categoria).toLocaleLowerCase();
              if( Sub_Categoria.indexOf( termino ) >= 0 ){ 
                materialesArr.push( material ) 
              }else{
                let Sub_Categoria_2 = String (material.Sub_Categoria_2).toLocaleLowerCase();
                if( Sub_Categoria_2.indexOf( termino ) >= 0 ){ 
                  materialesArr.push( material ) 
                }else{
                  let Forma_suministro = String (material.Forma_suministro).toLocaleLowerCase();
                  if( Forma_suministro.indexOf( termino ) >= 0 ){ 
                    materialesArr.push( material ) 
                  }else{
                    let Etapa = String (material.Etapa).toLocaleLowerCase();
                    if( Etapa.indexOf( termino ) >= 0 ){ 
                      materialesArr.push( material ) 
                    }else{
                      let Tipo_Gas = String (material.Tipo_Gas).toLocaleLowerCase();
                      if( Tipo_Gas.indexOf( termino ) >= 0 ){ 
                        materialesArr.push( material ) 
                      }else{
                        let Modelo = String (material.Modelo).toLocaleLowerCase();
                        if( Modelo.indexOf( termino ) >= 0 ){ 
                          materialesArr.push( material ) 
                        }else{
                          let Nombre = String (material.Nombre).toLocaleLowerCase();
                          if( Nombre.indexOf( termino ) >= 0 ){ 
                            materialesArr.push( material ) 
                          }else{
                            let Texto_Codigo = String (material.Texto_Codigo).toLocaleLowerCase();
                            if( Texto_Codigo.indexOf( termino ) >= 0 ){ 
                              materialesArr.push( material ) 
                            }else{
                              let Codigo = String (material.Codigo).toLocaleLowerCase();
                              if( Codigo.indexOf( termino ) >= 0 ){ 
                                materialesArr.push( material ) 
                              }else{
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } 
              } 
        //END FOR
            }

      this.materialesEncontrados = materialesArr.length;
      return materialesArr;
  }


  getMaterialesEncontrados(){
    return this.materialesEncontrados;
  }
}

// Método que funcionaba parcialmente

// buscarMateriales (termino:string ){

//   console.log("---NUEVA BÚSQUEDA---");
//   let materialesArr: Material[]=[];
//   termino = termino.toLowerCase();

//   for( let i = 0; i <this.materiales.length; i++){

//     let material = this.materiales[i];
//   // Search in material.Gas
//     // let materialGas = String (material.Gas);
//     // let materialGasLowerCase = materialGas.toLowerCase();
//     // if( materialGasLowerCase.indexOf( termino ) >= 0 ){ 
//     //   materialesArr.push( material )
//     // } 
//   // Search in material.Nombre
//     let Nombre = String (material.Nombre);
//     let NombreCodigo = String(material.Codigo);
//     let nNombre = Nombre.toLowerCase(); 
//     if( nNombre.indexOf( termino ) >= 0 ){ 
//       if(this.buscarRepetidos(NombreCodigo ,materialesArr)){
//         console.log("Código "+ material.Codigo + "--EXISTE")
//       } else{
//         console.log("--AÑADIDO ARRAY materialesArr --");
//         materialesArr.push( material ) 
//       }
//       }
//   // Search in material.Codigo
//     let codigo = String (material.Codigo);
//     let nCodigo = codigo.toLowerCase(); 
//     if( nCodigo.indexOf( termino ) >= 0 ){ 
//       if(this.buscarRepetidos(codigo ,materialesArr)){
//         console.log("Código "+ material.Codigo + "--EXISTE")
//       } else{
//         console.log("--AÑADIDO ARRAY materialesArr --");
//         materialesArr.push( material ) 
//       }
//       }