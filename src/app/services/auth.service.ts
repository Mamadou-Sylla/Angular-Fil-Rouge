import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { UserModel } from '../models/users.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  private baseUrl = 'http://127.0.0.1:8000/api';
  public nameAutorization = 'fil_rouge';
  public localStorage  = window.localStorage;
  public currentUser: Observable<UserModel>;
  public currentUserSubject: BehaviorSubject<UserModel>;

login(credentials: any): any{
  return this.http.post(`${this.baseUrl}/login`, credentials);
}

getToken(credentials: any): any{
  this.login(credentials).subscribe(
    (    token: { token: string; })  => {
      localStorage.clear();
      localStorage.setItem('token', token.token);
      console.log(token.token);

      let user = this.decodeToken();
      user = this.decodeToken();
      console.log(user.roles);

      const role = user.roles[0];
      console.log(role);
      if (user){
        this.redirectByRole(user.roles[0]);
      }
      // this.router.navigate(['/default/admin']);
      },
    (    httpError: { error: { message: any; }; }) => console.log(httpError.error.message)
  );
}


myToken(): any {
  
  console.log(localStorage.getItem('token'));

  return localStorage.getItem('token');
}

decodeToken(): any{
  return  localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token') as string) : null;
}

 currentUserValue(): UserModel {
  return this.currentUserSubject.value;
}


// tslint:disable-next-line:typedef
redirectByRole(role: string) {
  switch (role) {
    case 'ROLE_Admin': {
      this.router.navigate(['default//users/list']);
      break;
    }
    case 'ROLE_Formateur': {
      this.router.navigate(['default/formateur']);
            // @ts-ignore
      break;
    }
    case 'ROLE_Apprenant': {
      // @ts-ignore
      this.router.navigate(['default/apprenant']);
      break;
    } case 'ROLE_CM': {
      // @ts-ignore
      this.router.navigate(['default/cm']);
      break;
    }
    default: {
      this.router.navigate(['register']);
      break;
    }
  }


}
// tslint:disable-next-line:typedef
isLoggenIn(){
  return !!localStorage.getItem('token');
}

// tslint:disable-next-line:typedef
logout() {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
  // @ts-ignore
  this.currentUserSubject.next(null);
  if (!this.currentUser){
    this.router.navigate(['login']);
  }
  this.router.navigate(['login']);
}
}
