import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model'
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import { ProductComponent } from '../product/product.component';
import { MaterialService } from '../../services/material.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product []= [];
  total = 0;

  // myMaterial : any[] =[];

  @Input() product :Product =
  {
    id: '',
    title: '',
    price: 0,
    image: '',
    description: '',
    category: ''
  };
  products : Product [] = [];

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService,
    private materialService: MaterialService,
  ) { 
    this.myShoppingCart = this.storeService.getShoppingCart();
    // this.myMaterial = this.materialService.getMaterial();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data =>{
      console.log(data);
      this.products = data;
    });
    // console.log(this.myMaterial);
  }

  onAddToShoppingCart(product: Product){
    // console.log("--ADD -> PRODUCTS");
    // console.log(product.id);
    this.myShoppingCart.push(product);
    this.total = this.storeService.getTotal();
    // console.log(this.productsService.getAllProducts());
}

}
    // {
    //   id: "cod 1",
    //   name: 'Regulator 1',
    //   price: 150,
    //   description: 'Aptos para presiones de hasta 300 bares.',
    //   img: 'http://www.carburos.com/~/media/Images/Banners/microsites/thermal-spray/callout-promo-microsite.jpg?h=115&la=es-ES&w=204',
    // },
    // {
    //   id: "cod 2",
    //   name: 'Regulator 1',
    //   price: 38,
    //   description: 'Aptos para presiones de hasta 300 bares.',
    //   img: 'http://www.carburos.com/~/media/Images/Banners/microsites/thermal-spray/callout-promo-microsite.jpg?h=115&la=es-ES&w=204',
    // },
    // {
    //   id: "cod 3",
    //   name: 'Regulator 1',
    //   price: 45,
    //   description: 'Aptos para presiones de hasta 300 bares.',
    //   img: 'http://www.carburos.com/~/media/Images/Banners/microsites/thermal-spray/callout-promo-microsite.jpg?h=115&la=es-ES&w=204',
    // },
    // {
    //   id: "cod 4",
    //   name: 'Regulator 5',
    //   price: 89,
    //   description: 'Aptos para presiones de hasta 300 bares.',
    //   img: 'http://www.carburos.com/~/media/Images/Banners/microsites/thermal-spray/callout-promo-microsite.jpg?h=115&la=es-ES&w=204',
    // },
    // {
    //   id: "cod 5",
    //   name: 'Regulator 1',
    //   price: 67,
    //   description: 'Aptos para presiones de hasta 300 bares.',
    //   img: 'http://www.carburos.com/~/media/Images/Banners/microsites/thermal-spray/callout-promo-microsite.jpg?h=115&la=es-ES&w=204',
    // },
    // {
    //   id: "cod 6",
    //   name: 'Regulator 1',
    //   price: 54,
    //   description: 'Aptos para presiones de hasta 300 bares.',
    //   img: 'http://www.carburos.com/~/media/Images/Banners/microsites/thermal-spray/callout-promo-microsite.jpg?h=115&la=es-ES&w=204',
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
    // {
    //   id: "CM40909400904",
    //   name: 'Regulator 1',
    //   price: 238,
    //   description: 'Carburos Metálicos posee una división especial que puede ayudarle a conseguir cualquier tipo de regulador para su uso en sistemas de una botella o sistemas de distribuciones de gas central, en el punto de uso o en colectores. Hay disponibles reguladores aptos para presiones de hasta 300 bares.',
    //   img: 'https://www.w3schools.com/w3images/avatar5.png',
    // },
  