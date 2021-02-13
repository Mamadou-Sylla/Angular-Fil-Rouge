import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GrpCompetence } from '../models/groupe-competence.model';

@Injectable({
  providedIn: 'root'
})
export class GroupeCompetenceService {

  constructor(private http: HttpClient) { }

  Profil: GrpCompetence[] = [];
  private url = 'http://127.0.0.1:8000/api/admins/grpcompetences';

  getAll(): Observable<GrpCompetence[]>
  {
    return this.http.get<GrpCompetence[]>(this.url);
  }

  get(id: string): any
  {
    return this.http.get<[]>(this.url + '/' + id);
  }

  create(profil: { libelle: string }): any
  {
    return this.http.post<GrpCompetence[]>(this.url, profil, {responseType: 'text' as 'json'});
  }

  update(profil: GrpCompetence, id: string): any
  {
    return this.http.put<GrpCompetence[]>(this.url + '/' + id, profil);
  }

  delete(id: string): any
  {
    return this.http.delete<GrpCompetence[]>(this.url + '/' + id);
  }
  getById(id: number): any
  {
    return this.http.get<GrpCompetence[]>(this.url +  '/' + id + '/competence');
   }
}




