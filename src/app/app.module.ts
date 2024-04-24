import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ListaALumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ProductosComponent, ProductoDetalleComponent, ListaALumnosComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
