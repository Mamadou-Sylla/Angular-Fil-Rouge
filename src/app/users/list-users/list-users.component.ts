import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/users.model';
import { UserService } from 'src/app/services/user.service';
// import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  url = 'http://127.0.0.1:8000/api/admin/formateurs';

   user: UserModel[] = [];


  constructor(private htpp: HttpClient, private userService: UserService) {}


  ngOnInit(): any {
    this.userService.getAll().subscribe(
      (res: any) => {
      this.user = res;
      console.log(this.user);
      });
    }



  EditUser(): any{
    alert('voulez vous modifier cette users');
  }

}

