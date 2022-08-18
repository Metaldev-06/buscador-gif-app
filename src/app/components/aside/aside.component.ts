import { Component } from '@angular/core';
import { GifService } from '../../service/gif.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  
  get historial() {
    return this.gifsService.historial;
  }

  constructor( private gifsService: GifService ) { }

  volverBusqueda( termino: string) {
    this.gifsService.buscarGif(termino);
  }
  
}
