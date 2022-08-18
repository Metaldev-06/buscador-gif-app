import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifService } from 'src/app/service/gif.service';

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
  }

}
