import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v3.1/name/';

  constructor( private http: HttpClient) { }

  buscarPais (termino: string):Observable<Country[]> {
    const url = `${this.apiURL}${termino}`;
    return this.http.get<Country[]>(url);
  }
}
