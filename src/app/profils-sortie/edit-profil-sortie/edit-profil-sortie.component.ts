import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilSortie, ProfilSorties } from 'src/app/models/profil-sortie.model';
import { Profil, Profile } from 'src/app/models/profils.model';
import { ProfilSortieService } from 'src/app/services/profil-sortie.service';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-edit-profil-sortie',
  templateUrl: './edit-profil-sortie.component.html',
  styleUrls: ['./edit-profil-sortie.component.scss']
})
export class EditProfilSortieComponent implements OnInit {

  profilSortie: ProfilSortie[] | any;

  isUpdate = false;
  userId: number | any;

  constructor(private services: ProfilSortieService, private route: ActivatedRoute, private http: HttpClient) { }

  data: ProfilSorties = {
  libelle: '',
  deleted: false
  };
  routeur: Router | undefined;
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

    const profil = form.value;
    const id = this.userId;

    this.services.update(profil, id).subscribe(
        (res: any) => {
          profil.id = id;
          console.log(profil);
          return profil;
      });
    location.reload();
  }

}
