import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product []= [];
  total = 0;

  @Input() product :Product =
  {
    id: "",
    name: '',
    price: 0,
    description: '',
    img: '',
  };
  products : Product [] = [
    {
      id: "cod 1",
      name: 'Regulator 1',
      price: 238,
      description: 'Carburos Metálicos posee una división especial que puede ayudarle a conseguir cualquier tipo de regulador para su uso en sistemas de una botella o sistemas de distribuciones de gas central, en el punto de uso o en colectores. Hay disponibles reguladores aptos para presiones de hasta 300 bares.',
      img: 'http://www.carburos.com/~/media/Images/Callout/we-love-gases-b.jpg?h=121&la=es-ES&w=215',
    },
    {
      id: "cod 2",
      name: 'Regulator 1',
      price: 238,
      description: 'Carburos Metálicos posee una división especial que puede ayudarle a conseguir cualquier tipo de regulador para su uso en sistemas de una botella o sistemas de distribuciones de gas central, en el punto de uso o en colectores. Hay disponibles reguladores aptos para presiones de hasta 300 bares.',
      img: 'http://www.carburos.com/~/media/Images/Callout/microsites/customer-engineering-microsite-sp.jpg?h=121&la=es-ES&w=215',
    },
    {
      id: "cod 3",
      name: 'Regulator 1',
      price: 238,
      description: 'Carburos Metálicos posee una división especial que puede ayudarle a conseguir cualquier tipo de regulador para su uso en sistemas de una botella o sistemas de distribuciones de gas central, en el punto de uso o en colectores. Hay disponibles reguladores aptos para presiones de hasta 300 bares.',
      img: 'http://www.carburos.com/~/media/Images/Banners/microsites/thermal-spray/callout-promo-microsite.jpg?h=115&la=es-ES&w=204',
    },
    // {
    //   id: "CM40909400904",
    //   name: 'Regulator 1',
    //   price: 238,
    //   description: 'Carburos Metálicos posee una división especial que puede ayudarle a conseguir cualquier tipo de regulador para su uso en sistemas de una botella o sistemas de distribuciones de gas central, en el punto de uso o en colectores. Hay disponibles reguladores aptos para presiones de hasta 300 bares.',
    //   img: 'https://www.w3schools.com/w3images/avatar5.png',
    // },
    // {
    //   id: "CM40909400904",
    //   name: 'Regulator 1',
    //   price: 238,
    //   description: 'Carburos Metálicos posee una división especial que puede ayudarle a conseguir cualquier tipo de regulador para su uso en sistemas de una botella o sistemas de distribuciones de gas central, en el punto de uso o en colectores. Hay disponibles reguladores aptos para presiones de hasta 300 bares.',
    //   img: 'https://www.w3schools.com/w3images/avatar5.png',
    // },
    // {
    //   id: "CM40909400904",
    //   name: 'Regulator 1',
    //   price: 238,
    //   description: 'Carburos Metálicos posee una división especial que puede ayudarle a conseguir cualquier tipo de regulador para su uso en sistemas de una botella o sistemas de distribuciones de gas central, en el punto de uso o en colectores. Hay disponibles reguladores aptos para presiones de hasta 300 bares.',
    //   img: 'https://www.w3schools.com/w3images/avatar5.png',
    // },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product: Product){
    console.log("--ADD -> PRODUCTS");
    console.log(product.id);
    this.myShoppingCart.push(product);
    console.log("--MyShoppingCart");
    console.log(this.myShoppingCart);
    this.total = this.myShoppingCart.reduce((sum, item)=> sum + item.price, 0);
  }

}
