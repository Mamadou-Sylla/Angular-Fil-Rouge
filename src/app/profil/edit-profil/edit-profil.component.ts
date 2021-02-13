import { HttpClient } from '@angular/common/http';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil, Profile, ProfilModel } from 'src/app/models/profils.model';
import { ProfilService } from 'src/app/services/profil.service';
import { ListProfilComponent } from '../list-profil/list-profil.component';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss']
})
export class EditProfilComponent implements OnInit {

 profil: Profil[] | any;

  isUpdate = false;
  userId: number | any;
  private routes: Router | any;

  constructor(private services: ProfilService, private route: ActivatedRoute, private http: HttpClient) { }

  data: Profile = {
  libelle: '',
  is_deleted: false,
  etat: false
  };

  ngOnInit(): void {

    this.userId = this.route.snapshot.params.id;
    this.services.getById(this.userId).subscribe(
      (res: any) => {
        // console.log(res);
        this.data = res;
        console.log(this.data);
      }
    );
  }


  OnSubmit(form: NgForm): any
  {
    console.log(this.profil);

    const profil = form.value;
    const id = this.userId;
    this.services.update(profil, id).subscribe(
        (res: any) => {
          console.log(res);
          profil.id = id;
          return profil;
      });
    location.reload();
  }
}

