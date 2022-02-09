import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MaterialService } from '../../services/material.service';


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent {

 material: any = {};
 @Input () materialInput: any ={};


  constructor(
    private activatedRoute: ActivatedRoute,
    private _materialService: MaterialService
  ) { 
    this.activatedRoute.params.subscribe ( params =>{
      this.material = this._materialService.getMaterial(params['id']);
      console.log(this.material);
    })
  }


}
