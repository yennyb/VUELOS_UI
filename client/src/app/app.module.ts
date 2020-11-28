import { VuelosService } from './services/vuelos.service';
import { PasajerosService } from './services/pasajeros.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { PasajerosFormComponent } from './components/pasajeros-form/pasajeros-form.component';
import { VuelosFormComponent } from './components/vuelos-form/vuelos-form.component';
import { PasajerosListComponent } from './components/pasajeros-list/pasajeros-list.component';
import { VuelosListComponent } from './components/vuelos-list/vuelos-list.component';
import { FormsModule } from '@angular/forms';


//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PasajerosFormComponent,
    VuelosFormComponent,
    PasajerosListComponent,
    VuelosListComponent,
    BrowserModule,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader,
        useFactory: (http: "HttpClient") => {
          return new TranslateHttpLoader(http);
        },
    
  ],
  providers: [

    PasajerosService,
    VuelosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
