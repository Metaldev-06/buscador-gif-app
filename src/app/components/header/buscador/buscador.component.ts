import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifService } from 'src/app/service/gif.service';
import { Analytics } from '../../../interface/gifs';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  constructor(private gifService: GifService) { }
  
  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }

    this.gifService.buscarGif(valor);
    this.txtBuscar.nativeElement.value = '';
    
    // this.gifService.resultado.map( (gif ) => {
    //   console.log(gif.user = gif.user || "No hay información");
    // } );
  }

}
