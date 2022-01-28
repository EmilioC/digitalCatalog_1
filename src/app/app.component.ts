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


onLoaded(img:string){
  console.log(img);
}

toggleImg(){
  this.showImg = !this.showImg;
  console.log(this.showImg);
}
}
