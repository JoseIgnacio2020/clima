import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = 'https://api.openweathermap.org/data/2.5/weather?&appid=';
  key = '30ef783125f66d5027d1fe9d0d100c4d';

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any> {
    const URL = this.url +this.key+ '&q=' + ciudad + '&units=metric&lang=es';
    return this.http.get(URL)
  }
}
