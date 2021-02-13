import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ProfilModel } from '../models/profils.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  Profil: ProfilModel[] = [];
  private url = 'http://127.0.0.1:8000/api/admins/profils';
  constructor(private http: HttpClient) { }

  getAll(): Observable<ProfilModel[]>
  {
    return this.http.get<ProfilModel[]>(this.url);
  }

  get(id: string): any
  {
    return this.http.get<ProfilModel[]>(this.url + '/' + id);
  }

  create(profil: { libelle: string }): any
  {
    return this.http.post<ProfilModel[]>(this.url, profil, {responseType: 'text' as 'json'});
  }

  update(profil: ProfilModel, id: number): any
  {
    return this.http.put<ProfilModel[]>(this.url + '/' + id, profil);
  }

  delete(id: number): any
  {
    return this.http.delete<ProfilModel[]>(this.url + '/' + id);
  }

  getById(id: number): any
    {
      return this.http.get<ProfilModel[]>(this.url + '/' + id);
     }
}
