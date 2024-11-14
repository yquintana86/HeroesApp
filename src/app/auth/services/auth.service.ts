import { User } from './../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environments } from '../../../environments/environments';
import { Heroe } from '../../heroes/interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environments.baseUrl;
  private user?: User;

  constructor(private httpClient: HttpClient) { }

getUserById(id: string): Observable<User | undefined>
{
  return this.httpClient.get<User>(`${this.baseUrl}/users/${id}`)
                  .pipe(
                    catchError(() => of(undefined))
                  );
}

get currentUser(): User | undefined {

  if(!this.user) return undefined;
  //return {...this.user};
  return structuredClone(this.user);
}


login(user: string, mail: string): Observable<User>{
  return this.httpClient.get<User>(`${this.baseUrl}/users/1`)
  .pipe(
    tap(user => {
      this.user = user;
    }),
    tap(user => {
      localStorage.setItem('token','sdjvnasdkv.asjkbckabcak.adksufhakdufh')
    })
  );
}

checkAuthentication(): Observable<boolean>{

  if(!localStorage.getItem('token'))
    return  of(false);


  return this.httpClient.get<User>(`${this.baseUrl}/users/1`)
              .pipe(
                tap(user => this.user = user),
                map(user => !!user),
                catchError(() => of(false))
              );
}

logout(): boolean
{
  localStorage.clear();
  this.user = undefined;

  return true;
}



}
