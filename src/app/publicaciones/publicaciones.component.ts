import { Component, OnInit } from '@angular/core';
import { PublicacionRoutingModule } from '../publicacion/publicacion-routing.module';
import { HttpClient } from '@angular/common/http';
import * as data from '../../assets/feed.json';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

export interface Publicaciones{
  imagen: String;
  id: number;
}
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

  publicacionesArreglo: Publicaciones[] = [];

  //publicaciones: {id: number, usuario: String, imagenPost: String, avatarUsuario: string,  descripcionPost: String}[] = publicaciones;
   datos =  data;

   datosUsuario: any = this.datos.usuario;

  publicaciones: any = this.datos.publicaciones;

   _filtrarPublicaciones: string = this.datosUsuario.nombre; //filtro de publicaciones en el perfil


   publicacionesPorUsuario = [];

   get filtrarPublicaciones(): string {
     return this._filtrarPublicaciones;
   }

   set filtrarPublicaciones(valor: string) {
     console.log(valor);
     this._filtrarPublicaciones = valor;


     this.publicacionesPorUsuario = this.filtroPublicaciones(valor);

   }


   filtroPublicaciones(nombreUsuario: String): []{
     nombreUsuario = nombreUsuario.toLocaleLowerCase();

     return this.publicaciones.filter((publicacion: any) => publicacion.usuario.toLocaleLowerCase().includes(nombreUsuario));
   }
  
  ngOnInit() {
  
  this.filtrarPublicaciones = this.datosUsuario.nombre;
  }
}