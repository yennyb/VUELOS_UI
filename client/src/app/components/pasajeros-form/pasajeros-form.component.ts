import { PasajerosService } from './../../services/pasajeros.service';
import { Component, HostBinding, OnInit } from '@angular/core';
import { pasajeros } from './../models/pasajeros';


@Component({
  selector: 'app-pasajeros-form',
  templateUrl: './pasajeros-form.component.html',
  styleUrls: ['./pasajeros-form.component.css']
})
export class PasajerosFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  pasajeros: pasajeros={
    id: 0,
    Nombre:'',
    Apellido: '',
    documento: string,
    image: '',
    created_at: new Date ()
  

  };

  constructor(private PasajerosService:PasajerosService) { }

  ngOnInit(): void {
  }

  guardarnuevousuario(){
    console.log(this.pasajeros);
  }

}
