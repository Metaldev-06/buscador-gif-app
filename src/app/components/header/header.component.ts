import { Component } from '@angular/core';
import { HeaderService } from '../../service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private headerService: HeaderService) { }
  get mostrar() {
    return this.headerService.mostrar();
  }

  activarSidebar() {
    this.headerService.activadorSidebar.emit(this.headerService.mostrar());
  }
}

