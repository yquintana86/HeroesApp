import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})

export class HeroRequestService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }


  getHeroes(): Observable<Heroe[]> {

    const uri = `${this.baseUrl}/heroes`;

    return this.httpClient.get<Heroe[]>(uri)
      .pipe
      (
        catchError(e => of([]))
      );
  }

  getHeroById(id: string): Observable<Heroe | undefined>
  {
    if(id)
    {
      const uri = `${this.baseUrl}/heroes/${id}`;
      return this.httpClient.get<Heroe>(uri)
                  .pipe(
                    catchError(e => of(undefined))
                  );

    }
    return new Observable<undefined>();
  }

  getHeroesBySearchTerm(searchTerm: string, limit: number = 6) : Observable<Heroe[]>
  {
    const uri = `${this.baseUrl}/heroes?q=${searchTerm}&_nlimit=${limit}`;
    return this.httpClient.get<Heroe[]>(uri);
  }

  addHero(heroe: Heroe): Observable<Heroe>
  {
    debugger;
    const uri = `${this.baseUrl}/heroes`;
    return this.httpClient.post<Heroe>(uri,heroe);
  }

  updateHero(heroe: Heroe): Observable<Heroe>
  {
    if(!heroe.id) throw Error('Heroe id is required');

    const uri = `${this.baseUrl}/heroes/${heroe.id}`;
    return this.httpClient.patch<Heroe>(uri,heroe);
  }

  deleteHeroById(id: string): Observable<boolean>
  {
    if(!id) throw Error('Heroe id is required');

    const uri = `${this.baseUrl}/heroes/${id}`;
    return this.httpClient.delete(uri)
                .pipe(
                    map(() => true),
                    catchError(() => of(false))
                  );
  }

}
