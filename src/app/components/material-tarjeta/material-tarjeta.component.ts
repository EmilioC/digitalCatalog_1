import { Component, OnInit, Input } from '@angular/core';
import { Material } from '../../models/material.model';
import { MaterialService } from '../../services/material.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-material-tarjeta',
  templateUrl: './material-tarjeta.component.html',
  styleUrls: ['./material-tarjeta.component.scss']
})
export class MaterialTarjetaComponent implements OnInit {


materiales : Material []=[];
@Input() material: any = {};
@Input() index: number = 0;
materialesEncontrados: number= 0;
ampliarInfo: boolean = false;

  // @Input() material : Material = {
  //   //Do: Initialize the object
  //   Negocio : '',
  //   Categoria_Gas : '',
  //   Categorias : '',
  //   Sub_Categoria : '',
  //   Sub_Categoria_2 : '',
  //   Forma_suministro : '',
  //   Etapa : '',
  //   Tipo_Gas : '',
  //   Modelo : '',
  //   Nombre : '',
  //   Texto_Codigo : '',
  //   Codigo: 0,
  //   Texto_Codigo_2 : '',
  //   Codigo_Purga : '',
  //   Texto_Codigo_3 : '',
  //   Codigo_3 : '',
  //   Venta_Directa : '',
  //   Gas : '',
  //   Texto_Presion_1 : '',
  //   Presion_1 : 0,
  //   Unidades_Presion_1 : '',
  //   Texto_Presion_2 : '',
  //   Presion_2 : '',
  //   Unidades_Presion_2 : '',
  //   Texto_Caudal_N : '',
  //   Caudal_N2 : 0,
  //   Unidades_Caudal_N2 : '',
  //   Material_Cuerpo : '',
  //   Regulador_Tipo : '',
  //   Material_Cierre : '',
  //   Material_Junta: '',
  //   Material_Asiento : '',
  //   Material_Fuelle : '',
  //   MateriaL_Eje : '',
  //   Material_Husillo : '',
  //   Material_Bola : '',
  //   Material_Tubo : '',
  //   Orificio : '',
  //   Unidades_Orificio : '',
  //   Conexión_Entrada : '',
  //   Conexión_Salida : '',
  //   Tipo_conexion_entrada_Botella :'',
  //   Conexión_valvula : '',
  //   Conexion_rampa : '',
  //   Dist_entre_tomas : '',
  //   Unidades_Dist_entre_tomas :'',
  //   Dist_entre_soportes : '',
  //   Unidades_Dist_entre_soportes : '',
  //   Material_colector : '',
  //   Diametro_Exterior : '',
  //   Unidades_Diametro_Exterior : '',
  //   Conexión_Botella : '',
  //   Rosca_Espiga : '',
  //   Material_Caña : '',
  //   Material_Tuerca : '',
  //   Campo_de_ajuste : '',
  //   Unidades_Campo_de_ajuste : '',
  //   Clasificacion_Proteccion : '',
  //   Resistencia : '',
  //   Unidades_Resistencia : '',
  //   Contenedor : '',
  //   Unidades_Contenedor : '',
  //   Diametro_Contenedor : '',
  //   Superficie_Activa : '',
  //   Termostato : '',
  //   Peso_Pallet : '',
  //   Unidades_Peso_Pallet : '',
  //   Tamaño_Pallet : '',
  //   Tiempo_de_inyeccion : '',
  //   Unidades_Tiempo_de_inyeccion : '',
  //   Tipo_de_Globo : '',
  // };
  
  constructor(
    private materialService: MaterialService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.materiales = this.materialService.getMateriales();
    this.materialesEncontrados = this.materiales.length;
  }

  verMaterial(idx: number){
    this.router.navigate(['/material',idx])
  }

  mostrarInfo(){
    this.ampliarInfo = !this.ampliarInfo;
  }

}
