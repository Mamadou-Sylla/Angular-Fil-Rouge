import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ProfilSortieModel } from '../models/profil-sortie.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  Profil: ProfilSortieModel[] = [];
  private url = 'http://127.0.0.1:8000/api/admin/profilsortie';
  constructor(private http: HttpClient) { }

  getAll(): Observable<ProfilSortieModel[]>
  {
    return this.http.get<ProfilSortieModel[]>(this.url);
  }

  get(id: string): any
  {
    return this.http.get<ProfilSortieModel[]>(this.url + '/' + id);
  }

  create(profil: { libelle: string }): any
  {
    return this.http.post<ProfilSortieModel[]>(this.url, profil, {responseType: 'text' as 'json'});
  }

  update(profil: ProfilSortieModel, id: string): any
  {
    return this.http.put<ProfilSortieModel[]>(this.url + '/' + id, profil);
  }

  delete(id: string): any
  {
    return this.http.delete<ProfilSortieModel[]>(this.url + '/' + id);
  }

  getById(id: number): any
  {
    return this.http.get<ProfilSortieModel[]>(this.url + '/' + id);
   }
}
