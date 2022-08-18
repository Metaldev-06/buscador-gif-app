import { Component, OnInit } from '@angular/core';
import { HeaderService } from './service/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  constructor(private headerService: HeaderService) { }

  public valor!: boolean;

  ngOnInit(): void {
    this.headerService.activadorSidebar.subscribe(mostrar => {
      this.valor = mostrar;
    })
  }


  title = 'buscador-gif-app';

}
