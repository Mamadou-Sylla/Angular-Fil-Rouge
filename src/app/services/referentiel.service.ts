import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReferentielModel } from '../models/referentiel.model';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {

  constructor(private http: HttpClient) { }

  Profil: ReferentielModel[] = [];
  private url = 'http://127.0.0.1:8000/api/admins/referentiels';

  getAll(): Observable<ReferentielModel[]>
  {
    return this.http.get<[ReferentielModel]>(this.url);
  }

  get(id: string): any
  {
    return this.http.get<[ReferentielModel]>(this.url + '/' + id);
  }

  create(profil: { libelle: string }): any
  {
    return this.http.post<ReferentielModel[]>(this.url, profil, {responseType: 'text' as 'json'});
  }

  update(profil: ReferentielModel, id: string): any
  {
    return this.http.put<ReferentielModel[]>(this.url + '/' + id, profil);
  }

  delete(id: string): any
  {
    return this.http.delete<ReferentielModel[]>(this.url + '/' + id);
  }

}
