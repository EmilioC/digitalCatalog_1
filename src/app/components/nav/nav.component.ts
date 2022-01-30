import { Component, OnInit, SimpleChanges } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  myShoppingCart: Product []= [];
  total = 0;
  activeMenu = false;
  today = new Date();
  

  constructor(
    private storeService: StoreService
  ) 
  { }

  ngOnInit(): void { 

    window.setInterval(()=>{
      this.total = this.storeService.getTotal();
      this.myShoppingCart = this.storeService.getShoppingCart(); 
    },3000)
  }

  toggleMenu (){
    this.activeMenu = !this.activeMenu;
  }
  updatePriceCart(){
    this.total = this.storeService.getTotal();
  }

}
