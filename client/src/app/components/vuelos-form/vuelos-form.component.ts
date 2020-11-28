import { vuelos } from './../models/vuelos';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-vuelos-form',
  templateUrl: './vuelos-form.component.html',
  styleUrls: ['./vuelos-form.component.css']
})
export class VuelosFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  vuelos: vuelos={
    id: 0,
   Destino:'',
    Regreso: '',
    image: '',
    
  

  };
  


  constructor() { }

  ngOnInit(): void {
  }

}
