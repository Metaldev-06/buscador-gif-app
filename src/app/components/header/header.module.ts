import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnHeaderComponent } from './btn-header/btn-header.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BuscadorComponent,
    BtnHeaderComponent,
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
