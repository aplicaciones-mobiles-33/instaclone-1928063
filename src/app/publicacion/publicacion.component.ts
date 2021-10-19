import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import * as data from '../../assets/feed.json';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
})
export class PublicacionComponent implements OnInit {

  _filtrarPublicacion: number; //filtro de publicaciones en el perfil

  publicacion: any;

  usuario: any;

  datos: any = data;

  publicaciones: any = this.datos.publicaciones;

  detallePublicacion: any;


  get filtrarPublicacion(): number {
    return this._filtrarPublicacion;
  }
  
  set filtrarPublicacion(valor: number) {
    console.log(valor);

    this._filtrarPublicacion = valor;


    this.detallePublicacion = this.cargarDetallePublicacion(valor);


  }

  cargarDetallePublicacion(idPublicacion: number):any {
     return this.publicaciones.find((publicacion: any) => publicacion.id );
  }
  volver(): void {
    this._location.back();
  }
  constructor(private RutaActiva: ActivatedRoute, private _location : Location){}

  ngOnInit() {

    this._filtrarPublicacion = this.RutaActiva.snapshot.params.publicacionId;
    console.log(this._filtrarPublicacion);

    this.detallePublicacion =  this.cargarDetallePublicacion(this._filtrarPublicacion);
  }

}