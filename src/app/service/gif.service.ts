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
  public pag         : string = '1';

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

    const params = new HttpParams()
      .set('api_key', this._apikey)
      .set('q', query)
      .set('limit', '12')
    
    this.http.get<SearchGifsResponse>(`${this._url}/search`, { params })
      .subscribe( (resp) => {
        this.resultado = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultado));
      } );
  }
}

