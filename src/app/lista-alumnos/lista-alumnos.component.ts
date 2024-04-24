import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { alumno } from '../alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaALumnosComponent  implements OnInit {

  constructor() { }

  ngOnInit() { }

  /*alumnos: any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Eliminar',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },

    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }*/

  result: string = '';

  agregarAlumno(): void{
    this.alumnos.push(this.alumno);

    this.alumno = {
      nombre: '',
      presente: false,
    }
  }

  alumno: alumno = {
    nombre: '',
    presente: false
  }

  alumnos: alumno[] = [];

}
