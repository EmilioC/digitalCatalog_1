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
                              }else{let Texto_Codigo_2 = String (material.Texto_Codigo_2).toLocaleLowerCase();
                                if( Texto_Codigo_2.indexOf( termino ) >= 0 ){ 
                                  materialesArr.push( material ) 
                                }else{let Codigo_Purga = String (material.Codigo_Purga).toLocaleLowerCase();
                                  if( Codigo_Purga.indexOf( termino ) >= 0 ){ 
                                    materialesArr.push( material ) 
                                  }else{let Codigo = String (material.Codigo).toLocaleLowerCase();
                                    if( Codigo.indexOf( termino ) >= 0 ){ 
                                      materialesArr.push( material ) 
                                    }else{let Texto_Codigo_3 = String (material.Texto_Codigo_3).toLocaleLowerCase();
                                      if( Texto_Codigo_3.indexOf( termino ) >= 0 ){ 
                                        materialesArr.push( material ) 
                                      }else{let Codigo_3 = String (material.Codigo_3).toLocaleLowerCase();
                                        if( Codigo_3.indexOf( termino ) >= 0 ){ 
                                          materialesArr.push( material ) 
                                        }else{let Venta_Directa = String (material.Venta_Directa).toLocaleLowerCase();
                                          if( Venta_Directa.indexOf( termino ) >= 0 ){ 
                                            materialesArr.push( material ) 
                                          }else{let Gas = String (material.Gas).toLocaleLowerCase();
                                            if( Gas.indexOf( termino ) >= 0 ){ 
                                              materialesArr.push( material ) 
                                            }else{let Texto_Presion_1 = String (material.Texto_Presion_1).toLocaleLowerCase();
                                              if( Texto_Presion_1.indexOf( termino ) >= 0 ){ 
                                                materialesArr.push( material ) 
                                              }else{let Presion_1 = String (material.Presion_1).toLocaleLowerCase();
                                                if( Presion_1.indexOf( termino ) >= 0 ){ 
                                                  materialesArr.push( material ) 
                                                }else{let Unidades_Presion_1 = String (material.Unidades_Presion_1).toLocaleLowerCase();
                                                  if( Unidades_Presion_1.indexOf( termino ) >= 0 ){ 
                                                    materialesArr.push( material ) 
                                                  }else{let Texto_Presion_2 = String (material.Texto_Presion_2).toLocaleLowerCase();
                                                    if( Texto_Presion_2.indexOf( termino ) >= 0 ){ 
                                                      materialesArr.push( material ) 
                                                    }else{let Presion_2 = String (material.Presion_2).toLocaleLowerCase();
                                                      if( Presion_2.indexOf( termino ) >= 0 ){ 
                                                        materialesArr.push( material ) 
                                                      }else{let Unidades_Presion_2 = String (material.Unidades_Presion_2).toLocaleLowerCase();
                                                        if( Unidades_Presion_2.indexOf( termino ) >= 0 ){ 
                                                          materialesArr.push( material ) 
                                                        }else{let Texto_Caudal_N = String (material.Texto_Caudal_N).toLocaleLowerCase();
                                                          if( Texto_Caudal_N.indexOf( termino ) >= 0 ){ 
                                                            materialesArr.push( material ) 
                                                          }else{let Caudal_N2 = String (material.Caudal_N2).toLocaleLowerCase();
                                                            if( Caudal_N2.indexOf( termino ) >= 0 ){ 
                                                              materialesArr.push( material ) 
                                                            }else{let Unidades_Caudal_N2 = String (material.Unidades_Caudal_N2).toLocaleLowerCase();
                                                              if( Unidades_Caudal_N2.indexOf( termino ) >= 0 ){ 
                                                                materialesArr.push( material ) 
                                                              }else{let Material_Cuerpo = String (material.Material_Cuerpo).toLocaleLowerCase();
                                                                if( Material_Cuerpo.indexOf( termino ) >= 0 ){ 
                                                                  materialesArr.push( material ) 
                                                                }else{let Regulador_Tipo = String (material.Regulador_Tipo).toLocaleLowerCase();
                                                                  if( Regulador_Tipo.indexOf( termino ) >= 0 ){ 
                                                                    materialesArr.push( material ) 
                                                                  }else{let Material_Cierre = String (material.Material_Cierre).toLocaleLowerCase();
                                                                    if( Material_Cierre.indexOf( termino ) >= 0 ){ 
                                                                      materialesArr.push( material ) 
                                                                    }else{let Material_Junta = String (material.Material_Junta).toLocaleLowerCase();
                                                                      if( Material_Junta.indexOf( termino ) >= 0 ){ 
                                                                        materialesArr.push( material ) 
                                                                      }else{let Material_Asiento = String (material.Material_Asiento).toLocaleLowerCase();
                                                                        if( Material_Asiento.indexOf( termino ) >= 0 ){ 
                                                                          materialesArr.push( material ) 
                                                                        }else{let Material_Fuelle = String (material.Material_Fuelle).toLocaleLowerCase();
                                                                          if( Material_Fuelle.indexOf( termino ) >= 0 ){ 
                                                                            materialesArr.push( material ) 
                                                                          }else{let MateriaL_Eje = String (material.MateriaL_Eje).toLocaleLowerCase();
                                                                            if( MateriaL_Eje.indexOf( termino ) >= 0 ){ 
                                                                              materialesArr.push( material ) 
                                                                            }else{let Material_Husillo = String (material.Material_Husillo).toLocaleLowerCase();
                                                                              if( Material_Husillo.indexOf( termino ) >= 0 ){ 
                                                                                materialesArr.push( material ) 
                                                                              }else{let Material_Bola = String (material.Material_Bola).toLocaleLowerCase();
                                                                                if( Material_Bola.indexOf( termino ) >= 0 ){ 
                                                                                  materialesArr.push( material ) 
                                                                                }else{let Material_Tubo = String (material.Material_Tubo).toLocaleLowerCase();
                                                                                  if( Material_Tubo.indexOf( termino ) >= 0 ){ 
                                                                                    materialesArr.push( material ) 
                                                                                  }else{let Orificio = String (material.Orificio).toLocaleLowerCase();
                                                                                    if( Orificio.indexOf( termino ) >= 0 ){ 
                                                                                      materialesArr.push( material ) 
                                                                                    }else{let Unidades_Orificio = String (material.Unidades_Orificio).toLocaleLowerCase();
                                                                                      if( Unidades_Orificio.indexOf( termino ) >= 0 ){ 
                                                                                        materialesArr.push( material ) 
                                                                                      }else{let Conexion_Entrada = String (material.Conexion_Entrada).toLocaleLowerCase();
                                                                                        if( Conexion_Entrada.indexOf( termino ) >= 0 ){ 
                                                                                          materialesArr.push( material ) 
                                                                                        }else{let Conexion_Salida = String (material.Conexion_Salida).toLocaleLowerCase();
                                                                                          if( Conexion_Salida.indexOf( termino ) >= 0 ){ 
                                                                                            materialesArr.push( material ) 
                                                                                          }else{let Tipo_conexion_entrada_Botella = String (material.Tipo_conexion_entrada_Botella).toLocaleLowerCase();
                                                                                            if( Tipo_conexion_entrada_Botella.indexOf( termino ) >= 0 ){ 
                                                                                              materialesArr.push( material ) 
                                                                                            }else{let Conexion_valvula = String (material.Conexion_valvula).toLocaleLowerCase();
                                                                                              if( Conexion_valvula.indexOf( termino ) >= 0 ){ 
                                                                                                materialesArr.push( material ) 
                                                                                              }else{let Conexion_rampa = String (material.Conexion_rampa).toLocaleLowerCase();
                                                                                                if( Conexion_rampa.indexOf( termino ) >= 0 ){ 
                                                                                                  materialesArr.push( material ) 
                                                                                                }else{let Dist_entre_tomas = String (material.Dist_entre_tomas).toLocaleLowerCase();
                                                                                                  if( Dist_entre_tomas.indexOf( termino ) >= 0 ){ 
                                                                                                    materialesArr.push( material ) 
                                                                                                  }else{let Unidades_Dist_entre_tomas = String (material.Unidades_Dist_entre_tomas).toLocaleLowerCase();
                                                                                                    if( Unidades_Dist_entre_tomas.indexOf( termino ) >= 0 ){ 
                                                                                                      materialesArr.push( material ) 
                                                                                                    }else{let Dist_entre_soportes = String (material.Dist_entre_soportes).toLocaleLowerCase();
                                                                                                      if( Dist_entre_soportes.indexOf( termino ) >= 0 ){ 
                                                                                                        materialesArr.push( material ) 
                                                                                                      }else{let Unidades_Dist_entre_soportes = String (material.Unidades_Dist_entre_soportes).toLocaleLowerCase();
                                                                                                        if( Unidades_Dist_entre_soportes.indexOf( termino ) >= 0 ){ 
                                                                                                          materialesArr.push( material ) 
                                                                                                        }else{let Material_colector = String (material.Material_colector).toLocaleLowerCase();
                                                                                                          if( Material_colector.indexOf( termino ) >= 0 ){ 
                                                                                                            materialesArr.push( material ) 
                                                                                                          }else{let Diametro_Exterior = String (material.Diametro_Exterior).toLocaleLowerCase();
                                                                                                            if( Diametro_Exterior.indexOf( termino ) >= 0 ){ 
                                                                                                              materialesArr.push( material ) 
                                                                                                            }else{let Unidades_Diametro_Exterior = String (material.Unidades_Diametro_Exterior).toLocaleLowerCase();
                                                                                                              if( Unidades_Diametro_Exterior.indexOf( termino ) >= 0 ){ 
                                                                                                                materialesArr.push( material ) 
                                                                                                              }else{let Conexion_Botella = String (material.Conexion_Botella).toLocaleLowerCase();
                                                                                                                if( Conexion_Botella.indexOf( termino ) >= 0 ){ 
                                                                                                                  materialesArr.push( material ) 
                                                                                                                }else{let Rosca_Espiga = String (material.Rosca_Espiga).toLocaleLowerCase();
                                                                                                                  if( Rosca_Espiga.indexOf( termino ) >= 0 ){ 
                                                                                                                    materialesArr.push( material ) 
                                                                                                                  }else{let Material_Cana = String (material.Material_Cana).toLocaleLowerCase();
                                                                                                                    if( Material_Cana.indexOf( termino ) >= 0 ){ 
                                                                                                                      materialesArr.push( material ) 
                                                                                                                    }else{let Material_Tuerca = String (material.Material_Tuerca).toLocaleLowerCase();
                                                                                                                      if( Material_Tuerca.indexOf( termino ) >= 0 ){ 
                                                                                                                        materialesArr.push( material ) 
                                                                                                                      }else{let Campo_de_ajuste = String (material.Campo_de_ajuste).toLocaleLowerCase();
                                                                                                                        if( Campo_de_ajuste.indexOf( termino ) >= 0 ){ 
                                                                                                                          materialesArr.push( material ) 
                                                                                                                        }else{let Unidades_Campo_de_ajuste = String (material.Unidades_Campo_de_ajuste).toLocaleLowerCase();
                                                                                                                          if( Unidades_Campo_de_ajuste.indexOf( termino ) >= 0 ){ 
                                                                                                                            materialesArr.push( material ) 
                                                                                                                          }else{let Clasificacion_Proteccion = String (material.Clasificacion_Proteccion).toLocaleLowerCase();
                                                                                                                            if( Clasificacion_Proteccion.indexOf( termino ) >= 0 ){ 
                                                                                                                              materialesArr.push( material ) 
                                                                                                                            }else{let Resistencia = String (material.Resistencia).toLocaleLowerCase();
                                                                                                                              if( Resistencia.indexOf( termino ) >= 0 ){ 
                                                                                                                                materialesArr.push( material ) 
                                                                                                                              }else{let Unidades_Resistencia = String (material.Unidades_Resistencia).toLocaleLowerCase();
                                                                                                                                if( Unidades_Resistencia.indexOf( termino ) >= 0 ){ 
                                                                                                                                  materialesArr.push( material ) 
                                                                                                                                }else{let Contenedor = String (material.Contenedor).toLocaleLowerCase();
                                                                                                                                  if( Contenedor.indexOf( termino ) >= 0 ){ 
                                                                                                                                    materialesArr.push( material ) 
                                                                                                                                  }else{let Unidades_Contenedor = String (material.Unidades_Contenedor).toLocaleLowerCase();
                                                                                                                                    if( Unidades_Contenedor.indexOf( termino ) >= 0 ){ 
                                                                                                                                      materialesArr.push( material ) 
                                                                                                                                    }else{let Diametro_Contenedor = String (material.Diametro_Contenedor).toLocaleLowerCase();
                                                                                                                                      if( Diametro_Contenedor.indexOf( termino ) >= 0 ){ 
                                                                                                                                        materialesArr.push( material ) 
                                                                                                                                      }else{let Superficie_Activa = String (material.Superficie_Activa).toLocaleLowerCase();
                                                                                                                                        if( Superficie_Activa.indexOf( termino ) >= 0 ){ 
                                                                                                                                          materialesArr.push( material ) 
                                                                                                                                        }else{let Termostato = String (material.Termostato).toLocaleLowerCase();
                                                                                                                                          if( Termostato.indexOf( termino ) >= 0 ){ 
                                                                                                                                            materialesArr.push( material ) 
                                                                                                                                          }else{let Peso_Pallet = String (material.Peso_Pallet).toLocaleLowerCase();
                                                                                                                                            if( Peso_Pallet.indexOf( termino ) >= 0 ){ 
                                                                                                                                              materialesArr.push( material ) 
                                                                                                                                            }else{let Unidades_Peso_Pallet = String (material.Unidades_Peso_Pallet).toLocaleLowerCase();
                                                                                                                                              if( Unidades_Peso_Pallet.indexOf( termino ) >= 0 ){ 
                                                                                                                                                materialesArr.push( material ) 
                                                                                                                                              }else{let Tamano_Pallet = String (material.Tamano_Pallet).toLocaleLowerCase();
                                                                                                                                                if( Tamano_Pallet.indexOf( termino ) >= 0 ){ 
                                                                                                                                                  materialesArr.push( material ) 
                                                                                                                                                }else{let Tiempo_de_inyeccion = String (material.Tiempo_de_inyeccion).toLocaleLowerCase();
                                                                                                                                                  if( Tiempo_de_inyeccion.indexOf( termino ) >= 0 ){ 
                                                                                                                                                    materialesArr.push( material ) 
                                                                                                                                                  }else{let Unidades_Tiempo_de_inyeccion = String (material.Unidades_Tiempo_de_inyeccion).toLocaleLowerCase();
                                                                                                                                                    if( Unidades_Tiempo_de_inyeccion.indexOf( termino ) >= 0 ){ 
                                                                                                                                                      materialesArr.push( material ) 
                                                                                                                                                    }else{let Tipo_de_Globo = String (material.Tipo_de_Globo).toLocaleLowerCase();
                                                                                                                                                      if( Tipo_de_Globo.indexOf( termino ) >= 0 ){ 
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
//         console.log("Codigo "+ material.Codigo + "--EXISTE")
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
//         console.log("Codigo "+ material.Codigo + "--EXISTE")
//       } else{
//         console.log("--AÑADIDO ARRAY materialesArr --");
//         materialesArr.push( material ) 
//       }
//       }