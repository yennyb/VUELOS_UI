import { pasajeros } from '../components/models/pasajeros';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasajerosService {
  API_URL = 'http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getPasajeros() {
    return this.http.get('${this.API_URL}/pasajeros');
  }

  getPasajero(id: string){
    return this.http.get('${this.API_URL}/Pasajeros/${id}');
  }

  SavePasajeros(Pasajeros: pasajeros) {
    return this.http.post ('${this.API_URL}/pasajeros',Pasajeros);

  }

  deletePasajeros(id: string){
    return this.http.delete ('${this.API_URL}/Pasajeros/$ {id}');

  }

  updatePasajeros(id: string, updatePasajeros:pasajeros): Observable<pasajeros> {
    return this.http.put ('${this.API_URL}/pasajeros/$ {id}',updatePasajeros);
    
  }
    


  }

