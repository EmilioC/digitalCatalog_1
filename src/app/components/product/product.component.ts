import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    @Input() product :Product =
  {
    id: "",
    name: '',
    price: 0,
    description: '',
    img: '',
  };

  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart (){

    console.log("--Add to Cart PRODUCT --");
    this.addedProduct.emit(this.product);
    console.log(this.product);

  }

}
