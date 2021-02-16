import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competence } from '../models/competence.model';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  constructor(private http: HttpClient) { }

  Competences: Competence[] = [];
  private url = 'http://127.0.0.1:8000/api/admin/competences';

  getAll(): Observable<Competence[]>
  {
    return this.http.get<Competence[]>(this.url);
  }

  get(id: string): any
  {
    return this.http.get<[]>(this.url + '/' + id);
  }

  create(Competences: any): any
  {
    return this.http.post<Competence[]>(this.url, Competences, {responseType: 'text' as 'json'});
  }

  update(profil: Competence, id: string): any
  {
    return this.http.put<Competence[]>(this.url + '/' + id, profil);
  }

  delete(id: string): any
  {
    return this.http.delete<Competence[]>(this.url + '/' + id);
  }
  getById(id: number): any
  {
    return this.http.get<Competence[]>(this.url + '/' + id);
   }
}
