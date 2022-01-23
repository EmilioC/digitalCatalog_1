import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() product :Product =
  {
    id: "",
    name: '',
    price: 0,
    description: '',
    img: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
