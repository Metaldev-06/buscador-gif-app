import { Component } from '@angular/core';
import { GifService } from '../../service/gif.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent {

  get resultado() {
    return this.gifsService.resultado;
  }
  constructor( private gifsService: GifService ) { }
  

}
