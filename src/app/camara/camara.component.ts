import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { Foto } from 'src/foto.model';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent  implements OnInit {

  constructor(public FotoServicio: FotoServiceService) { }

  ngOnInit() {}

  tomarfoto(){
    this.FotoServicio.addNewToGallery();
  }

  public fotos: Foto[] = this.FotoServicio.fotos;

}
