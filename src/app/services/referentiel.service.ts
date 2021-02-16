import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Referentiel } from '../models/referentiel.model';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {

  constructor(private http: HttpClient) { }

  referentiel: Referentiel[] = [];

  private url = 'http://127.0.0.1:8000/api/admins/referentiels';

  getAll(): Observable<Referentiel[]>
  {
    return this.http.get<Referentiel[]>(this.url);
  }

  get(id: string): any
  {
    return this.http.get<Referentiel[]>(this.url + '/' + id);
  }

  create(profil: { libelle: string }): any
  {
    return this.http.post<Referentiel[]>(this.url, profil, {responseType: 'text' as 'json'});
  }

  update(referentiel: Referentiel, id: string): any
  {
    return this.http.put<Referentiel[]>(this.url + '/' + id, referentiel);
  }

  delete(id: string): any
  {
    return this.http.delete<Referentiel[]>(this.url + '/' + id);
  }

}
