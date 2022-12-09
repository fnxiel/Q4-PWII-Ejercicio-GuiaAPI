import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { IPokemon } from './IPokemon';
import { IListadoPokemon } from './IListadoPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private urlBase = 'https://pokeapi.co/api/v2'

  constructor(private clienteHttp: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getPokemon(id: number | string): Observable<IPokemon>{
      return this.clienteHttp.get<IPokemon>(`${this.urlBase}/pokemon/${id}`, this.httpOptions)
      .pipe(
        catchError(this.manejarError<IPokemon>("Leer pokemons"))
      )
  }

  getPokemons(): Observable<IPokemon>{
    return this.clienteHttp.get<IPokemon>(`${this.urlBase}/pokemon/1`, this.httpOptions)
    .pipe(
      catchError(this.manejarError<IPokemon>("Leer pokemons"))
    )
  }

  getListadoPokemons(limite: number = 150): Observable<IListadoPokemon>{
    return this.clienteHttp.get<IListadoPokemon>(`${this.urlBase}/pokemon/?limit=${limite}`, this.httpOptions)
    .pipe(
      catchError(this.manejarError<IListadoPokemon>("Leer listado pokemons"))
    )
  }
  
  manejarError<T>(operacion = 'Operación', resultado?: T){

    return (error: any) : Observable<T> => {
    console.error(`La operación ${operacion} falló con el
    siguiente codigo de error: ${error.message}`);
    return of(resultado as T)
    }
    }
}
