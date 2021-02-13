import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Profil } from 'src/app/models/profils.model';
import { Utilisateur } from 'src/app/models/user.interface';
import { User, UserModel} from 'src/app/models/users.model';
import { ProfilService } from 'src/app/services/profil.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

  // @ViewChild('userPost')  myform: NgForm | undefined;

   profils = new FormControl();

  hide = true;
  utilisateur: UserModel [] = [];
  User: User [] = [];
  userData = {
    prenom: '',
    nom: '',
    email: '',
    password: '',
    telephone: '',
    profil: '',
    avatar: ''
  };
  tokenUser: any;
  profil: Profil[] | any;


  constructor(private userService: UserService, private service: ProfilService) { }
  ngOnInit(): any {
    this.service.getAll().subscribe(
    res => {
      this.profil = res;
  });
}

  OnSubscribe(form: NgForm): any{
 this.userData.prenom = form.value.prenom;
 this.userData.nom = form.value.nom;
 this.userData.email = form.value.email;
 this.userData.password = form.value.cpassword;
 this.userData.telephone = form.value.telephone;
 console.log(form.value.profil);

 this.userData.profil = form.value.profil;
 this.userData.avatar = form.value.avatar;
 console.log(this.userData);
 this.userService.create(this.utilisateur).subscribe(
   (res: any) => {
    this.userService.getAll().subscribe(
      result => {
        console.log(result);
        this.User = result;
    });
    });


  }

}

/*onAddSecImage(){
  const  control = new FormControl(null, Validators.required);
  (<FormArray>this.bienForm.get('imagesSec')).push(control);
}*/
