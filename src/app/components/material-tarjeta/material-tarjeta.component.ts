import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-material-tarjeta',
  templateUrl: './material-tarjeta.component.html',
  styleUrls: ['./material-tarjeta.component.scss']
})
export class MaterialTarjetaComponent implements OnInit {

  @Input() materiales : any []=[
    //Do: Initialize the object

   
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
