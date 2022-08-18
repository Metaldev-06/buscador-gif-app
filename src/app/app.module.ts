import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderModule } from './components/header/header.module';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    ResultadosComponent,
    PaginationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
