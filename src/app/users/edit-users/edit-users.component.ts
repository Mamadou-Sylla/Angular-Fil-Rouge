import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Etudiant, Utilisateur } from 'src/app/models/user.interface';
import { User, UserModel } from 'src/app/models/users.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {


  isUpdate = false;
  constructor(private services: UserService, private route: ActivatedRoute, private http: HttpClient) { }
  userId: number | any;
  data: Etudiant = {
    firstname: '',
    lastname: '',
    email: '',
    telephone: '',
    etat: false,
    password: '',
    profil: [{
      libelle: ''
    }],
    libelle: ''
    };




  ngOnInit(): any {

    this.userId = this.route.snapshot.params.id;
    this.services.getById(this.userId).subscribe(
      (res: any) => {
        // console.log(res);
        this.data = res;
        console.log(this.data.profil);
        // tslint:disable-next-line:prefer-for-of
      }
    );
  }

  OnUpdate(form: NgForm): any
  {
    const etudiant = form.value;
    const id = this.userId;

    this.services.update(etudiant, id).subscribe(
        (res: any) => {
          etudiant.id = id;
          console.log(etudiant);
          return etudiant;
      });
    }
    /*else
    {
     this.services.create(etudiant).subscribe(
       (res: any) => console.log(res));
    }*/
  }



