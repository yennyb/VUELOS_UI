import { PasajerosFormComponent } from './components/pasajeros-form/pasajeros-form.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import{PasajerosListComponent} from './components/pasajeros-list/pasajeros-list.component';
import{VuelosListComponent} from './components/vuelos-list/vuelos-list.component';


const routes: Routes = [
  { path: '',   redirectTo: '/pasajeros', pathMatch: 'full' },
  {
    path: 'pasajeros',
    component: PasajerosListComponent
    
},
{
   path: 'pasajeros/add',
   
   

},

{
  path: 'vuelos'

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
