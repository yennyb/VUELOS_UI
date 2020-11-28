import { Component, OnInit } from '@angular/core';

import { PasajerosService } from '../../services/pasajeros.service';



@Component({
  selector: 'app-pasajeros-list',
  templateUrl: './Pasajeros-list.component.html',
  styleUrls: ['./Pasajeros-list.component.css']
})
export class PasajerosListComponent implements OnInit {


  pasajeros: any = [];
  constructor(private pasajerosService: PasajerosService) { }

  ngOnInit(): void {
    this.pasajerosService.getPasajeros ().subscribe(
      res => {
        this.pasajeros =res;

      },
      err => console.error(err)

    );
  }
  deletePasajero(id:string){

    this.pasajerosService.deletePasajeros(id).subscribe(
      res => {
        console.log(res)


      }
    )

  }
}
