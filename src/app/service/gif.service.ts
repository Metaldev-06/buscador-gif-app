import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _apikey    : string = 'YpXcfpJo9lao8u3XQ5AJGuMFRE79yY4l';
  private _url       : string = 'https://api.giphy.com/v1/gifs';
  private _historial : string[] = [];
  public resultado   : Gif[] = [];
  public query        : string = '';
  public pag         : string = '0';

  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    };

    this.resultado = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGif(query: string = '') {
    query = query.trim().toLowerCase();

    if ( !this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    this.valorApi(query)
    return this.query = query;
  }
  
  valorApi(a: string) {
    const params = new HttpParams()
      .set('api_key', this._apikey)
      .set('q', a)
      .set('limit', '12')
      .set('offset', this.pag);

    this.http.get<SearchGifsResponse>(`${this._url}/search`, { params })
      .subscribe( (resp) => {
        this.resultado = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultado));
      } );
  }

  paginationNext(pag: number) {
    this.pag = (parseInt(this.pag) + pag).toString();
    console.log(this.pag);
    const params = new HttpParams()
      .set('api_key', this._apikey)
      .set('q', this.query)
      .set('limit', '12')
      .set('offset', this.pag);

    this.http.get<SearchGifsResponse>(`${this._url}/search`, { params })
      .subscribe( (resp) => {
        this.resultado = resp.data;
      } );
  }
  paginationPrev(pag: number) {
    this.pag = (parseInt(this.pag) - pag).toString();
    console.log(this.pag);
    const params = new HttpParams()
    .set('api_key', this._apikey)
    .set('q', this.query)
    .set('limit', '12')
    .set('offset', this.pag);

  this.http.get<SearchGifsResponse>(`${this._url}/search`, { params })
    .subscribe( (resp) => {
      this.resultado = resp.data;
    } );
  }
}

