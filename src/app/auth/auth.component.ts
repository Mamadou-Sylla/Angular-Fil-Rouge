import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
// import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  hide = true;
  userData = {
    email: '',
    password: ''
  };
  tokenUser: any;

    constructor(private Authservices: AuthService, private route: Router) { }

    private role = '';


  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  OnSubmit(form: NgForm){
    this.userData.email = form.value.email;
    this.userData.password = form.value.password;
    this.Authservices.getToken(this.userData);
    console.log(localStorage.getItem('token'));
    }

  /*get(){
    console.log(this.User.getAllUser(this.url));
  }*/
}
