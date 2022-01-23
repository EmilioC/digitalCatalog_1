import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imgParent = 'https://www.w3schools.com/w3images/avatar5.png';

onLoaded(img:string){
  console.log(img);
}
}
