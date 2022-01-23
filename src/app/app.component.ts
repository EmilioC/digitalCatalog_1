import { Component, EventEmitter } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imgParent = 'http://www.carburos.com/~/media/Images/Banners/microsites/instalaciones/telemetria.jpg?la=es-ES';
  showImg = true;

  products : Product [] = [
    {
      id: "CM40909400904",
      name: 'Regulator 1',
      price: 238,
      description: 'Carburos Metálicos posee una división especial que puede ayudarle a conseguir cualquier tipo de regulador para su uso en sistemas de una botella o sistemas de distribuciones de gas central, en el punto de uso o en colectores. Hay disponibles reguladores aptos para presiones de hasta 300 bares.',
      img: 'http://www.carburos.com/~/media/Images/Banners/microsites/instalaciones/servicio-punutal.jpg?h=179&la=es-ES&w=480',
    },
    {
      id: "CM40909400904",
      name: 'Regulator 1',
      price: 238,
      description: 'Carburos Metálicos posee una división especial que puede ayudarle a conseguir cualquier tipo de regulador para su uso en sistemas de una botella o sistemas de distribuciones de gas central, en el punto de uso o en colectores. Hay disponibles reguladores aptos para presiones de hasta 300 bares.',
      img: 'https://www.w3schools.com/w3images/avatar5.png',
    },
    {
      id: "CM40909400904",
      name: 'Regulator 1',
      price: 238,
      description: 'Carburos Metálicos posee una división especial que puede ayudarle a conseguir cualquier tipo de regulador para su uso en sistemas de una botella o sistemas de distribuciones de gas central, en el punto de uso o en colectores. Hay disponibles reguladores aptos para presiones de hasta 300 bares.',
      img: 'https://www.w3schools.com/w3images/avatar5.png',
    },
    {
      id: "CM40909400904",
      name: 'Regulator 1',
      price: 238,
      description: 'Carburos Metálicos posee una división especial que puede ayudarle a conseguir cualquier tipo de regulador para su uso en sistemas de una botella o sistemas de distribuciones de gas central, en el punto de uso o en colectores. Hay disponibles reguladores aptos para presiones de hasta 300 bares.',
      img: 'https://www.w3schools.com/w3images/avatar5.png',
    },
    {
      id: "CM40909400904",
      name: 'Regulator 1',
      price: 238,
      description: 'Carburos Metálicos posee una división especial que puede ayudarle a conseguir cualquier tipo de regulador para su uso en sistemas de una botella o sistemas de distribuciones de gas central, en el punto de uso o en colectores. Hay disponibles reguladores aptos para presiones de hasta 300 bares.',
      img: 'https://www.w3schools.com/w3images/avatar5.png',
    },
    {
      id: "CM40909400904",
      name: 'Regulator 1',
      price: 238,
      description: 'Carburos Metálicos posee una división especial que puede ayudarle a conseguir cualquier tipo de regulador para su uso en sistemas de una botella o sistemas de distribuciones de gas central, en el punto de uso o en colectores. Hay disponibles reguladores aptos para presiones de hasta 300 bares.',
      img: 'https://www.w3schools.com/w3images/avatar5.png',
    },
  ];

onLoaded(img:string){
  console.log(img);
}

toggleImg(){
  this.showImg = !this.showImg;
  console.log(this.showImg);
}
}
