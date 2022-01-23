import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

  heroes = [1,1,1,1,1,1];

  imageDefault = "/assets/img/descarga.png";
  
  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    console.log("--imgError--")
     this.img = this.imageDefault;
  }
  imgLoaded(){
    console.log('Log hijo');
    //Emitimos envento que escucha el padre
    this.loaded.emit(this.img);
  }

}
