import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserModel } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  url = 'http://127.0.0.1:8000/api/admin/formateurs';
  user: User[] = [];

  constructor( private http: HttpClient) { }

  getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url);
    }

    getById(id: number): any
    {
      return this.http.get<UserModel[]>(this.url + '/' + id);
     }

    create(user: User[]): any
    {
      return this.http.post<UserModel[]>(this.url, user, {responseType: 'text' as 'json'});
    }

    update(user: UserModel, id: string): any
    {
      return this.http.put<UserModel[]>(this.url + '/' + id, user);
    }

    delete(id: string): any
    {
      return this.http.delete<UserModel[]>(this.url + '/' + id);
    }

}
