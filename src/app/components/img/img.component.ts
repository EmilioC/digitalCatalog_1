import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

  heroes = [1,1];

  imageDefault = "/assets/img/descarga.png";
  counter = 0;
  counterFn: number | undefined;
  
  constructor() { 
    // before render
    // No async -- one time for each component only call 1 time
    // En el constructor debemos ejecutar acciones inmediatas
    // no acciones que esperen datos (async)
    console.log("Constructor",'imgValue =>', this.img);
  }

  ngOnChanges(){
    // Before render
    // The function is update the changes in the inputs
    // Working many times
  }

  ngOnInit(): void {

    //Berfore render
    // async - fetch - once time (solo una vez ej: cuando
    // llamamos a una API y traemos todos los datos)
    console.log("ngOnInit()",'imgValue =>', this.img);

    this.counterFn= window.setInterval(()=>{
      this.counter += 1;
      console.log('--Run counter');
    },1000)
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("ngAfterViewInit()",'imgValue =>', this.img);
  }

  ngOnDestroy(){
    // delete
    console.log("ngOnDestroy()",'imgValue =>', this.img);
    //Cancelamos el evento para que no se quede en 2º plano si 
    // el componente ya no está en pantalla
    window.clearInterval(this.counterFn);
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
